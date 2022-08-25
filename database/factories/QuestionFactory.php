<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Question>
 */
class QuestionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function getName($n)
    {
        $characters = 'abcd';
        $randomString = '';

        for ($i = 0; $i < $n; $i++) {
            $index = rand(0, strlen($characters) - 1);
            $randomString .= $characters[$index];
        }

        return $randomString;
    }


    public function definition()
    {
        return [
            'quiz_id' => $this->faker->numberBetween(1, 5),
            'ques' => $this->faker->realText(40),
            'a' => $this->faker->realText(20),
            'b' => $this->faker->realText(20),
            'c' => $this->faker->realText(20),
            'd' => $this->faker->realText(20),
            'answer' => $this->getName(1)
        ];
    }
}
