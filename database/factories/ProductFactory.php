<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'stock' => $this->faker->numberBetween(1, 100),
            'category' => $this->faker->randomElement(['TV/Monitors', 'PC', 'Gaming/Console', 'Phones']),
            'price' => $this->faker->numberBetween(10000, 1000000),
            'description' => $this->faker->sentence(),
        ];
    }
}
