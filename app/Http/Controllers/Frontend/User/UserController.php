<?php

namespace App\Http\Controllers\Frontend\User;

use App\Http\Controllers\Controller;
use App\Models\Classes;
use App\Models\Course;
use App\Models\OrderItem;
use App\Models\Orders;
use App\Models\User;
use App\Models\Wishlist;
use Brian2694\Toastr\Facades\Toastr;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    // profile
    public function profile() {
        return view('frontend.profile.profile');
    }

    // player
    public function player($id) {
        try {
            $data = Classes::find(Crypt::decrypt($id));
            return view('lightbox',compact('data'));
        } catch (Exception $error) {
            abort(404);
        }
    }

    // invoice
    public function invoice($id) {
        $check = Orders::where('user_id',Auth::user()->id)->where('id',$id)->first();
        if ($check) {
            $order = Orders::find($id);
            $order_item = OrderItem::where('order_id',$order->id)->with('course')->get();
            return view('frontend.profile.invoice',compact('order','order_item'));
        }
        abort(404);
        
    }

    // course
    public function course() {
        $data = Orders::where('user_id',Auth::user()->id)->with('item.course')->get();
        return view('frontend.profile.course',compact('data'));
    }

    // notification
    public function readNoti($id) {
        $notification = auth()->user()->notifications()->where('id', $id)->first();

        if ($notification) {
            $notification->markAsRead();
            return redirect()->route('home');
        }
    }

    // notification delete
    public function deleteNoti() {
        $notifications = Auth()->User()->notifications()->get();
        foreach($notifications as $notification) {
            $notification->delete();  
        }
        return back();
    }

    // history
    public function history() {
        $data = Orders::where('user_id',Auth::user()->id)->get();
        return view('frontend.profile.history',compact('data'));
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
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|unique:users,email,'.$id
        ]);

        if($validator->fails()) {
            return redirect()->back()->withErrors(Toastr::error($validator->errors()->all()[0]))->withInput();
        }

        try {
            $user = User::find($id);
            $user->name = $request->input('name');
            $user->email = $request->input('email');
            $user->mobile = $request->input('mobile');
            $user->address = $request->input('address');
            $user->country = $request->input('country');
            if ($request->hasFile('img')) {
                $file = $request->file('img');
                $name = substr(md5(time()), 0, 15).'.'.$file->getClientOriginalExtension();
                $file->move('uploads/users/',$name);

                if ($user->img !== null) {
                    if (file_exists(public_path($user->img))) {
                        unlink(public_path($user->img));
                    }
                }

                $user->img = 'uploads/users/'.$name;
            }
            $user->update();
            Toastr::success('User update successful!!!');
            return redirect()->back();
        } catch (Exception $th) {
            Toastr::error($th->getMessage());
            return redirect()->back();
        }
    }

    public function checkout() {
        return view('frontend.checkout');
    }

    public function buyNow(Request $request) {
        $course = Course::find($request->input('course_id'));
        $cart = \session()->has('cart') ? \session()->get('cart') : [];
        if (!key_exists($course->id, $cart)) {
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
        }
        return view('frontend.checkout');
    }

}
