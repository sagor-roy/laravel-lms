<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\CourseController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\User\UserController;
use App\Models\Classes;
use Illuminate\Support\Facades\Route;

Route::get('preview/{id}',function($id){
    $data = Classes::find($id);
    return view('lightbox',compact('data'));
})->name('player');

// Frontend
Route::get('/',[HomeController::class,'index'])->name('home');
Route::get('cart',[HomeController::class,'cart'])->name('cart');
Route::get('add-to-cart/{id}',[HomeController::class,'addCart'])->name('add.cart');
Route::get('remove/{id}',[HomeController::class,'remove'])->name('cart.remove');
Route::get('tab-course',[HomeController::class,'allCourse'])->name('tab.course');
Route::get('cate-course/{id}',[HomeController::class,'cateCourse'])->name('cate.course');
Route::get('course/{id}/{slug}',[HomeController::class,'singleCourse'])->name('single.course');

// User
Route::prefix('user')->middleware('auth')->name('user.')->group(function(){
    Route::get('profile',[UserController::class,'profile'])->name('profile');
    Route::post('profile/update/{id}',[UserController::class,'update']);
    Route::get('my-course',[UserController::class,'course'])->name('course');
    Route::get('purchase-history',[UserController::class,'history'])->name('history');
    Route::get('wishlist',[UserController::class,'wishlist'])->name('wishlist');
    Route::get('wishlist-remove/{id}',[UserController::class,'remove'])->name('wishlist.remove');
    Route::get('add-to-wishlist/{id}',[UserController::class,'addwishlist'])->name('add.wishlist');
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

    // category
    Route::prefix('category')->name('cate.')->group(function(){
        Route::get('/',[CategoryController::class,'index'])->name('index');
        Route::get('show',[CategoryController::class,'show'])->name('show');
        Route::post('multi/delete',[CategoryController::class,'multiDestroy'])->name('multi-delete');
        Route::post('store',[CategoryController::class,'store'])->name('store');
        Route::post('update/{id}',[CategoryController::class,'update'])->name('update');
        Route::post('status/update/{id}',[CategoryController::class,'status'])->name('status.update');
        Route::get('destroy/{id}',[CategoryController::class,'destroy'])->name('destroy');
    });

    // course
    Route::prefix('course')->name('course.')->group(function(){
        Route::get('/',[CourseController::class,'index'])->name('index');
        Route::get('duplicate/{id}',[CourseController::class,'duplicate'])->name('duplicate');
        Route::get('create',[CourseController::class,'create'])->name('create');
        Route::post('store',[CourseController::class,'store'])->name('store');
        Route::get('edit/{id}',[CourseController::class,'edit'])->name('edit');
        Route::post('update/{id}',[CourseController::class,'update'])->name('update');
        Route::post('status/update/{id}',[CourseController::class,'status'])->name('status.update');
        Route::get('destroy/{id}',[CourseController::class,'destroy'])->name('destroy');

        // tab active
        Route::post('active',[CourseController::class,'active'])->name('active');

        // chapter
        Route::post('chpater/store/{id}',[CourseController::class,'chapter'])->name('chapter.store');
        Route::post('chpater/status/{course}/{chapter}',[CourseController::class,'chapterStatus'])->name('chapter.status');
        Route::post('chpater/update/{course}/{chapter}',[CourseController::class,'chapterUpdate'])->name('chapter.update');
        Route::get('chpater/delete/{course}/{chapter}',[CourseController::class,'chapterDelete'])->name('chapter.destroy');
        Route::post('class/store/{id}',[CourseController::class,'classes'])->name('class.store');
        Route::post('class/status/{id}',[CourseController::class,'classStatus'])->name('class.status');
        Route::post('class/update/{id}',[CourseController::class,'classUpdate'])->name('class.update');
        Route::get('class/delete/{id}',[CourseController::class,'classDelete'])->name('class.destroy');
    });
});


