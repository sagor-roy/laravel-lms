@extends('layouts.frontend')
@section('style')
    <link rel="stylesheet" href="{{ asset('asset/frontend/css/uikit.min.css') }}" />
@endsection
@section('content')
    <section>
        <section class="single">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <h2 class="text-white">{{ $data->title }}</h2>
                        <p>{{ $data->short }}</p>

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
                            $time = \App\Models\Classes::where('course_id', $data->id)->sum('duration');
                            $hours = floor($time / 60);
                            $minutes = $time % 60;
                        @endphp
                        <div class="course-content mt-5">
                            <div class="title mb-2">
                                <h5 class="fw-bold border-bottom border-2 border-primary d-inline">Course Content :</h5>
                                <p class="pt-4">{{ $chptr->count() }} sections •
                                    {{ \App\Models\Classes::where('course_id', $data->id)->count() }}
                                    lectures • {{ $hours }}h {{ $minutes }}m</p>
                            </div>
                            @foreach ($chptr as $item)
                                <div class="accordion" id="accor{{ $item->id }}">
                                    <div class="accordion-item my-2 shadow">
                                        <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button collapsed d-block" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapse{{ $item->id }}"
                                                aria-controls="collapse{{ $item->id }}">
                                                <div class="row">
                                                    <div class="col-md-1 text-start">+</div>
                                                    <div class="col-md-7">
                                                        {{ $item->name }} <a href="">-by Admin</a>
                                                    </div>
                                                    <div class="col-md-2">{{ $item->chapters->count() }} classes</div>
                                                    <div class="col-md-2 text-end">
                                                        {{ \App\Models\Classes::where('chapter_id', $item->id)->sum('duration') }}
                                                        min</div>
                                                </div>
                                            </button>
                                        </h2>

                                        <div id="collapse{{ $item->id }}" class="accordion-collapse collapse"
                                            aria-labelledby="headingTwo" data-bs-parent="#accor{{ $item->id }}">
                                            <div class="accordion-body">
                                                @foreach ($item->chapters as $class)
                                                    <div class="row border-bottom py-2">
                                                        <div class="col-md-1">
                                                            <i class="fa-solid fa-circle-play"></i>
                                                        </div>
                                                        <div class="col-md-7">
                                                            {{ $class->title }}
                                                            <i class="fa-solid fa-caret-down"></i>
                                                        </div>

                                                        <div class="col-md-2">
                                                            @if (Auth::check())
                                                                @if ($check == true)
                                                                    @php
                                                                        $ans = \App\Models\Answer::where('chapter_id', $item->id)
                                                                            ->where('user_id', Auth::user()->id)
                                                                            ->first();
                                                                    @endphp
                                                                    @if ($ans)
                                                                        <a href="#vimeo{{ $class->id }}"
                                                                            uk-toggle>Preview</a>
                                                                        <div id="vimeo{{ $class->id }}"
                                                                            class="uk-flex-top" uk-modal>
                                                                            <div
                                                                                class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                                                                <button class="uk-modal-close-outside"
                                                                                    type="button" uk-close></button>
                                                                                <iframe src="{{ $class->link }}"
                                                                                    width="1280" height="720" uk-video
                                                                                    uk-responsive></iframe>
                                                                            </div>
                                                                        </div>
                                                                    @else
                                                                        <i class="fa-solid fa-lock"></i>
                                                                    @endif
                                                                @else
                                                                    <i class="fa-solid fa-lock"></i>
                                                                @endif
                                                            @else
                                                                <i class="fa-solid fa-lock"></i>
                                                            @endif
                                                        </div>
                                                        <div class="col-md-2 text-end">
                                                            {{ $class->duration }} min
                                                        </div>
                                                    </div>
                                                @endforeach
                                                @if (Auth::check())
                                                    @if ($check == true)
                                                        @foreach ($item->quiz as $q)
                                                            <div class="row border-bottom py-2 bg-light">
                                                                <div class="col-md-1">
                                                                    <i class="fa-solid fa-circle-question"></i>
                                                                </div>
                                                                <div class="col-md-7">
                                                                    <a
                                                                        href="{{ route('user.quiz', $q->id) }}">{{ $q->quiz }}</a>
                                                                </div>

                                                                <div class="col-md-2">
                                                                    Ques : {{ count($q->ques) }}
                                                                </div>
                                                                @php
                                                                    $mark = count($q->ques) * 5;
                                                                    $pass = ($mark * 70) / 100;
                                                                @endphp
                                                                <div class="col-md-2 text-end">
                                                                    Pass : {{ $pass }}
                                                                </div>
                                                            </div>
                                                        @endforeach
                                                    @endif
                                                @endif
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
                            @foreach ($recent as $item)
                                <div class="row py-2">
                                    <div class="col-3">
                                        <img src="{{ asset($item->img) }}" class="d-block img-fluid" alt="">
                                    </div>
                                    <div class="col-5">
                                        <a
                                            href="{{ route('single.course', [$item->id, $item->slug]) }}">{{ str_title($item->title) }}</a>
                                        <p class="p-0">{{ date('d-M-Y', strtotime($item->created_at)) }}</p>
                                    </div>
                                    <div title="Enrolled" class="col-1 text-center">
                                        <i class="fa-solid fa-user"></i>
                                        {{ \App\Models\OrderItem::where('course_id', $item->id)->count() }}
                                    </div>
                                    <div class="col-2 text-center">
                                        @if ($item->type == 'paid')
                                            @if ($item->discount == null)
                                                <h6>&#2547; {{ number_format($item->price) }}</h6>
                                            @else
                                                @php
                                                    $price = ($item->price * $item->discount) / 100;
                                                    $final = $item->price - $price;
                                                @endphp
                                                <h6>&#2547; {{ number_format($final) }}</h6>
                                                <del> &#2547;{{ number_format($item->price) }}</del>
                                            @endif
                                        @else
                                            <span class="badge bg-danger">Free</span>
                                        @endif
                                    </div>
                                    <div class="col-1 text-center">
                                        @if (Auth::check())
                                            <a title="Wishlist" href="{{ route('user.add.wishlist', $item->id) }}"><i
                                                    class="fa-solid fa-heart fa-2x"></i></a>
                                        @else
                                            <a title="Wishlist" href="{{ route('user.wishlist') }}"><i
                                                    class="fa-solid fa-heart fa-2x"></i></a>
                                        @endif
                                    </div>
                                </div>
                            @endforeach
                        </div>

                        <div id="feedback" class="student-feed mt-5">

                        </div>
                        <hr class="my-5">

                        <div class="review">
                            @auth
                                @if (Auth::user()->role !== 'super')
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
                                    <form id="formSubmit" method="POST">
                                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                        <input type="hidden" name="post_id" value="{{ $data->id }}">
                                        <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
                                        <div class="row my-3 text-center">
                                            <div class="col-2">Learn</div>
                                            <div class="col-2">
                                                <input type="radio" value="1" name="learn[]">
                                            </div>
                                            <div class="col-2">
                                                <input type="radio" value="2" name="learn[]">
                                            </div>
                                            <div class="col-2">
                                                <input type="radio" value="3" name="learn[]">
                                            </div>
                                            <div class="col-2">
                                                <input type="radio" value="4" name="learn[]">
                                            </div>
                                            <div class="col-2">
                                                <input type="radio" value="5" name="learn[]">
                                            </div>
                                        </div>
                                        <div class="row my-3 text-center">
                                            <div class="col-2">Price</div>
                                            <div class="col-2">
                                                <input type="radio" value="1" name="price[]">
                                            </div>
                                            <div class="col-2">
                                                <input type="radio" value="2" name="price[]">
                                            </div>
                                            <div class="col-2">
                                                <input type="radio" value="3" name="price[]">
                                            </div>
                                            <div class="col-2">
                                                <input type="radio" value="4" name="price[]">
                                            </div>
                                            <div class="col-2">
                                                <input type="radio" value="5" name="price[]">
                                            </div>
                                        </div>
                                        <div class="row my-3 text-center">
                                            <div class="col-2">Value</div>
                                            <div class="col-2">
                                                <input type="radio" value="1" name="value[]">
                                            </div>
                                            <div class="col-2">
                                                <input type="radio" value="2" name="value[]">
                                            </div>
                                            <div class="col-2">
                                                <input type="radio" value="3" name="value[]">
                                            </div>
                                            <div class="col-2">
                                                <input type="radio" value="4" name="value[]">
                                            </div>
                                            <div class="col-2">
                                                <input type="radio" value="5" name="value[]">
                                            </div>
                                        </div>
                                        <hr class="my-3">
                                        <div class="mb-3">
                                            <textarea name="comment" required placeholder="Write a review......" class="form-control" rows="5"></textarea>
                                        </div>
                                        <button id="submit" type="submit"
                                            class="btn-style red-btn border-0">SUBMIT</button>
                                    </form>
                                    <hr class="my-4">
                                @endif
                            @endauth

                            <div id="reviews_box" class="review-box">

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 column-top position-relative">
                        <div id="vdo">
                            <div class="card shadow border-4 border-white">
                                <iframe src="{{ $data->video_link }}" width="100%" height="200" frameborder="0"
                                    allow="autoplay; fullscreen" allowfullscreen></iframe>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center">
                                        @if ($data->type == 'paid')
                                            <h4 class="m-0">
                                                @if ($data->discount == null)
                                                    &#2547; {{ number_format($data->price) }}
                                                @else
                                                    @php
                                                        $price = ($data->price * $data->discount) / 100;
                                                        $final = $data->price - $price;
                                                    @endphp
                                                    &#2547; {{ number_format($final) }}
                                                    <del class="fs-6"> &#2547;{{ number_format($data->price) }}</del>
                                                @endif
                                            </h4>
                                        @else
                                            <span class="badge bg-danger">Free</span>
                                        @endif
                                        @if (Auth::check())
                                            <a title="Wishlist" href="{{ route('user.add.wishlist', $data->id) }}"><i
                                                    class="fa-solid fa-heart fa-2x"></i></a>
                                        @else
                                            <a title="Wishlist" href="{{ route('user.wishlist') }}"><i
                                                    class="fa-solid fa-heart fa-2x"></i></a>
                                        @endif
                                    </div>
                                    @php
                                        $cart = Session::has('cart') ? Session::get('cart') : [];
                                    @endphp
                                    @if (key_exists($data->id, $cart))
                                        <a href="{{ route('add.cart', $data->id) }}"
                                            class="btn btn-danger w-100 btn-lg rounded-0 mt-4">Remove To Cart</a>
                                    @else
                                        <a href="{{ route('add.cart', $data->id) }}"
                                            class="btn btn-success w-100 btn-lg rounded-0 mt-4">Add To Cart</a>
                                    @endif

                                    @if (Auth::check())
                                        <form action="{{ route('user.buy_now') }}" method="POST">
                                            @csrf
                                            <input type="hidden" name="course_id" value="{{ $data->id }}">
                                            <button type="submit" class="btn btn-primary w-100 mt-2 btn-lg rounded-0">Buy
                                                Now</button>
                                        </form>
                                    @else
                                        <a href="#login" data-bs-toggle="modal"
                                            class="btn btn-primary w-100 mt-2 btn-lg rounded-0">Buy Now</a>
                                    @endif
                                    <div class="mt-4">
                                        <p class="m-0">Tags :</p>
                                        <div class="d-flex">
                                            @foreach (explode(',', $data->tags) as $item)
                                                <a href="#" class="badge bg-secondary mx-1 fw-light"><i
                                                        class="fa-solid fa-tags "></i> {{ $item }}</a>
                                            @endforeach
                                        </div>
                                    </div>
                                    <hr class="my-3">
                                    <a href=""><i class="fa-solid fa-square-share-nodes"></i> Share</a>
                                </div>
                            </div>
                        </div>
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
                            <div class="alert @if (Session::get('type') == 'success') alert-success @else alert-danger @endif alert-dismissible fade show"
                                role="alert">
                                {{ Session::get('message') }}
                                <button type="button" class="btn-close" data-bs-dismiss="alert"
                                    aria-label="Close"></button>
                            </div>
                        @endif
                        <form class="mt-3" action="{{ route('access') }}" method="POST">
                            @csrf
                            <div class="row">
                                <input type="hidden" name="check" value="check">
                                <input type="hidden" name="buy" value="{{ $data->id }}">
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <span>Username <span class="text-danger">*</span></span>
                                        <input type="text" name="email" value="{{ old('email') }}"
                                            placeholder="Enter your email"
                                            class="form-control @error('email') is-invalid @enderror form-control-lg mt-2 rounded-0">
                                        @error('email')
                                            <span class="message text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="mb-3">
                                        <span>Password <span class="text-danger">*</span></span>
                                        <input type="password" name="password" placeholder="Enter your password"
                                            class="form-control @error('password') is-invalid @enderror form-control-lg mt-2 rounded-0">
                                        @error('password')
                                            <span class="message text-danger">{{ $message }}</span>
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
                                <a href="{{ route('register') }}">New Register</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    @section('script')
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.14.3/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.14.3/dist/js/uikit-icons.min.js"></script>
        <script>
            $('#formSubmit').on('submit', function(e) {
                let button = $('#submit').html('Loading....')
                e.preventDefault();
                let formData = new FormData(this);
                $.ajax({
                    url: "{{ route('user.comment.store') }}",
                    type: 'post',
                    data: formData,
                    contentType: false,
                    processData: false,
                    dataType: 'json',
                    success: (result) => {
                        console.log(result);
                        commentList();
                        feedbackFunction();
                        $(this)[0].reset();
                        button.html('SUBMIT')
                        $.notify("Thanks to your comments", {
                            position: "top right",
                            className: "success"
                        });
                    },
                    error: (error) => {
                        alert('Please check the all input field');
                        button.html('SUBMIT')
                    }
                })
            })

            commentList()

            function commentList() {
                $.ajax({
                    url: "/user/comments/{{ $data->id }}",
                    type: 'get',
                    success: (result) => {
                        $('#reviews_box').html(result)
                    }
                })
            }

            feedbackFunction()

            function feedbackFunction() {
                $.ajax({
                    url: "/user/feedback/{{ $data->id }}",
                    type: 'get',
                    success: (result) => {
                        $('#feedback').html(result)
                    }
                })
            }

            //STICKY NAVBAR
            window.onscroll = function() {
                myFunction()
            };

            function myFunction() {
                if (window.pageYOffset >= 200) {
                    $('#vdo').addClass('sticky')
                } else {
                    $('#vdo').removeClass('sticky');
                }
            }
        </script>
    @endsection


@endsection
