<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cate_id');
            $table->string('title');
            $table->string('slug');
            $table->string('tags');
            $table->text('short');
            $table->longText('desc');
            $table->enum('status',['1','0']);
            $table->string('video_link')->nullable();
            $table->string('img');
            $table->enum('type',['free','paid']);
            $table->double('price')->nullable();
            $table->double('discount')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }
};
