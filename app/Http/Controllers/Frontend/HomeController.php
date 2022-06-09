<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Categories;
use App\Models\Chapter;
use App\Models\Comments;
use App\Models\Course;
use App\Models\Orders;
use App\Models\User;
use App\Notifications\RepliesNotification;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class HomeController extends Controller
{
    // index
    public function index() {
        $counter = 0;
        $data = [];
        $cate = Categories::where('status','=','1')->with('courses')->get();
        $courses = \session()->has('recent') ? \session()->get('recent') : [];
        if (Auth::check()) {
            foreach ($courses as $item) {
                if ($item['user_id'] == Auth::user()->id) {
                    $counter++;
                }
             }

            $data = Orders::where(['user_id'=>Auth::user()->id, 'order_status'=>'complete'])
            ->with('item.course')
            ->get();
        }
        $totalView=$counter;
        
        return view('frontend.home',compact('cate','totalView','data'));
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
        $check = false;
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

            $coursess = Orders::where('user_id',Auth::user()->id)->with('item')->get();
            foreach ($coursess as $item) {
                foreach ($item->item as $course) {
                    if ($course->course_id == $id && $item->order_status == 'complete') {
                        $check = true;
                    }
                }
            }
            
        }
        $recent = Course::where('id','!=',$id)->orderBy('id','DESC')->limit(5)->get();
        $chptr = Chapter::where('course_id',$id)->with('chapters')->get();

        $comments = Course::where('id',$id)->with('comment.user','comment.replies','comment.replies.user')->get();
        // dd($comments->toArray());
        return view('frontend.single',compact('data','chptr','check','recent','comments'));
    }

    // comment show with ajax
    public function userComments($id) {
        $comments = Course::where('id',$id)->with('comment.user','comment.replies','comment.replies.user')->get();
        return view('frontend.load.review',compact('comments'));
    }
    // feedback show with ajax
    public function userFeedback($id) {
        return view('frontend.load.feedback',compact('id'));
    }

    public function commentStore(Request $request) {
        $request->validate([
            'comment'=>'required',
            'learn'=>'required|array',
            'learn.*'=>'int',
            'price'=>'required|array',
            'price.*'=>'int',
            'value'=>'required|array',
            'value.*'=>'int'
        ]);
        Comments::create([
            'user_id' => $request->input('user_id'),
            'post_id' => $request->input('post_id'),
            'comment' => $request->input('comment'),
            'learn' => $request->input('learn')[0],
            'price' => $request->input('price')[0],
            'value' => $request->input('value')[0],
        ]);
        return response()->json('Success');
    }

    public function repliesStore(Request $request) {
        Comments::create([
            'user_id' => $request->input('user_id'),
            'post_id' => $request->input('post_id'),
            'parent_id' => $request->input('parent_id'),
            'comment' => $request->input('comments'),
        ]);
        $user = User::find($request->comment_user_id);
        $user->notify(new RepliesNotification);
        return redirect()->back();
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

    public function search(Request $request) {
        if ($request->get('query')) {
            $query = $request->get('query');
            $data = Course::where('title', 'LIKE', "%{$query}%")->where('status', 1)->limit(10)->get();
            $tags = \session()->has('tags') ? \session()->get('tags') : [];
            return view('frontend.load.search_list',compact('data','tags'));
        }
    }

    public function searchCourse(Request $request) {
        $query = $request->input('query');
        $tags = \session()->has('tags') ? \session()->get('tags') : [];
        $tags[$id = rand(1,99)]  = [
            'name' => $query
        ];
        \session(['tags' => $tags]);
        $data = Course::where('title', 'LIKE', "%{$query}%")->where('status', 1)->limit(10)->get();
        return view('frontend.search',compact('data'));
    }

    public function singleHis($id) {
        $tags = \session()->has('tags') ? \session()->get('tags') : [];
        if (key_exists($id, $tags)) {
            unset($tags[$id]);
            session(['tags' => $tags]);
            return redirect()->back();
        }
        abort(404);
    }

    public function hisForget() {
        Session::forget('tags');
        Toastr::success('All History Are Delete');
        return redirect()->back();
    }
    
}
