@extends('layouts.frontend')

@section('content')
<section>
    <!-- Swiper -->
    <div class="swiper slider">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="{{asset('asset/frontend/img/1.jpg')}}" alt="">
            </div>
            <div class="swiper-slide">
                <img src="{{asset('asset/frontend/img/2.jpg')}}" alt="">
            </div>
            <div class="swiper-slide">
                <img src="{{asset('asset/frontend/img/3.jpg')}}" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</section>

<section class="mt-4">
    <div class="container">
        <div class="title mb-2">
            <h5 class="fw-bold border-bottom border-2 border-primary d-inline">Recently Viewed Courses :</h5>
        </div>
        <div class="swiper recent">
            <div class="swiper-wrapper">
                <div class="swiper-slide course">
                    <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                    <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
                <div class="swiper-slide course">
                    <img src="{{asset('asset/frontend/img/course/2.png')}}" alt="">
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
                    <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
                <div class="swiper-slide course">
                    <img src="{{asset('asset/frontend/img/course/3.png')}}" alt="">
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
                    <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div>
</section>

<section class="mt-3">
    <div class="container">
        <div class="title mb-2">
            <h5 class="fw-bold border-bottom border-2 border-primary d-inline">My Purchase Courses :</h5>
        </div>
        <div class="swiper recent">
            <div class="swiper-wrapper">
                <div class="swiper-slide course">
                    <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                    <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
                <div class="swiper-slide course">
                    <img src="{{asset('asset/frontend/img/course/2.png')}}" alt="">
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
                    <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
                <div class="swiper-slide course">
                    <img src="{{asset('asset/frontend/img/course/3.png')}}" alt="">
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
                    <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div>
</section>

<section class="mt-3">
    <div class="container">
        <div class="title mb-2">
            <h5 class="fw-bold border-bottom border-2 border-primary d-inline">Recently Added Courses :</h5>
        </div>
        <ul class="nav nav-tabs mt-3" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab"
                    aria-controls="home" aria-selected="true">Web Design</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab"
                    aria-controls="profile" aria-selected="false">PHP</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab"
                    aria-controls="contact" aria-selected="false">Laravel</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card course">
                            <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                            <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                            <a href="#" class="link"></a>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card course">
                            <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                            <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                            <a href="#" class="link"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card course">
                            <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                            <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                            <a href="#" class="link"></a>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card course">
                            <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                            <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                            <a href="#" class="link"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card course">
                            <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                            <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                            <a href="#" class="link"></a>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card course">
                            <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                            <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                            <a href="#" class="link"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="my-4">
    <div class="container">
        <div class="row">
            <div class="col-md-8 text-lg-left content">
                <h5 class="fw-bold">Featured Courses :</h5>
                <p>Deep learning skills are at the top in the field of information technology skills required in the
                    present age.
                    <br><br>
                    Our Deep Learning course is designed in such a way that tech, non-tech, business professionals
                </p>
                <a href="#" class="btn-style red-btn mt-2">View Details</a>
            </div>
            <div class="col-md-4 mt-4 mt-lg-0 d-none d-lg-block">
                <img src="{{asset('asset/frontend/img/Featured-course.png')}}" class="img-fluid" alt="img">
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="card course">
                    <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                    <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card course">
                    <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                    <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card course">
                    <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                    <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card course">
                    <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                    <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card course">
                    <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                    <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card course">
                    <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                    <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card course">
                    <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                    <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card course">
                    <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                    <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card course">
                    <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                    <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card course">
                    <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                    <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card course">
                    <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                    <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card course">
                    <img src="{{asset('asset/frontend/img/course/1.png')}}" alt="">
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
                    <h6 class="float-end me-2">&#2547; 4,000 <del>5,000</del></h6>
                    <a href="#" class="link"></a>
                </div>
            </div>

        </div>
    </div>
</section>
@endsection