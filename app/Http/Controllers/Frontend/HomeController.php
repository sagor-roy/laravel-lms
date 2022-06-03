<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Categories;
use App\Models\Chapter;
use App\Models\Classes;
use App\Models\Course;
use App\Models\Wishlist;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class HomeController extends Controller
{
    // index
    public function index() {
        $counter = 0;
        $cate = Categories::where('status','=','1')->with('courses')->get();
        $courses = \session()->has('recent') ? \session()->get('recent') : [];
        if (Auth::check()) {
            foreach ($courses as $item) {
                if ($item['user_id'] == Auth::user()->id) {
                    $counter++;
                }
             }
        }
        $totalView=$counter;
        return view('frontend.home',compact('cate','totalView'));
    }

    // cart
    public function cart() {
        $carts = \session()->has('cart') ? \session()->get('cart') : [];
        return view('frontend.cart',compact('carts'));
    }
    
    public function allCourse() {
        $cate = Categories::with('courses')->get();
        return view('frontend.load.tab',compact('cate'));
    }
    
    public function cateCourse($id) {
        $cate = Categories::where('id',$id)->with('courses')->get();
        return view('frontend.load.tab',compact('cate'));
    }
    
    public function singleCourse($id) {
        $data = Course::find($id);
        if (Auth::check()) {
            $course = \session()->has('recent') ? \session()->get('recent') : [];
            if (!key_exists($data->id, $course)) {
                $course[$data->id] = [
                    'id' => $data->id,
                    'user_id' => Auth::user()->id,
                    'title' => $data->title,
                    'slug' => $data->slug,
                    'img' => $data->img,
                    'type' => $data->type,
                    'discount' => $data->discount,
                    'price' => $data->price
                ];
                \session(['recent' => $course]);
            }
        }
        $chptr = Chapter::where('course_id',$id)->with('chapters')->get();
        return view('frontend.single',compact('data','chptr'));
    }

    public function addCart($id) {
        $course = Course::find($id);
        $cart = \session()->has('cart') ? \session()->get('cart') : [];
        if (key_exists($course->id, $cart)) {
            foreach ($cart as $key => $item) {
                if ($item['id'] == $id) {
                    unset($cart[$key]);
                }
            }
            session(['cart' => $cart]);
            Toastr::success('Course Remove to Cart');
            return redirect()->back();
        } else {
            $cart[$course->id] = [
                'id' => $course->id,
                'title' => $course->title,
                'slug' => $course->slug,
                'img' => $course->img,
                'type' => $course->type,
                'discount' => $course->discount,
                'price' => $course->price
            ];
            \session(['cart' => $cart]);
            Toastr::success('Course Add to Cart');
            return redirect()->back();
        }
    }

    public function remove($id)
    {
        $carts = \session()->has('cart') ? \session()->get('cart') : [];
        foreach ($carts as $key => $item) {
            if ($item['id'] == $id) {
                unset($carts[$key]);
            }
        }
        session(['cart' => $carts]);
        return redirect()->back();
    }
    
}
