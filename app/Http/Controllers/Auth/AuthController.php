<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\User;
use Brian2694\Toastr\Facades\Toastr;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    // index 
    public function index() {
        return view('auth.login');
    }

    // index 
    public function register() {
        return view('auth.register');
    }

    // access 
    public function login(Request $request) {
        if ($request->input('check') == 'login') {
            $request->validate([
                'email' => 'required|email',
                'password' => 'required',
            ]);
        }else{
            $validator = Validator::make($request->all(), [
                'email' => 'required|email',
                'password' => 'required',
            ]);
    
            if($validator->fails()) {
                return redirect()->back()->withErrors(Toastr::error($validator->errors()->all()[0]))->withInput();
            }
        }

        
        try {
            if (isset($request->buy)) {
                $course = Course::find($request->input('buy'));
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
            }

            $credential = $request->only('email', 'password');
            if (Auth::attempt($credential)) {
                if (Auth::user()->role == 'super') {
                    Toastr::success('Welcome to Dashboard');
                    return redirect()->route('admin.dashboard');
                } 
                if ($request->input('check') == 'login') {
                    Toastr::success('Login Successful!!');
                    return redirect()->route('home');
                }
                return redirect()->route('user.checkout');
            }
            Toastr::error('Creadential does\'t match our record');
            Session::flash('type','error');
            Session::flash('message','Creadential does\'t match our record');
            return redirect()->back();
        } catch (Exception $error) {
            Toastr::error('Something went wrong!!');
            Session::flash('type','error');
            Session::flash('message',$error->getMessage());
            return redirect()->back();
        }
    }

    // Register store
    public function store(Request $request) {
        $request->validate([
            'name'=>'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed',
        ]);

        try {
            $user = User::create([
                'role'=>'user',
                'name'=>$request->input('name'),
                'email'=>$request->input('email'),
                'password'=>Hash::make($request->input('password')),
            ]);
            Auth::login($user);
            Toastr::success('Thank you for Registration !!');
            return redirect()->route('home');
        } catch (Exception $error) {
            Toastr::error('Something went wrong!!');
            Session::flash('type','error');
            Session::flash('message',$error->getMessage());
            return redirect()->back();
        }
    }

    // logout
    public function logout()
    {
        Auth::logout();
        Toastr::success('Logout Successfull!!');
        return redirect()->route('home');
    }
}
