<!DOCTYPE html>
<html lang="en">


<!-- Mirrored from www.urbanui.com/melody/template/pages/layout/sidebar-fixed.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 15 Sep 2018 06:05:56 GMT -->
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Melody Admin</title>
  <!-- plugins:css -->
  <link rel="stylesheet" href="{{asset('asset/backend/vendors/iconfonts/font-awesome/css/all.min.css')}}">
  <link rel="stylesheet" href="{{asset('asset/backend/vendors/css/vendor.bundle.base.css')}}">
  <link rel="stylesheet" href="{{asset('asset/backend/vendors/css/vendor.bundle.addons.css')}}">
  <link rel="stylesheet" href="{{asset('asset/backend/vendors/summernote/dist/summernote-bs4.css')}}">

  <!-- endinject -->
  <!-- plugin css for this page -->
  <!-- End plugin css for this page -->
  <!-- inject:css -->
  <link rel="stylesheet" href="{{asset('asset/toastr/toastr.min.css')}}">
  <link rel="stylesheet" href="{{asset('asset/backend/css/style.css')}}">
  <!-- endinject -->
  <link rel="shortcut icon" href="{{asset('asset/backend/images/favicon.png')}}" />
  <style>
    .toast {
        opacity: 1 !important;
    }
</style>
</head>
<body class="sidebar-fixed">
  <div class="container-scroller">
    <!-- partial:../../partials/_navbar.html -->
    @include('backend.partials.navbar')
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <!-- partial:../../partials/_settings-panel.html -->
      
      <!-- partial -->
      <!-- partial:../../partials/_sidebar.html -->
      @include('backend.partials.sidebar')
      <!-- partial -->
      <div class="main-panel">
        @yield('content')
        <!-- content-wrapper ends -->
        <!-- partial:../../partials/_footer.html -->
        @include('backend.partials.footer')
        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <!-- container-scroller -->

  <!-- plugins:js -->
  <script src="{{asset('asset/toastr/jquery.min.js')}}"></script>
  <script src="{{asset('asset/backend/vendors/js/vendor.bundle.base.js')}}"></script>
  <script src="{{asset('asset/backend/vendors/js/vendor.bundle.addons.js')}}"></script>
  <!-- endinject -->
  <!-- inject:js -->
  <script src="{{asset('asset/backend/js/off-canvas.js')}}"></script>
  <script src="{{asset('asset/backend/js/hoverable-collapse.js')}}"></script>
  <script src="{{asset('asset/backend/js/misc.js')}}"></script>
  <!-- endinject -->
  <!-- Custom js for this page-->
  <script src="{{asset('asset/backend/js/dashboard.js')}}"></script>
  <script src="{{asset('asset/backend/js/data-table.js')}}"></script>
  <script src="{{asset('asset/backend/vendors/summernote/dist/summernote-bs4.min.js')}}"></script>
  
  <script src="{{asset('asset/toastr/toastr.min.js')}}"></script>
  <script src="{{asset('asset/backend/js/form-addons.js')}}"></script>

  <script src="{{asset('asset/backend/js/editorDemo.js')}}"></script>


  {!! Toastr::message() !!}
  <!-- End custom js for this page-->

  @yield('script')

<script>
  $(function(){
    $('#selectAll').on('change',function(e){
      let check = $(this).prop('checked') == true ? 1:0;
      if (check == 1) {
        $("input[name='check[]']").prop('checked',true);
      }else{
        $("input[name='check[]']").prop('checked',false);
      }
    })
  })

</script>


</body>
</html>
