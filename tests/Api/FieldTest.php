<?php

namespace Tests\Api;

use App\Models\Field;
use App\Models\User;
use Laravel\Sanctum\Sanctum;

use function Pest\Laravel\delete;
use function Pest\Laravel\postJson;
use function Pest\Laravel\putJson;

it('allows a field to be created', function () {
    Sanctum::actingAs(
        User::factory()->create(),
    );

    postJson(route('fields.store'), [
        'title' => 'Your birthday',
        'type'  => 'date',
    ])
        ->assertStatus(201)
        ->assertJson([
            'data' => [
                'title' => 'Your birthday',
                'type'  => 'date',
            ],
        ]);
});

it('allows a field to be updated', function () {
    Sanctum::actingAs(
        User::factory()->create(),
    );

    $birthdayField = Field::factory()
        ->date()
        ->create(['title' => 'Your birthday WITH TYPO']);

    $this->assertDatabaseHas('fields', ['title' => 'Your birthday WITH TYPO', 'type' => $birthdayField->type]);

    putJson(route('fields.update', ['field' => $birthdayField->id]), [
        'title' => 'Your birthday',
        'type'  => 'date',
    ])
        ->assertStatus(200)
        ->assertJson([
            'data' => [
                'title' => 'Your birthday',
                'type'  => 'date',
            ],
        ]);

    $this->assertDatabaseHas('fields', ['title' => 'Your birthday', 'type' => $birthdayField->type]);
});

it('allows a field to be deleted', function () {
    Sanctum::actingAs(
        User::factory()->create(),
    );

    $birthdayField = Field::factory()
        ->date()
        ->create(['title' => 'Your birthday']);

    $this->assertDatabaseHas('fields', ['title' => $birthdayField->title, 'type' => $birthdayField->type]);

    delete(route('fields.destroy', ['field' => $birthdayField->id]))
        ->assertStatus(200)
        ->assertJson(['success' => true]);

    $this->assertDatabaseMissing('subscribers', ['title' => $birthdayField->title]);
});

it('validates a field title is required', function () {
    Sanctum::actingAs(
        User::factory()->create(),
    );

    postJson(route('fields.store'), [])
        ->assertStatus(422)
        ->assertJsonValidationErrorFor('title');
});

it('validates a field type is required', function () {
    Sanctum::actingAs(
        User::factory()->create(),
    );

    postJson(route('fields.store'), [])
        ->assertStatus(422)
        ->assertJsonValidationErrorFor('type');
});
