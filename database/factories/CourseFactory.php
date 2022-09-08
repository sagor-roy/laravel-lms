<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'cate_id' => $this->faker->numberBetween(1,5),
            'title' => $this->faker->realText(30),
            'slug' => Str::slug($this->faker->realText(30)),
            'tags' => "html,css,js,php",
            'short' => $this->faker->realText(100),
            'desc' => $this->faker->realText(500),
            'status' => '1',
            'video_link' => null,
            'img' => $this->faker->imageUrl(700,500),
            'type' => 'paid',
            'price' => $this->faker->numberBetween(2500,9000),
            'discount' => $this->faker->numberBetween(1,9)
        ];
    }
}
