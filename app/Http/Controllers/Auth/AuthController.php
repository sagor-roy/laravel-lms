<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
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
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        
        try {
            $credential = $request->only('email', 'password');
            if (Auth::attempt($credential)) {
                if (Auth::user()->role == 'super') {
                    Toastr::success('Welcome to Dashboard');
                    return redirect()->route('admin.dashboard');
                } 
                Toastr::success('Login Successfull!!');
                return redirect()->route('home');
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
            User::create([
                'role'=>'user',
                'name'=>$request->input('name'),
                'email'=>$request->input('email'),
                'password'=>Hash::make($request->input('password')),
            ]);
            Toastr::success('Thank you for registration');
            Session::flash('type','success');
            Session::flash('message','Registration Successfull !!!');
            return redirect()->route('login');
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
