<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'order_id',
        'course_id'
    ];

    public function course() {
        return $this->belongsTo(Course::class,'course_id')->where('status',1);
    }

    public function order() {
        return $this->belongsTo(Orders::class,'id','order_id');
    }
}
