<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Subscriber>
 */
class FieldFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $title = $this->faker->sentence(4);

        return [
            'title' => $title,
            'type'  => null,
        ];
    }

    /**
     * Indicate that the model's type should be a active.
     *
     * @return static
     */
    public function date()
    {
        return $this->state(function (array $attributes) {
            return [
                'type' => 'date',
            ];
        });
    }

    /**
     * Indicate that the model's type should be a active.
     *
     * @return static
     */
    public function number()
    {
        return $this->state(function (array $attributes) {
            return [
                'type' => 'number',
            ];
        });
    }

    /**
     * Indicate that the model's type should be a active.
     *
     * @return static
     */
    public function string()
    {
        return $this->state(function (array $attributes) {
            return [
                'type' => 'string',
            ];
        });
    }

    /**
     * Indicate that the model's type should be a active.
     *
     * @return static
     */
    public function boolean()
    {
        return $this->state(function (array $attributes) {
            return [
                'type' => 'boolean',
            ];
        });
    }
}
