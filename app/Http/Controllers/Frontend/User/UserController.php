<?php

namespace App\Http\Controllers\Frontend\User;

use App\Http\Controllers\Controller;
use App\Models\Wishlist;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        $data = Wishlist::where('user_id', Auth::user()->id)->with('course')->get();
        return view('frontend.profile.wishlist',compact('data'));
    }

    // wishlist remove
    public function remove($id) {
        Wishlist::find($id)->delete();
        Toastr::success('Course remove to Wishlist');
        return redirect()->back();
    }

    public function addwishlist($id) {
        $check = Wishlist::where('course_id',$id)->first();
        if ($check) {
            Toastr::error('Course already Add to Wishlist');
            return redirect()->back();
        }
        Wishlist::create([
            'user_id' => Auth::user()->id,
            'course_id' => $id
        ]);
        Toastr::success('Course Add to Wishlist');
        return redirect()->back();
    }

    public function update(Request $request, $id) {
        return $request;
    }

}
