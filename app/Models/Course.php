<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'cate_id',
        'title',
        'slug',
        'tags',
        'short',
        'desc',
        'status',
        'video_link',
        'img',
        'type',
        'price',
        'discount'
    ];

    public function cate() {
        return $this->belongsTo(Categories::class,'id');
    }
}
