@extends('layouts.frontend')

@section('content')
<section class="my-5">
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card card-body rounded-3 px-4 shadow">
                    <div class="header text-center">
                        <h2 class="fw-bold mb-0">Register</h2>
                    </div>
                    <hr>
                    <div class="content_body">
                        @if (Session::has('message'))
                        <div class="alert @if(Session::get('type') == 'success') alert-success @else alert-danger @endif alert-dismissible fade show" role="alert">
                            {{Session::get('message')}}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          </div>
                        @endif
                        <form class="mt-3" action="{{route('store')}}" method="POST">
                            @csrf
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <span>Name <span class="text-danger">*</span></span>
                                        <input type="text" name="name" value="{{old('name')}}" placeholder="Enter your name" class="form-control @error('name') is-invalid @enderror form-control-lg mt-2 rounded-0">
                                        @error('name')
                                        <span class="message text-danger">{{$message}}</span>
                                        @enderror
                                    </div>
                                    <div class="mb-3">
                                        <span>Email <span class="text-danger">*</span></span>
                                        <input type="text" name="email" value="{{old('email')}}" placeholder="Enter your email" class="form-control @error('email') is-invalid @enderror form-control-lg mt-2 rounded-0">
                                        @error('email')
                                        <span class="message text-danger">{{$message}}</span>
                                        @enderror
                                    </div>
                                    <div class="mb-3">
                                        <span>Password <span class="text-danger">*</span></span>
                                        <input type="password" name="password" placeholder="Enter your password" class="form-control @error('password') is-invalid @enderror form-control-lg mt-2 rounded-0">
                                        @error('password')
                                        <span class="message text-danger">{{$message}}</span>
                                        @enderror
                                    </div>
                                    <div class="mb-3">
                                        <span>Confirm Password <span class="text-danger">*</span></span>
                                        <input type="password" name="password_confirmation" placeholder="Enter your confirm password" class="form-control @error('password') is-invalid @enderror form-control-lg mt-2 rounded-0">
                                        <!-- <span class="message">Enter the password that accompanies your
                                            username.</span> -->
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2 mb-3">
                                <button class="btn-style red-btn border-0">Register</button>
                            </div>
                            <hr class="my-2">
                        </form>
                        <div class="mt-2">
                            <a href="{{route('login')}}">Go to Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection