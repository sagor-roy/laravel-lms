<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'chapter_id',
        'title',
        'detail',
        'link',
        'status',
        'duration'
    ];

    public function chapter() {
        return $this->belongsTo(Chapter::class,'chapter_id');
    }

    
    public function classes() {
        return $this->belongsTo(Chapter::class,'id');
    }
}
