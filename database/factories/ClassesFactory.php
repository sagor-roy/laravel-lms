<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\classes>
 */
class ClassesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'course_id' => $this->faker->numberBetween(1,8),
            'chapter_id' => $this->faker->numberBetween(1,70),
            'title' => $this->faker->realText(35),
            'detail' => $this->faker->realText(100),
            'link' => null,
            'duration' => $this->faker->numberBetween(5,12),
            'status' => '1'
        ];
    }
}
