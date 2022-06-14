<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Categories;
use App\Models\Course;
use App\Models\Orders;
use App\Models\User;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

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
        $users =  User::select(DB::raw("COUNT(*) as count"))->where('role','!=','super')->whereYear('created_at',date('Y'))->groupBy(DB::raw("Month(created_at)"))->pluck('count');
        $months = User::select(DB::raw("Month(created_at) as month"))->where('role','!=','super')->whereYear('created_at',date('Y'))->groupBy(DB::raw("Month(created_at)"))->pluck('month');
        $datas = [0,0,0,0,0,0,0,0,0,0,0,0];
        foreach($months as $index=>$month)
        {
            $datas[$month-1] = $users[$index];
        } 
        return view('backend.dashboard',compact('user','course','cate','to_order','com_order','pro_order','today_order','month_order','year_order','week_order','ssl','datas'));
    }


    // role
    public function roleIndex(){
        return view('backend.role.index');
    }

    public function roleUser(){
        return view('backend.role.user');
    }

    public function list(){
        $roles = Role::where('id','!=',1)->get();
        return view('backend.role.role',compact('roles'));
    }

    public function edit($id){
        if ($id != 1) {
            if (Role::where('id','=',$id)->first()) {
                $group = User::getGroupName();
                $allPermissions = Permission::get();
                $total = count($group) + count($allPermissions);
                $roles = Role::find($id);
                return view('backend.role.edit',compact('group','allPermissions','total','roles'));
            }
            abort(404);
        }
        abort(404);
    }

    public function create(){
        $group = User::getGroupName();
        $allPermissions = Permission::get();
        $total = count($group) + count($allPermissions);
        return view('backend.role.create',compact('group','allPermissions','total'));
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'role' => 'required|unique:roles,name',
        ],
        [
            'role.required' => 'The role name field is require'
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors(Toastr::error($validator->errors()->all()[0]))->withInput();
        }

        $role = Role::create(['name' => $request->input('role')]);
        $permission = $request->input('permission');
        if (!empty($permission)) {
            $role->syncPermissions($permission);
        }
        Toastr::success('Role create successful!!');
        return redirect()->back();
    }

    public function update(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'role' => 'required',
        ],
        [
            'role.required' => 'The role name field is require'
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors(Toastr::error($validator->errors()->all()[0]))->withInput();
        }

        $role = Role::find($id);
        $permission = $request->input('permission');
        if (!empty($permission)) {
            $role->syncPermissions($permission);
        }
        Toastr::success('Role update successful!!');
        return redirect()->back();
    }


    public function destroy($id)
    {
        $role = Role::find($id);
        if (!is_null($role)) {
            $role->delete();
        }
        Toastr::success('Role delete successful!!');
        return redirect()->back();
    }
}
