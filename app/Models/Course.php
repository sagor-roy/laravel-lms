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

    public function course() {
        return $this->hasMany(OrderItem::class,'course_id');
    }

    public function comment() {
        return $this->hasMany(Comments::class,'post_id')->whereNull('parent_id')->orderBy('id','desc');
    }
}
