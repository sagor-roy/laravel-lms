@extends('layouts.frontend')
@section('content')
<section class="single">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h2>Wishlist</h2>
            </div>
        </div>
    </div>
</section>

<section class="mt-5">
    <div class="container">
        <div class="row">
            @if (!count($data) > 0)
            <div class="text-center py-5 card">
                <i class="fa-solid fa-cart-shopping fa-5x text-muted"></i>
                <h5 class="mt-2">Your cart is empty</h5>
            </div>
            @endif
            @foreach ($data as $item)
            <div class="col-md-3">
                <div class="card course">
                    <img src="{{asset($item->course->img)}}" alt="">
                    <div class="d-flex justify-content-between mt-2" style="z-index: 9999999">
                        <a href="{{route('user.wishlist.remove',$item->id)}}" class="btn btn-danger w-100 rounded-0"><i class="fas fa-trash-alt"></i></a>
                        @php
                            $cart = Session::has('cart') ? Session::get('cart') : [];
                        @endphp
                        @if (key_exists($item->course_id,$cart))
                        <a href="{{route('add.cart',$item->course_id)}}" class="btn btn-outline-danger w-100 rounded-0"><i class="fa-solid fa-cart-shopping"></i></a>
                        @else
                        <a href="{{route('add.cart',$item->course_id)}}" class="btn btn-primary w-100 rounded-0"><i class="fa-solid fa-cart-shopping"></i></a>
                        @endif
                    </div>
                    <div class="card-body">
                        <h6>{{str_title($item->course->title)}}</h6>
                        <div class="sort">
                            <p>by Hapijul Islam</p>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    @if ($item->course->type == 'paid')
                    <h6 class="text-end me-2">&#2547; 
                        @if ($item->course->discount == null)
                            {{number_format($item->course->price)}}
                        @else
                            @php
                                $price = $item->course->price * $item->course->discount / 100;
                                $final = $item->course->price - $price;
                            @endphp
                            {{number_format($final)}}
                            <del> &#2547;{{number_format($item->course->price)}}</del>
                        @endif 
                    </h6>
                    @else
                        <div class="badge bg-danger float-end">Free</div>
                    @endif
                    <a href="{{route('single.course',[$item->course->id, $item->course->slug])}}" class="link"></a>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>
@endsection