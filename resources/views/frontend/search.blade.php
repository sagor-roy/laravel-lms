@extends('layouts.frontend')
@section('content')
<section class="single">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h2>Searches Course</h2>
            </div>
        </div>
    </div>
</section>

<section class="mt-5">
    <div class="container">
        <div class="row">
            @foreach ($data as $item)
            <div class="col-md-3">
                <div class="card course">
                    <img src="{{asset($item->img)}}" alt="">
                    <div class="card-body">
                        <h6>{{str_title($item->title)}}</h6>
                        <div class="sort">
                            <p>by Hapijul Islam</p>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <a href="{{route('single.course',[$item->id, $item->slug])}}" class="link"></a>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>
@endsection