<?php

namespace Database\Seeders;

use App\Models\Field;
use App\Models\Subscriber;
use Illuminate\Database\Seeder;

class SubscriberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $activeSubscriber = Subscriber::factory()
            ->active()
            ->create();

        $birthdayField = Field::factory()
            ->date()
            ->create(['title' => 'Birth date']);

        $favoriteColorField = Field::factory()
            ->string()
            ->create(['title' => 'Favorite color']);

        $coffeeField = Field::factory()
            ->boolean()
            ->create(['title' => 'Loves coffee']);

        $amountOfPetsField = Field::factory()
            ->number()
            ->create(['title' => 'Amount of pets']);

        $activeSubscriber->fields()->attach($birthdayField->id, ['value' => '1972-12-29']);
        $activeSubscriber->fields()->attach($favoriteColorField->id, ['value' => 'Blue']);
        $activeSubscriber->fields()->attach($coffeeField->id, ['value' => true]);
        $activeSubscriber->fields()->attach($amountOfPetsField->id, ['value' => 2]);

        $junkSubscriber = Subscriber::factory()
            ->junk()
            ->create(['name' => 'John Doe', 'email' => 'john@example.com']);
    }
}
