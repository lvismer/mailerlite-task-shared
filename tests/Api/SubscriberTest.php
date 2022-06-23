<?php

namespace Tests\Api;

use App\Models\Field;
use App\Models\Subscriber;
use App\Models\User;
use Laravel\Sanctum\Sanctum;
use function Pest\Laravel\delete;
use function Pest\Laravel\get;
use function Pest\Laravel\postJson;

it('returns a subscriber with its fields', function () {
    Sanctum::actingAs(
        User::factory()->create(),
    );

    $activeSubscriber = Subscriber::factory()
        ->active()
        ->create();

    $birthdayField = Field::factory()
        ->date()
        ->create(['title' => 'Birth date']);

    $favoriteColor = Field::factory()
        ->string()
        ->create(['title' => 'Favorite color']);

    $activeSubscriber->fields()->attach($birthdayField->id, ['value' => '1972-12-29']);
    $activeSubscriber->fields()->attach($favoriteColor->id, ['value' => 'Blue']);

    get(route('subscribers.show', $activeSubscriber->id))
        ->assertStatus(200)
        ->assertJson([
            'data' => [
                'name'   => $activeSubscriber->name,
                'email'  => $activeSubscriber->email,
                'status' => 'active',
            ],
        ])
        ->assertJsonCount(2, 'data.fields');
});

it('allows a subscriber to be created', function () {
    Sanctum::actingAs(
        User::factory()->create(),
    );

    postJson(route('subscribers.store'), [
        'name'   => 'John Doe',
        'email'  => 'john@example.com',
        'status' => 'unsubscribed',
    ])
        ->assertStatus(201)
        ->assertJson([
            'data' => [
                'name'   => 'John Doe',
                'email'  => 'john@example.com',
                'status' => 'unsubscribed',
            ],
        ]);
});

it('allows a subscriber to be deleted', function () {
    Sanctum::actingAs(
        User::factory()->create(),
    );

    $activeSubscriber = Subscriber::factory()
        ->active()
        ->create();

    delete(route('subscribers.destroy', ['subscriber' => $activeSubscriber->id]))
        ->assertStatus(200)
        ->assertJson(['success' => true]);

    $this->assertDatabaseMissing('subscribers', ['name' => $activeSubscriber->name]);
});

it('validates a subscribers email address is required', function () {
    Sanctum::actingAs(
        User::factory()->create(),
    );

    postJson(route('subscribers.store'), [])
        ->assertStatus(422)
        ->assertJsonValidationErrorFor('email');
});

it('validates a subscribers email address domain is correct', function () {
    Sanctum::actingAs(
        User::factory()->create(),
    );

    postJson(route('subscribers.store'), ['email' => 'john@test.localhost'])
        ->assertStatus(422)
        ->assertJsonValidationErrorFor('email');
});

it('validates a subscribers name address is required', function () {
    Sanctum::actingAs(
        User::factory()->create(),
    );

    postJson(route('subscribers.store'), [])
        ->assertStatus(422)
        ->assertJsonValidationErrorFor('name');
});

it('validates a subscribers status address is required', function () {
    Sanctum::actingAs(
        User::factory()->create(),
    );

    postJson(route('subscribers.store'), [])
        ->assertStatus(422)
        ->assertJsonValidationErrorFor('status');
});

it('allows a field to be linked to a subscriber', function () {
    Sanctum::actingAs(
        User::factory()->create(),
    );

    $activeSubscriber = Subscriber::factory()
        ->active()
        ->create();

    $birthdayField = Field::factory()
        ->date()
        ->create(['title' => 'Birth date']);

    postJson(route('subscribers.fields.store', ['subscriber' => $activeSubscriber->id, 'field' => $birthdayField->id]), ['value' => '1998-10-01'])
        ->assertStatus(200)
        ->assertJson([
            'data' => [
                'title' => $birthdayField->title,
                'type'  => $birthdayField->type,
                'value' => '1998-10-01',
            ],
        ]);
});

it('allows a field to be deleted from a subscriber', function () {
    Sanctum::actingAs(
        User::factory()->create(),
    );

    $activeSubscriber = Subscriber::factory()
        ->active()
        ->create();

    $birthdayField = Field::factory()
        ->date()
        ->create(['title' => 'Birth date']);

    $activeSubscriber->fields()->attach($birthdayField->id, ['value' => '1998-10-01']);

    $this->assertDatabaseHas('field_subscriber', ['value' => '1998-10-01']);

    delete(route('subscribers.fields.store', ['subscriber' => $activeSubscriber->id, 'field' => $birthdayField->id]))
        ->assertStatus(200)
        ->assertJson(['success' => true]);

    $this->assertDatabaseMissing('field_subscriber', ['value' => '1998-10-01']);
});
