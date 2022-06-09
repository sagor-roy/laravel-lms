<?php

namespace Database\Factories;

use App\Models\Comments;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Comments::class;

    public function definition()
    {
        return [
            'user_id'=> 12,
            'post_id'=> $this->faker->numberBetween(3,10),
            'comment'=> $this->faker->realText(50),
            'learn'=> $this->faker->numberBetween(1,5),
            'price'=> $this->faker->numberBetween(1,5),
            'value'=> $this->faker->numberBetween(1,5),
        ];
    }
}
