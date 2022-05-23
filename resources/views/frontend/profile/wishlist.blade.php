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
            <div class="col-md-3">
                <div class="card course">
                    <img src="./img/course/1.png" alt="">
                    <div class="d-flex justify-content-between mt-2">
                        <a href="" class="btn btn-danger w-100 rounded-0"><i class="fas fa-trash-alt"></i></a>
                        <a href="" class="btn btn-primary w-100 rounded-0"><i class="fa-solid fa-cart-shopping"></i></a>
                    </div>
                    <div class="card-body">
                        <h6>PHP Laravel Advanced Course</h6>
                        <div class="sort">
                            <p>by Hapijul Islam</p>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <h6 class="text-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection