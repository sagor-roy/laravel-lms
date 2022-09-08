<?php

namespace Database\Seeders;

use App\Models\Categories;
use App\Models\Chapter;
use App\Models\Classes;
use App\Models\Course;
use App\Models\Question;
use App\Models\Quiz;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(1)->create();
        Categories::factory(5)->create();
        Course::factory(8)->create();
        Chapter::factory(70)->create();
        Classes::factory(200)->create();
        Quiz::factory(100)->create();
        Question::factory(200)->create();
        $this->call(RolePermissionSeeder::class);
    }
}
