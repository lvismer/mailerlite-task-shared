<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Subscriber>
 */
class SubscriberFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name'   => $this->faker->name(),
            'email'  => $this->faker->unique()->safeEmail(),
            'status' => null,
        ];
    }

    /**
     * Indicate that the model's status should be active.
     *
     * @return static
     */
    public function active()
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => 'active',
            ];
        });
    }

    /**
     * Indicate that the model's status should be active.
     *
     * @return static
     */
    public function unsubscribed()
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => 'unsubscribed',
            ];
        });
    }

    /**
     * Indicate that the model's status should be active.
     *
     * @return static
     */
    public function junk()
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => 'junk',
            ];
        });
    }

    /**
     * Indicate that the model's status should be active.
     *
     * @return static
     */
    public function bounced()
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => 'bounced',
            ];
        });
    }

    /**
     * Indicate that the model's status should be active.
     *
     * @return static
     */
    public function unconfirmed()
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => 'unconfirmed',
            ];
        });
    }
}
