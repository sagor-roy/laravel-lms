<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
    use HasFactory;


    protected $fillable = [
        'user_id',
        'post_id',
        'parent_id',
        'comment',
        'learn',
        'price',
        'value',
    ];

    public function user() {
        return $this->belongsTo(User::class,'user_id');
    }

    public function cate() {
        return $this->belongsTo(Course::class,'id');
    }

    public function post() {
        return $this->belongsTo(Course::class,'id');
    }

    public function replies() {
        return $this->hasMany(Comments::class,'parent_id');
    }
}
