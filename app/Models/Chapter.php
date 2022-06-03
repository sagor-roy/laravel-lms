<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'name',
        'slug',
        'status',
    ];

    public function course() {
        return $this->hasMany(Chapter::class);
    }

    public function chapters() {
        return $this->hasMany(Classes::class,'chapter_id');
    }
}
