@extends('layouts.frontend')
@section('content')
<section class="single">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h2>Shopping Cart</h2>
            </div>
        </div>
    </div>
</section>

<section class="mt-5">
    <div class="container">
        <div class="row">
            <div class="col-md-9">
                <div class="cart">
                    @php
                        $totalPrice = 0;
                        $offerPrice = 0;
                        $cart = Session::has('cart') ? Session::get('cart') : [];
                    @endphp
                    <h6>{{count($cart)}} Courses in Cart</h6>
                    <div class="card card-body shadow">
                        @if(count($cart) > 0)
                        @foreach($carts as $item)
                        <div class="row border-1 border-bottom py-3">
                            <div class="col-md-3">
                                <img src="{{asset($item['img'])}}" alt="" class="img-fluid">
                            </div>
                            <div class="col-md-4">
                                <a href="{{route('single.course',[$item['id'], $item['slug']])}}">{{$item['title']}}</a>
                                <p class="text-muted">by Admin</p>
                            </div>
                            <div class="col-md-3">
                                <a href="{{route('cart.remove',$item['id'])}}">Remove</a> <br>
                                <a href="{{route('user.add.wishlist',$item['id'])}}">Add To Wishlist</a>
                            </div>
                            <div class="col-md-2 text-center">
                                @if ($item['discount'] == null)
                                <h5>&#2547; {{number_format($item['price'])}}</h5>
                                @else
                                @php
                                    $price = $item['price'] * $item['discount'] / 100;
                                    $final = $item['price'] - $price;
                                @endphp
                                <h5> &#2547;{{number_format($final)}}</h5>
                                <del> &#2547;{{number_format($item['price'])}}</del>
                                @endif
                            </div>
                        </div>
                        @php
                            $totalPrice += $item['price'];
                            $offerPrice += $item['price'] * $item['discount'] / 100;
                        @endphp
                        @endforeach
                        @else
                        <div class="text-center py-5">
                            <i class="fa-solid fa-cart-shopping fa-5x text-muted"></i>
                            <h5 class="mt-2">Your cart is empty</h5>
                        </div>
                        @endif
                    </div>
                </div>
            </div>
            <div class="col-md-3 mt-4">
                <h5>Total:</h5>
                <div class="d-flex justify-content-between">
                    <p>Total Price</p>
                    <p>&#2547; {{number_format($totalPrice)}}</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p>Offer Discount</p>
                    <p>&#2547; {{number_format($offerPrice)}}</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p>Coupon Discount</p>
                    <a href="#coupon" data-bs-toggle="modal">Apply</a>
                </div>
                <hr class="my-3">
                <div class="d-flex justify-content-between">
                    <h6 class="fw-bold">Total Price</h6>
                    <h5>&#2547; {{number_format($totalPrice-$offerPrice)}}</h5>
                </div>
                @if (Auth::check())
                <a href="{{route('user.checkout')}}" class="btn-style text-center btn-lg red-btn w-100 border-0 mt-4 rounded-0">Checkout</a>
                <hr class="mt-3">
                @else
                <a href="#login" data-bs-toggle="modal" class="btn-style text-center btn-lg red-btn w-100 border-0 mt-4 rounded-0">Checkout</a>
                <hr class="mt-3">
                @endif
                
            </div>
        </div>
    </div>
</section>

<!-- login -->
<div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">LOGIN</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                @if (Session::has('message'))
                <div class="alert @if(Session::get('type') == 'success') alert-success @else alert-danger @endif alert-dismissible fade show" role="alert">
                    {{Session::get('message')}}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                @endif
                <form class="mt-3" action="{{route('access')}}" method="POST">
                    @csrf
                    <div class="row">
                        <input type="hidden" name="check" value="check">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <span>Username <span class="text-danger">*</span></span>
                                <input type="text" name="email" value="{{old('email')}}" placeholder="Enter your email" class="form-control @error('email') is-invalid @enderror form-control-lg mt-2 rounded-0">
                                @error('email')
                                <span class="message text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <span>Password <span class="text-danger">*</span></span>
                                <input type="password" name="password" placeholder="Enter your password" class="form-control @error('password') is-invalid @enderror form-control-lg mt-2 rounded-0">
                                @error('password')
                                <span class="message text-danger">{{$message}}</span>
                                @enderror
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 mb-3">
                        <button class="btn-style red-btn border-0">Log in</button>
                    </div>
                    <hr class="my-2">
                    <div class="mt-2">
                        <a href="">Forget password?</a> <br>
                        <a href="{{route('register')}}">New Register</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="coupon" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Coupon Codes</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="d-flex">
                    <input class="form-control" type="search" placeholder="Search">
                    <button class="btn-style red-btn border-0" type="submit">Apply</button>
                </form>
            </div>
            <div class="modal-footer"></div>
        </div>
    </div>
</div>


@endsection