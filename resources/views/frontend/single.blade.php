@extends('layouts.frontend')

@section('content')
<section>
    <section class="single">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <h2>{{$data->title}}</h2>
                    <p>{{$data->short}}</p>

                    <div class="single-title">
                        <p>No Rating (0 Reviews) 5 User Enrolled</p>
                        <p>Created by: Meherun Nesa Last Updated: 22nd May 2022 Bangla</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="product-learn-block shadow">
                        <h5 class="product-learn-heading">What you will learn</h5>
                        <div class="row">
                            <div class="col-md-6 my-1">
                                <div class="product-learn-dtl">
                                    <ul>
                                        <li><i class="fa-solid fa-circle-check"></i></i> Learn Basic PHP</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 my-1">
                                <div class="product-learn-dtl">
                                    <ul>
                                        <li><i class="fa-solid fa-circle-check"></i></i> Learn Basic PHP</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 my-1">
                                <div class="product-learn-dtl">
                                    <ul>
                                        <li><i class="fa-solid fa-circle-check"></i></i> Learn Basic PHP</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 my-1">
                                <div class="product-learn-dtl">
                                    <ul>
                                        <li><i class="fa-solid fa-circle-check"></i></i> Learn Basic PHP</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 my-1">
                                <div class="product-learn-dtl">
                                    <ul>
                                        <li><i class="fa-solid fa-circle-check"></i></i> Learn Basic PHP</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 my-1">
                                <div class="product-learn-dtl">
                                    <ul>
                                        <li><i class="fa-solid fa-circle-check"></i></i> Learn Basic PHP</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    @php
                        $time = \App\Models\Classes::where('course_id',$data->id)->sum('duration');
                        $hours = floor($time / 60);
                        $minutes = $time % 60;
                    @endphp
                    <div class="course-content mt-5">
                        <div class="title mb-2">
                            <h5 class="fw-bold border-bottom border-2 border-primary d-inline">Course Content :</h5>
                            <p class="pt-4">{{$chptr->count()}} sections • 
                                {{\App\Models\Classes::where('course_id',$data->id)->count()}}
                                lectures • {{$hours}}h {{$minutes}}m</p>
                        </div>
                        @foreach ($chptr as $item)
                        <div class="accordion" id="accor{{$item->id}}">
                            <div class="accordion-item my-2 shadow">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed d-block" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapse{{$item->id}}"
                                        aria-controls="collapse{{$item->id}}">
                                        <div class="row">
                                            <div class="col-md-1 text-start">+</div>
                                            <div class="col-md-7">
                                                {{$item->name}} <a href="">-by Admin</a>
                                            </div>
                                            <div class="col-md-2">{{$item->chapters->count()}} classes</div>
                                            <div class="col-md-2 text-end"> {{\App\Models\Classes::where('chapter_id',$item->id)->sum('duration')}} min</div>
                                        </div>
                                    </button>
                                </h2>
                                <div id="collapse{{$item->id}}" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accor{{$item->id}}">
                                    <div class="accordion-body">
                                        @foreach ($item->chapters as $class)
                                        <div class="row border-bottom py-2">
                                            <div class="col-md-1">
                                                <i class="fa-solid fa-circle-play"></i>
                                            </div>
                                            <div class="col-md-7">
                                                {{$class->title}}
                                                <i class="fa-solid fa-caret-down"></i>
                                            </div>
                                            <div class="col-md-2">
                                                <a target="_blank" href="{{route('player',$class->id)}}" >Preview</a>
                                            </div>
                                            <div class="col-md-2 text-end">
                                                {{$class->duration}} min
                                            </div>
                                        </div>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    <div class="course-desc mt-5">
                        <div class="description-block btm-30">
                            {!! $data->desc !!}
                        </div>
                    </div>
                    <div class="recent-added mt-5">
                        <div class="title pb-2">
                            <h5 class="fw-bold border-bottom border-2 border-primary d-inline">Recent Addeed Course :
                            </h5>
                        </div>
                        <div class="row py-2">
                            <div class="col-3">
                                <img src="./img/1.jpg" class="d-block img-fluid" alt="">
                            </div>
                            <div class="col-5">
                                <a href="">Lorem ipsum dolor sit amet.</a>
                                <p class="p-0">12 Jan 2022</p>
                            </div>
                            <div title="Enrolled" class="col-1 text-center">
                                <i class="fa-solid fa-user"></i> 5
                            </div>
                            <div class="col-2 text-center">
                                <h6>&#2547; 5,000</h6>
                                <del>7,000</del>
                            </div>
                            <div class="col-1 text-center">
                                <a href="">
                                    <i class="fa-solid fa-heart"></i>
                                </a>
                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-3">
                                <img src="./img/1.jpg" class="d-block img-fluid" alt="">
                            </div>
                            <div class="col-5">
                                <a href="">Lorem ipsum dolor sit amet.</a>
                                <p class="p-0">12 Jan 2022</p>
                            </div>
                            <div title="Enrolled" class="col-1 text-center">
                                <i class="fa-solid fa-user"></i> 5
                            </div>
                            <div class="col-2 text-center">
                                <h6>&#2547; 5,000</h6>
                                <del>7,000</del>
                            </div>
                            <div class="col-1 text-center">
                                <a href="">
                                    <i class="fa-solid fa-heart"></i>
                                </a>
                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-3">
                                <img src="./img/1.jpg" class="d-block img-fluid" alt="">
                            </div>
                            <div class="col-5">
                                <a href="">Lorem ipsum dolor sit amet.</a>
                                <p class="p-0">12 Jan 2022</p>
                            </div>
                            <div title="Enrolled" class="col-1 text-center">
                                <i class="fa-solid fa-user"></i> 5
                            </div>
                            <div class="col-2 text-center">
                                <h6>&#2547; 5,000</h6>
                                <del>7,000</del>
                            </div>
                            <div class="col-1 text-center">
                                <a href="">
                                    <i class="fa-solid fa-heart"></i>
                                </a>
                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-3">
                                <img src="./img/1.jpg" class="d-block img-fluid" alt="">
                            </div>
                            <div class="col-5">
                                <a href="">Lorem ipsum dolor sit amet.</a>
                                <p class="p-0">12 Jan 2022</p>
                            </div>
                            <div title="Enrolled" class="col-1 text-center">
                                <i class="fa-solid fa-user"></i> 5
                            </div>
                            <div class="col-2 text-center">
                                <h6>&#2547; 5,000</h6>
                                <del>7,000</del>
                            </div>
                            <div class="col-1 text-center">
                                <a href="">
                                    <i class="fa-solid fa-heart"></i>
                                </a>
                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-3">
                                <img src="./img/1.jpg" class="d-block img-fluid" alt="">
                            </div>
                            <div class="col-5">
                                <a href="">Lorem ipsum dolor sit amet.</a>
                                <p class="p-0">12 Jan 2022</p>
                            </div>
                            <div title="Enrolled" class="col-1 text-center">
                                <i class="fa-solid fa-user"></i> 5
                            </div>
                            <div class="col-2 text-center">
                                <h6>&#2547; 5,000</h6>
                                <del>7,000</del>
                            </div>
                            <div class="col-1 text-center">
                                <a href="">
                                    <i class="fa-solid fa-heart"></i>
                                </a>
                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-3">
                                <img src="./img/1.jpg" class="d-block img-fluid" alt="">
                            </div>
                            <div class="col-5">
                                <a href="">Lorem ipsum dolor sit amet.</a>
                                <p class="p-0">12 Jan 2022</p>
                            </div>
                            <div title="Enrolled" class="col-1 text-center">
                                <i class="fa-solid fa-user"></i> 5
                            </div>
                            <div class="col-2 text-center">
                                <h6>&#2547; 5,000</h6>
                                <del>7,000</del>
                            </div>
                            <div class="col-1 text-center">
                                <a href="">
                                    <i class="fa-solid fa-heart"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="student-feed mt-5">
                        <div class="title mb-4">
                            <h5 class="fw-bold border-bottom border-2 border-primary d-inline">Student Feedback :</h5>
                        </div>
                        <div class="row">
                            <div class="col-md-3 text-center">
                                <h1>3.3</h1>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <p>Course Rating</p>
                            </div>
                            <div class="col-md-9">
                                <div class="progress my-2">
                                    <div class="progress-bar" role="progressbar" style="width: 90%;" aria-valuenow="25"
                                        aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                                <div class="progress my-2">
                                    <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="25"
                                        aria-valuemin="0" aria-valuemax="100">75%</div>
                                </div>
                                <div class="progress my-2">
                                    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25"
                                        aria-valuemin="0" aria-valuemax="100">25%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="my-5">
                    <div class="review">
                        <div class="title mb-4">
                            <h5 class="fw-bold border-bottom border-2 border-primary d-inline">Review :</h5>
                        </div>
                        <div class="row my-3 text-center">
                            <div class="col-2"></div>
                            <div class="col-2">1 Star</div>
                            <div class="col-2">2 Star</div>
                            <div class="col-2">3 Start</div>
                            <div class="col-2">4 Star</div>
                            <div class="col-2">5 Star</div>
                        </div>
                        <div class="row my-3 text-center">
                            <div class="col-2">Learn</div>
                            <div class="col-2">
                                <input type="radio" name="one[]">
                            </div>
                            <div class="col-2">
                                <input type="radio" name="one[]">
                            </div>
                            <div class="col-2">
                                <input type="radio" name="one[]">
                            </div>
                            <div class="col-2">
                                <input type="radio" name="one[]">
                            </div>
                            <div class="col-2">
                                <input type="radio" name="one[]">
                            </div>
                        </div>
                        <div class="row my-3 text-center">
                            <div class="col-2">Price</div>
                            <div class="col-2">
                                <input type="radio" name="two[]">
                            </div>
                            <div class="col-2">
                                <input type="radio" name="two[]">
                            </div>
                            <div class="col-2">
                                <input type="radio" name="two[]">
                            </div>
                            <div class="col-2">
                                <input type="radio" name="two[]">
                            </div>
                            <div class="col-2">
                                <input type="radio" name="two[]">
                            </div>
                        </div>
                        <div class="row my-3 text-center">
                            <div class="col-2">Learn</div>
                            <div class="col-2">
                                <input type="radio" name="three[]">
                            </div>
                            <div class="col-2">
                                <input type="radio" name="three[]">
                            </div>
                            <div class="col-2">
                                <input type="radio" name="three[]">
                            </div>
                            <div class="col-2">
                                <input type="radio" name="three[]">
                            </div>
                            <div class="col-2">
                                <input type="radio" name="three[]">
                            </div>
                        </div>
                        <hr class="my-3">
                        <div class="mb-3">
                            <textarea name="" placeholder="Write a review......" class="form-control"
                                rows="5"></textarea>
                        </div>
                        <button type="submit" class="btn-style red-btn border-0">SUBMIT</button>

                        <hr class="my-4">

                        <div class="review-box">
                            <div class="row">
                                <div class="col-md-3 d-flex align-items-center">
                                    <h3 class="m-0 bg-secondary rounded-circle text-white p-2 me-3">JD</h3>
                                    <div>
                                        <h6 class="m-0">John Doe</h6>
                                        <p class="p-0 m-0 text-muted">20-02-00</p>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>

                                    <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                                            consectetur unde esse voluptatum, ipsa distinctio nam animi numquam corrupti
                                            excepturi?</i></p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-md-3 d-flex align-items-center">
                                    <h3 class="m-0 bg-secondary rounded-circle text-white p-2 me-3">JD</h3>
                                    <div>
                                        <h6 class="m-0">John Doe</h6>
                                        <p class="p-0 m-0 text-muted">20-02-00</p>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>

                                    <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                                            consectetur unde esse voluptatum, ipsa distinctio nam animi numquam corrupti
                                            excepturi?</i></p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-md-3 d-flex align-items-center">
                                    <h3 class="m-0 bg-secondary rounded-circle text-white p-2 me-3">JD</h3>
                                    <div>
                                        <h6 class="m-0">John Doe</h6>
                                        <p class="p-0 m-0 text-muted">20-02-00</p>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>

                                    <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                                            consectetur unde esse voluptatum, ipsa distinctio nam animi numquam corrupti
                                            excepturi?</i></p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-md-3 d-flex align-items-center">
                                    <h3 class="m-0 bg-secondary rounded-circle text-white p-2 me-3">JD</h3>
                                    <div>
                                        <h6 class="m-0">John Doe</h6>
                                        <p class="p-0 m-0 text-muted">20-02-00</p>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>

                                    <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                                            consectetur unde esse voluptatum, ipsa distinctio nam animi numquam corrupti
                                            excepturi?</i></p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-md-3 d-flex align-items-center">
                                    <h3 class="m-0 bg-secondary rounded-circle text-white p-2 me-3">JD</h3>
                                    <div>
                                        <h6 class="m-0">John Doe</h6>
                                        <p class="p-0 m-0 text-muted">20-02-00</p>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>

                                    <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                                            consectetur unde esse voluptatum, ipsa distinctio nam animi numquam corrupti
                                            excepturi?</i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 column-top">
                    <div class="card shadow border-4 border-white">
                        <img src="{{asset($data->img)}}" class="img-fluid" alt="img">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                @if ($data->type == 'paid')
                                <h4 class="m-0">
                                    @if ($data->discount == null)
                                    &#2547; {{number_format($data->price)}}
                                    @else
                                    @php
                                        $price = $data->price * $data->discount / 100;
                                        $final = $data->price - $price;
                                    @endphp
                                &#2547; {{number_format($final)}}
                                <del class="fs-6"> &#2547;{{number_format($data->price)}}</del>
                                    @endif
                                </h4>
                                @else
                                <span class="badge bg-danger">Free</span>
                                @endif
                                @if (Auth::check())
                                <a title="Wishlist" href="{{route('user.add.wishlist',$data->id)}}"><i class="fa-solid fa-heart fa-2x"></i></a>
                                @else
                                <a title="Wishlist" href="{{route('user.wishlist')}}"><i class="fa-solid fa-heart fa-2x"></i></a>
                                @endif
                            </div>
                            @php
                                $cart = Session::has('cart') ? Session::get('cart') : [];
                            @endphp
                            @if (key_exists($data->id,$cart))
                            <a href="{{route('add.cart',$data->id)}}" class="btn btn-danger w-100 btn-lg rounded-0 mt-4">Remove To Cart</a>
                            @else
                            <a href="{{route('add.cart',$data->id)}}" class="btn btn-success w-100 btn-lg rounded-0 mt-4">Add To Cart</a>
                            @endif
                            
                            <a href="" class="btn btn-primary w-100 mt-2 btn-lg rounded-0">Buy Now</a>
                            <div class="mt-4">
                                <p class="m-0">Tags :</p>
                                <div class="d-flex">
                                    <a href="" class="badge bg-secondary mx-1 fw-light"><i
                                            class="fa-solid fa-tags "></i> Python</a>
                                    <a href="" class="badge bg-secondary mx-1 fw-light"><i
                                            class="fa-solid fa-tags "></i> PHP</a>
                                </div>
                            </div>
                            <hr class="my-3">
                            <a href=""><i class="fa-solid fa-square-share-nodes"></i> Share</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    @section('script')
    <script>
        
    </script>
    @endsection


@endsection