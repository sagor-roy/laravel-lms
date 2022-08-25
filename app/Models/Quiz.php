<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'chapter_id',
        'quiz',
    ];

    public function chapter() {
        return $this->belongsTo(Chapter::class,'id');
    }

    public function ques() {
        return $this->hasMany(Question::class,'quiz_id');
    }
}
