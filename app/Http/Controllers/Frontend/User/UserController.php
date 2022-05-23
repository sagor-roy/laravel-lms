<?php

namespace App\Http\Controllers\Frontend\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // profile
    public function profile() {
        return view('frontend.profile.profile');
    }

    // course
    public function course() {
        return view('frontend.profile.course');
    }

    // history
    public function history() {
        return view('frontend.profile.history');
    }

    // wishlist
    public function wishlist() {
        return view('frontend.profile.wishlist');
    }
}
