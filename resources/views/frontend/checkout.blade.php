@extends('layouts.frontend')
@section('content')
<section class="single">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h2>Checkout</h2>
            </div>
        </div>
    </div>
</section>

<section class="mt-5">
    <div class="container">
        @php
            $total = 0;
            $discount = 0;
            $cart = Session::has('cart') ? Session::get('cart') : [];
        @endphp
        <div class="row">
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header">
                        <h5 class="m-0 card-title">Your items {{count($cart)}}</h5>
                    </div>
                    <div class="card-body">
                        @foreach ($cart as $item)
                        @php
                            $total += $item['price'];
                            $discount += $item['price'] * $item['discount'] / 100;
                        @endphp
                        <div class="row">
                            <div class="col-4">
                                <img src="{{asset($item['img'])}}" class="img-fluid w-100 d-block" alt="course">
                            </div>
                            <div class="col-8">
                                <a href="">{{$item['title']}}</a>
                                <p>by {{Auth::user()->name}}</p>
                                <h5>
                                    @if ($item['type']=='paid')
                                    @if ($item['discount']==null)
                                        &#2547; {{number_format($item['price'])}}
                                    @else
                                        @php
                                            $price = $item['price'] * $item['discount'] / 100;
                                            $final = $item['price'] - $price;
                                        @endphp
                                        &#2547; {{number_format($final)}}
                                        <del class="h6">&#2547; {{number_format($item['price'])}}</del>
                                    @endif 
                                    @else
                                        Free
                                    @endif
                                </h5>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header">
                        <h4 class="m-0 card-title">Total : &#2547; {{number_format($total)}} <del class="h6">&#2547;{{number_format($discount)}}</del></h4>
                    </div>
                    @php
                        $amount = $total - $discount;
                    @endphp
                    <div class="card-body">
                        <form action="{{route('user.pay')}}" method="POST">
                            @csrf
                            <input type="hidden" name="amount" value="{{$amount}}">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="ssl" name="method" id="ssl">
                            <label class="form-check-label" for="ssl">
                              SSLCOMMERZ
                            </label>
                          </div>
                          <hr>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" value="paypal" name="method" id="paypal">
                            <label class="form-check-label" for="paypal">
                              Paypal
                            </label>
                          </div>
                          <hr>
                          <button type="submit" class="btn-style red-btn border-0">Proceed</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection