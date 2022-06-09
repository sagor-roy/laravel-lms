@extends('layouts.frontend')
@section('content')
<section class="single">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h2>My Course</h2>
            </div>
        </div>
    </div>
</section>

<section class="mt-5">
    <div class="container">
        <div class="row">
            @foreach ($data as $item)
            @foreach ($item->item as $course)
            @if ($item->order_status == 'complete')
            <div class="col-md-3">
                <div class="card course">
                    <img src="{{asset($course->course->img)}}" alt="">
                    <div class="card-body">
                        <h6>{{str_title($course->course->title)}}</h6>
                        <div class="sort">
                            <p>by Hapijul Islam</p>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <a href="{{route('single.course',[$course->course->id, $course->course->slug])}}" class="link"></a>
                </div>
            </div>
            @endif
            @endforeach
            @endforeach
        </div>
    </div>
</section>
@endsection