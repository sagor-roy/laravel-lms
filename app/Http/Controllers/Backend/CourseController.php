<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Categories;
use App\Models\Chapter;
use App\Models\Classes;
use App\Models\Course;
use Brian2694\Toastr\Facades\Toastr;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Image;

class CourseController extends Controller
{
    public function index()
    {
        $data = Course::latest()->get();
        return view('backend.course.course',compact('data'));
    }

    public function create()
    {
        $data = Categories::get();
        return view('backend.add_course',compact('data'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'category'=>'required',
            'title'=>'required',
            'tags'=>'required',
            'short'=>'required',
            'desc'=>'required',
            'img'=>'required',
            'type'=>'required',
        ]);

        try {
             // summernote editor
             $description = $request->input('desc');
             $dom = new \DOMDocument('1.0', 'UTF-8');
             libxml_use_internal_errors(true);
             $dom->loadHtml($description);
             $images = $dom->getElementsByTagName('img');
             foreach ($images as $img) {
                 $src = $img->getAttribute('src');
                 if (preg_match('/data:image/', $src)) {
                     preg_match('/data:image\/(?<mime>.*?)\;/', $src, $groups);
                     $mimetype = $groups['mime'];
                     $filename = uniqid();
                     $filepath = "/uploads/summernote/$filename.$mimetype";
                     $images = Image::make($src)->encode($mimetype, 100)->save(public_path($filepath));
                     $new_src = asset($filepath);
                     $img->removeAttribute('src');
                     $img->setAttribute('src', $new_src);
                 }
             }

            $description = $dom->saveHTML();
            $store = new Course();
            $store->cate_id = $request->input('category');
            $store->title = $request->input('title');
            $store->slug = Str::slug($request->input('title'));
            $store->short = $request->input('short');
            $store->desc = $description;
            $store->tags = $request->input('tags');
            if ($request->input('status') == 1) {
                $store->status = '1';
            }else{
                $store->status = '0';
            }
            $store->video_link = $request->input('video_link');
            if ($request->hasFile('img')) {
                $file = $request->file('img');
                $name = substr(md5(time()), 0, 15).'.'.$file->getClientOriginalExtension();
                $file->move('uploads/course/',$name);
                $store->img = 'uploads/course/'.$name;
            }
            $store->type = $request->input('type');
            $store->price = $request->input('price');
            $store->discount = $request->input('discount');
            $store->save();
            Toastr::success('Course Created Successfull!!!!!');
            return redirect()->back();
        } catch (Exception $error) {
            Toastr::error($error->getMessage());
            Session::flash('message',$error->getMessage());
            return redirect()->back();
        }
    }

    public function duplicate($id)
    {
        $course = Course::find($id);
        $course->replicate()->save();
        Toastr::success($course->title.' Duplicate Successfull!!!!!!');
        return redirect()->back();
    }

    public function status(Request $request, $id)
    {
        try {
            if ($request->input('status') == 1) {
                $status = '1';
            }else{
                $status = '0';
            }
            Course::find($id)->update([
                'status' => $status
            ]);
            Toastr::success('Status Update Successful');
            return redirect()->back();
        } catch (Exception $error) {
            Toastr::error($error->getMessage());
            return redirect()->back();
        }
    }


    public function edit($id)
    {
        $course = Course::find($id);
        $cate = Categories::get();
        $chapter = Chapter::where('course_id',$id)->get();
        $class = Classes::where('course_id',$id)->with('chapter')->get();
        return view('backend.course.edit_course',compact('cate','course','chapter','class'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'category'=>'required',
            'title'=>'required',
            'tags'=>'required',
            'short'=>'required',
            'desc'=>'required',
            'type'=>'required',
        ]);

        try {
             // summernote editor
             $description = $request->input('desc');
             $dom = new \DOMDocument('1.0', 'UTF-8');
             libxml_use_internal_errors(true);
             $dom->loadHtml($description);
             $images = $dom->getElementsByTagName('img');
             foreach ($images as $img) {
                 $src = $img->getAttribute('src');
                 if (preg_match('/data:image/', $src)) {
                     preg_match('/data:image\/(?<mime>.*?)\;/', $src, $groups);
                     $mimetype = $groups['mime'];
                     $filename = uniqid();
                     $filepath = "/uploads/summernote/$filename.$mimetype";
                     $images = Image::make($src)->encode($mimetype, 100)->save(public_path($filepath));
                     $new_src = asset($filepath);
                     $img->removeAttribute('src');
                     $img->setAttribute('src', $new_src);
                 }
             }

            $description = $dom->saveHTML();
            $store = Course::find($id);

            $store->cate_id = $request->input('category');
            $store->title = $request->input('title');
            $store->slug = Str::slug($request->input('title'));
            $store->short = $request->input('short');
            $store->desc = $description;
            $store->tags = $request->input('tags');
            if ($request->input('status') == 1) {
                $store->status = '1';
            }else{
                $store->status = '0';
            }
            $store->video_link = $request->input('video_link');
            if ($request->hasFile('img')) {
                $file = $request->file('img');
                $name = substr(md5(time()), 0, 15).'.'.$file->getClientOriginalExtension();
                $file->move('uploads/course/',$name);

                if (file_exists(public_path($store->img))) {
                    unlink(public_path($store->img));
                }

                $store->img = 'uploads/course/'.$name;
            }
            $store->type = $request->input('type');
            $store->price = $request->input('price');
            $store->discount = $request->input('discount');
            $store->update();
            Toastr::success('Course Updated Successfull!!!!!');
            return redirect()->back();
        } catch (Exception $error) {
            Toastr::error($error->getMessage());
            Session::flash('message',$error->getMessage());
            return redirect()->back();
        }
    }

    public function destroy($id)
    {
        try {
            $del = Course::find($id);
            if (file_exists(public_path($del->img))) {
                unlink(public_path($del->img));
            }
            $del->delete();
            Toastr::success('Course Delete Successful');
            return redirect()->back();
        } catch (Exception $error) {
            Toastr::error($error->getMessage());
            return redirect()->back();
        }
    }

    public function active(Request $request) {
        $data = $request->input('data');
        Session::put('status',$data);
        return response()->json($data);
    }


    // chapter
    public function chapter(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        if($validator->fails()) {
            return redirect()->back()->withErrors(Toastr::error($validator->errors()->all()[0]))->withInput();
        }

        try {
             $store = new Chapter();
             $store->course_id = $id;
             $store->name = $request->input('name');
             $store->slug = Str::slug($request->input('name'));
             if ($request->input('status') == 1) {
                $store->status = '1';
            }else{
                $store->status = '0';
            }
            $store->save();
            Toastr::success('Chapter Created Successfull!!!!!');
            return redirect()->back();
        } catch (Exception $error) {
            Toastr::error($error->getMessage());
            Session::flash('message',$error->getMessage());
            return redirect()->back();
        }
    }

    public function chapterStatus(Request $request, $course, $chapter)
    {
        try {
            if ($request->input('status') == 1) {
                $status = '1';
            }else{
                $status = '0';
            }
           Chapter::where('course_id',$course)->where('id',$chapter)->update([
               'status' => $status
           ]);
            Toastr::success('Status Update Successful');
            return redirect()->back();
        } catch (Exception $error) {
            Toastr::error($error->getMessage());
            return redirect()->back();
        }
    }

    public function chapterUpdate(Request $request, $course, $chapter)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        if($validator->fails()) {
            return redirect()->back()->withErrors(Toastr::error($validator->errors()->all()[0]))->withInput();
        }

        try {
            $update = Chapter::where('course_id',$course)->where('id',$chapter)->first();
            $update->name = $request->input('name');
            $update->slug = Str::slug($request->input('name'));
            if ($request->input('status') == 1) {
                $update->status = '1';
            }else{
                $update->status = '0';
            }
            $update->update();
            Toastr::success('Chapter Updated Successfull!!!!!');
            return redirect()->back();
        } catch (Exception $error) {
            Toastr::error($error->getMessage());
            Session::flash('message',$error->getMessage());
            return redirect()->back();
        }
    }

    public function chapterDelete($course, $chapter)
    {
        try {
            if (Classes::where('chapter_id',$chapter)->first()) {
                Toastr::error('Chapter already used','Sorry!!!');
                return redirect()->back();
            } else {
                Chapter::where('course_id',$course)->where('id',$chapter)->delete();
                Toastr::success('Chapter Delete Successful');
                return redirect()->back();
            }
        } catch (Exception $error) {
            Toastr::error($error->getMessage());
            return redirect()->back();
        }
    }

    public function classes(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'chapter' => 'required',
            'title' => 'required',
            'detail' => 'required',
            'link' => 'required',
            'duration' => 'required',
        ]);

        if($validator->fails()) {
            return redirect()->back()->withErrors(Toastr::error($validator->errors()->all()[0]))->withInput();
        }

        try {
            if ($request->input('status') == 1) {
                $status = '1';
            }else{
                $status = '0';
            }
            Classes::create([
                'course_id' => $id,
                'title' => $request->input('title'),
                'chapter_id' => $request->input('chapter'),
                'detail' => $request->input('detail'),
                'link' => $request->input('link'),
                'duration' => $request->input('duration'),
                'status' => $status
            ]);
            Toastr::success('Class Created Successful');
            return redirect()->back();
        } catch (Exception $error) {
            Toastr::error($error->getMessage());
            return redirect()->back();
        }
    }

    
    public function classStatus(Request $request, $id)
    {
        try {
            if ($request->input('status') == 1) {
                $status = '1';
            }else{
                $status = '0';
            }
            Classes::find($id)->update([
                'status' => $status
            ]);
            Toastr::success('Status Update Successful');
            return redirect()->back();
        } catch (Exception $error) {
            Toastr::error($error->getMessage());
            return redirect()->back();
        }
    }

    public function classUpdate(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'chapter' => 'required',
            'title' => 'required',
            'detail' => 'required',
            'link' => 'required',
            'duration' => 'required',
        ]);

        if($validator->fails()) {
            return redirect()->back()->withErrors(Toastr::error($validator->errors()->all()[0]))->withInput();
        }

        try {
            if ($request->input('status') == 1) {
                $status = '1';
            }else{
                $status = '0';
            }
            Classes::find($id)->update([
                'course_id' => $request->input('course'),
                'title' => $request->input('title'),
                'chapter_id' => $request->input('chapter'),
                'detail' => $request->input('detail'),
                'link' => $request->input('link'),
                'duration' => $request->input('duration'),
                'status' => $status
            ]);
            Toastr::success('Class Created Successful');
            return redirect()->back();
        } catch (Exception $error) {
            Toastr::error($error->getMessage());
            return redirect()->back();
        }
    }

    
    public function classDelete($id)
    {
        try {
            Classes::find($id)->delete();
            Toastr::success('Classes Delete Successful');
            return redirect()->back();
        } catch (Exception $error) {
            Toastr::error($error->getMessage());
            return redirect()->back();
        }
    }

}
