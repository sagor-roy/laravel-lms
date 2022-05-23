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
                    <h6>1 Courses in Cart</h6>
                    <div class="card card-body shadow">
                        <div class="row border-1 border-bottom py-3">
                            <div class="col-md-3">
                                <img src="./img/course/1.png" alt="" class="img-fluid">
                            </div>
                            <div class="col-md-4">
                                <a href="">Lorem ipsum dolor, sit amet consectetu</a>
                                <p class="text-muted">by Admin</p>
                            </div>
                            <div class="col-md-3">
                                <a href="">Remove</a> <br>
                                <a href="">Add To Wishlist</a>
                            </div>
                            <div class="col-md-2 text-center">
                                <h5>&#2547; 4,000</h5>
                                <del>5,000</del>
                            </div>
                        </div>
                        <div class="row border-1 border-bottom py-3">
                            <div class="col-md-3">
                                <img src="./img/course/1.png" alt="" class="img-fluid">
                            </div>
                            <div class="col-md-4">
                                <a href="">Lorem ipsum dolor, sit amet consectetu</a>
                                <p class="text-muted">by Admin</p>
                            </div>
                            <div class="col-md-3">
                                <a href="">Remove</a> <br>
                                <a href="">Add To Wishlist</a>
                            </div>
                            <div class="col-md-2 text-center">
                                <h5>&#2547; 4,000</h5>
                                <del>5,000</del>
                            </div>
                        </div>
                        <div class="row border-1 border-bottom py-3">
                            <div class="col-md-3">
                                <img src="./img/course/1.png" alt="" class="img-fluid">
                            </div>
                            <div class="col-md-4">
                                <a href="">Lorem ipsum dolor, sit amet consectetu</a>
                                <p class="text-muted">by Admin</p>
                            </div>
                            <div class="col-md-3">
                                <a href="">Remove</a> <br>
                                <a href="">Add To Wishlist</a>
                            </div>
                            <div class="col-md-2 text-center">
                                <h5>&#2547; 4,000</h5>
                                <del>5,000</del>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mt-4">
                <h5>Total:</h5>
                <div class="d-flex justify-content-between">
                    <p>Total Price</p>
                    <p>&#2547; 5000</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p>Offer Discount</p>
                    <p>&#2547; 5000</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p>Coupon Discount</p>
                    <a href="#coupon" data-bs-toggle="modal">Apply</a>
                </div>
                <div class="d-flex justify-content-between">
                    <p>Discount Percent</p>
                    <p>50% off</p>
                </div>
                <hr class="my-3">
                <div class="d-flex justify-content-between">
                    <h6 class="fw-bold">Total Price</h6>
                    <h5>&#2547; 5000</h5>
                </div>
                <button class="btn-style btn-lg red-btn w-100 border-0 mt-4 rounded-0">Checkout</button>
                <hr class="mt-3">
            </div>
        </div>
    </div>
</section>

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