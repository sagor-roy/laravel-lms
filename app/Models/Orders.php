<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'amount',
        'status',
        'order_status',
        'transaction_id',
        'currency',
        'method'
    ];

    public function user() {
        return $this->belongsTo(User::class,'user_id');
    }

    public function item() {
        return $this->hasMany(OrderItem::class,'order_id','id');
    }
}
