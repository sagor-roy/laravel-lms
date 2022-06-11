<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Categories;
use App\Models\Course;
use App\Models\Orders;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class DashboardController extends Controller
{
    // dashboard
    public function index() {
        $user = User::where('role','!=','super')->count();
        $course = Course::count();
        $cate = Categories::count();
        $to_order = Orders::count();
        $com_order = Orders::where('order_status','complete')->count();
        $pro_order = Orders::where('order_status','processing')->count();
        $today_order =  Orders::whereDate('updated_at', '>=', date('Y-m-d'))->count();
        $week_order =  Orders::whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count();
        $month_order =  Orders::whereMonth('updated_at', '>=', date('m'))->count();
        $year_order =  Orders::whereYear('updated_at', '>=', date('Y-m-d'))->count();
        $ssl = Orders::where('method','ssl')->sum('amount');
        return view('backend.dashboard',compact('user','course','cate','to_order','com_order','pro_order','today_order','month_order','year_order','week_order','ssl'));
    }
}
