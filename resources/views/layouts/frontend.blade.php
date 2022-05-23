<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="{{asset('asset/frontend/css/bootstrap.min.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
    <link rel="stylesheet" href="http://cdn.bootcss.com/toastr.js/latest/css/toastr.min.css">
    <link rel="stylesheet" href="{{asset('asset/frontend/css/swiper-bundle.min.css')}}" />
    <link rel="stylesheet" href="{{asset('asset/frontend/css/style.css')}}">
    <style>
        .toast {
            opacity: 1 !important;
        }
    </style>
</head>

<body>

    @include('frontend.partials.navbar')
    @yield('content')
    @include('frontend.partials.footer')

    <script src="http://cdn.bootcss.com/jquery/2.2.4/jquery.min.js"></script>
    <script src="{{asset('asset/frontend/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{asset('asset/frontend/js/swiper-bundle.min.js')}}"></script>

    <script src="http://cdn.bootcss.com/toastr.js/latest/js/toastr.min.js"></script>

  {!! Toastr::message() !!}

    <!-- Initialize Swiper -->
    <script>
        var swiper = new Swiper(".slider", {
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });

        var swiper = new Swiper(".recent", {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    </script>
</body>

</html>