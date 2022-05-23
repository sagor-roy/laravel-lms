<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\User\UserController;
use Illuminate\Support\Facades\Route;

// Frontend
Route::get('/',[HomeController::class,'index'])->name('home');

// User
Route::prefix('user')->middleware('auth')->name('user.')->group(function(){
    Route::get('profile',[UserController::class,'profile'])->name('profile');
    Route::get('my-course',[UserController::class,'course'])->name('course');
    Route::get('purchase-history',[UserController::class,'history'])->name('history');
    Route::get('wishlist',[UserController::class,'wishlist'])->name('wishlist');
});

// Auth
Route::middleware('guest')->group(function(){
    Route::get('login',[AuthController::class,'index'])->name('login');
    Route::get('register',[AuthController::class,'register'])->name('register');
    Route::post('access',[AuthController::class,'login'])->name('access');
    Route::post('store',[AuthController::class,'store'])->name('store');
});
Route::get('logout',[AuthController::class,'logout'])->name('logout');

// Backend
Route::prefix('admin')->middleware('admin')->name('admin.')->group(function(){
    // dashboard
    Route::get('dashboard',[DashboardController::class,'index'])->name('dashboard');
});

