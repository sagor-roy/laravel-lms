<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="{{asset('asset/frontend/css/bootstrap.min.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('asset/fontawesome/css/all.min.css')}}"/>
    <link rel="stylesheet" href="{{asset('asset/toastr/toastr.min.css')}}">
    <link rel="stylesheet" href="{{asset('asset/frontend/css/swiper-bundle.min.css')}}" />
    <link rel="stylesheet" href="{{asset('asset/frontend/dist/css/dropify.css')}}" />
    @yield('style')
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

    <script src="{{asset('asset/toastr/jquery.min.js')}}"></script>
    <script src="{{asset('asset/frontend/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{asset('asset/frontend/js/swiper-bundle.min.js')}}"></script>

    <script src="{{asset('asset/toastr/toastr.min.js')}}"></script>
    <script src="{{asset('asset/frontend/dist/js/dropify.js')}}"></script>
    <script src="{{asset('asset/notify.js')}}"></script>

  {!! Toastr::message() !!}

  <script>
       $('#courseSearch').keyup(function(){
            var query = $(this).val();
            if(query != '') {
                var _token = "{{csrf_token()}}";
                $.ajax({
                url:"{{ route('course-search') }}",
                method:"POST",
                data:{query:query, _token:_token},
                success:function(data){
                    $('#lists').css('transform','scale(1)');
                    $('#lists').html(data);
                }
                });
            }
        });

        $(document).on('click', '#courseSearch', function(){
            $('#lists').css('transform','scaleY(0)');
        });
  </script>

  @yield('script')

    <!-- Initialize Swiper -->
    <script>
        

        // slider
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