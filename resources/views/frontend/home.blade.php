@extends('layouts.frontend')

@section('content')
    <section>
        <!-- Swiper -->
        <div class="swiper slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="{{ asset('asset/frontend/img/1.jpg') }}" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="{{ asset('asset/frontend/img/2.jpg') }}" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="{{ asset('asset/frontend/img/3.jpg') }}" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>


    @if (Auth::check())
        @php
            $courses = \session()->has('recent') ? \session()->get('recent') : [];
        @endphp
        @if ($totalView > 0)
            <section class="mt-4">
                <div class="container">
                    <div class="title mb-2">
                        <h5 class="fw-bold border-bottom border-2 border-primary d-inline">Recently Viewed Courses :</h5>
                    </div>
                    <div class="swiper recent">
                        <div class="swiper-wrapper">
                            @foreach ($courses as $item)
                                @php
                                    $total = 0;
                                    $learn = 0;
                                    $price = 0;
                                    $values = 0;
                                    $rating = \App\Models\Comments::where('post_id', $item['id'])
                                        ->where('price', '!=', null)
                                        ->where('learn', '!=', null)
                                        ->where('value', '!=', null)
                                        ->get();
                                    foreach ($rating as $items) {
                                        $value = $items->learn + $items->price + $items->value;
                                        $total += $value / 3;
                                        $learn += $items->learn;
                                        $price += $items->price;
                                        $values += $items->value;
                                    }
                                    $gtotal = $total == 0 ? 0 : $total / count($rating);
                                    $min = 5 - $gtotal;
                                    $learn = $learn == 0 ? 0 : $learn / count($rating);
                                    $price = $price == 0 ? 0 : $price / count($rating);
                                    $valuess = $values == 0 ? 0 : $values / count($rating);
                                @endphp
                                <div class="swiper-slide course">
                                    <img src="{{ asset($item['img']) }}" alt="">
                                    <div class="card-body">
                                        <h6>{{ str_title($item['title']) }}</h6>
                                        <div class="sort">
                                            <p>by Hapijul Islam</p>
                                            @for ($i = 0; $i < intval($gtotal); $i++)
                                                <i class="fas fa-star"></i>
                                            @endfor
                                            @for ($i = 0; $i < round($min, 1); $i++)
                                                <i class="fas fa-star text-muted"></i>
                                            @endfor
                                        </div>
                                    </div>
                                    @if ($item['type'] == 'paid')
                                        <h6 class="text-end me-2">&#2547;
                                            @if ($item['discount'] == null)
                                                {{ number_format($item['price']) }}
                                            @else
                                                @php
                                                    $price = ($item['price'] * $item['discount']) / 100;
                                                    $final = $item['price'] - $price;
                                                @endphp
                                                {{ number_format($final) }}
                                                <del> &#2547;{{ number_format($item['price']) }}</del>
                                            @endif
                                        </h6>
                                    @else
                                        <div class="badge bg-danger float-end">Free</div>
                                    @endif
                                    <a href="{{ route('single.course', [$item['id'], $item['slug']]) }}"
                                        class="link"></a>
                                </div>
                            @endforeach
                        </div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </section>
        @endif
    @endif


    @if (count($data) > 0)
        <section class="mt-3">
            <div class="container">
                <div class="title mb-2">
                    <h5 class="fw-bold border-bottom border-2 border-primary d-inline">My Purchase Courses :</h5>
                </div>
                <div class="swiper recent">
                    <div class="swiper-wrapper">
                        @foreach ($data as $course)
                            @foreach ($course->item as $items)
                                @php
                                    $total = 0;
                                    $learn = 0;
                                    $price = 0;
                                    $values = 0;
                                    $rating = \App\Models\Comments::where('post_id', $items->course->id)
                                        ->where('price', '!=', null)
                                        ->where('learn', '!=', null)
                                        ->where('value', '!=', null)
                                        ->get();
                                    foreach ($rating as $item) {
                                        $value = $item->learn + $item->price + $item->value;
                                        $total += $value / 3;
                                        $learn += $item->learn;
                                        $price += $item->price;
                                        $values += $item->value;
                                    }
                                    $gtotal = $total == 0 ? 0 : $total / count($rating);
                                    $min = 5 - $gtotal;
                                    $learn = $learn == 0 ? 0 : $learn / count($rating);
                                    $price = $price == 0 ? 0 : $price / count($rating);
                                    $valuess = $values == 0 ? 0 : $values / count($rating);
                                @endphp
                                <div class="swiper-slide course">
                                    <img src="{{ asset($items->course->img) }}" alt="img">
                                    <div class="card-body">
                                        <h6>{{ str_title($items->course->title) }}</h6>
                                        <div class="sort">
                                            <p>by Hapijul Islam</p>
                                            @for ($i = 0; $i < intval($gtotal); $i++)
                                                <i class="fas fa-star"></i>
                                            @endfor
                                            @for ($i = 0; $i < round($min, 1); $i++)
                                                <i class="fas fa-star text-muted"></i>
                                            @endfor
                                        </div>
                                    </div>
                                    @if ($items->course->type == 'paid')
                                        <h6 class="text-end me-2">&#2547;
                                            @if ($items->course->discount == null)
                                                {{ number_format($items->course->price) }}
                                            @else
                                                @php
                                                    $price = ($items->course->price * $items->course->discount) / 100;
                                                    $final = $items->course->price - $price;
                                                @endphp
                                                {{ number_format($final) }}
                                                <del> &#2547;{{ number_format($items->course->price) }}</del>
                                            @endif
                                        </h6>
                                    @else
                                        <div class="badge bg-danger float-end">Free</div>
                                    @endif
                                    <a href="{{ route('single.course', [$items->course->id, $items->course->slug]) }}"
                                        class="link"></a>
                                </div>
                            @endforeach
                        @endforeach
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
        </section>
    @endif

    <section class="mt-3">
        <div class="container">
            <div class="title mb-2">
                <h5 class="fw-bold border-bottom border-2 border-primary d-inline">Recently Added Courses :</h5>
            </div>
            <ul class="nav nav-tabs mt-3" id="myTab" role="tablist">
                <li class="nav-item mx-1" role="presentation">
                    <a class="nav-link text-dark active" onclick="reloadFunc()" id="home-tab" data-bs-toggle="tab"
                        href="#home">All Courses</a>
                </li>
                @foreach ($cate as $item)
                    <li class="nav-item mx-1" role="presentation">
                        <a class="nav-link text-dark" onclick="tabFunc({{ $item->id }})" id="home-tab"
                            data-bs-toggle="tab" href="#home">{{ $item->name }}</a>
                    </li>
                @endforeach
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" aria-labelledby="home-tab">
                    <div id="coursess" class="row">
                        <div class="loader fa-5x text-center my-5">
                            <i class="fas fa-spinner fa-spin"></i>
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
                    <img src="{{ asset('asset/frontend/img/Featured-course.png') }}" class="img-fluid" alt="img">
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div id="features" class="row">
                <div class="loader fa-5x text-center my-5">
                    <i class="fas fa-spinner fa-spin"></i>
                </div>
            </div>
        </div>
    </section>

@section('script')
    <script>
        let routes = "{{ route('tab.course') }}";
        $(window).on('load', function() {
            $('#coursess').load(routes);
            $('#features').load(routes);
        });

        function reloadFunc() {
            $('#coursess').load(routes);
        }

        function tabFunc(id) {
            $('#coursess').load('/cate-course/' + `${id}`);
        }
    </script>
@endsection
@endsection
