@extends('layouts.frontend')

<style>
    .pro_content > input {
    visibility: hidden;
    position: absolute;
}

.pro_content > label {font-size: 20px;font-weight: bolder;position: absolute;background-color: #ccc;padding: 10px 12px;border-radius: 50px;top: 125px;right: 62px;cursor: pointer;}
</style>

@section('content')
<section class="single">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h2>My Profile</h2>
            </div>
        </div>
    </div>
</section>

<section class="mt-5">
    <div class="container">
        <form action="{{url('profile/update/',2)}}" method="POST" enctype="multipart/form-data">
            @csrf
        <div class="row">
            <div class="col-md-3">
                <div class="card card-body text-center shadow py-5 pro_content">
                    @if (Auth::user()->img == null)
                        <img style="margin: 0 auto" width="120" src="{{Avatar::create(Auth::user()->name)->toBase64()}}" alt="avatar">
                        <label for="img"><i class="fa-solid fa-plus"></i></label>
                        <input id="img" type="file" name="img">
                    @else
                    <input type="file" name="img" data-default-file="{{asset(Auth::user()->img)}}" class="dropify" />
                    @endif
                    <h4 class="mt-3">John Doe</h4>
                </div>

                <div class="dashboard-items card card-body mt-4 shadow">
                    <ul>
                        <li>
                            <a href="{{route('user.course')}}" title="Dashboard"> <i class="fa fa-bookmark"></i> My Courses</a>
                        </li>
                        <li>
                            
                            <a href="{{route('user.wishlist')}}" title="Profile Update"> <i class="fa fa-heart"></i> My Wishlist</a>
                        </li>
                        <li>
                            
                            <a href="{{route('user.history')}}" title="Followers"> <i class="fa fa-history"></i> Purchase History</a>
                        </li>
                        <li>
                            
                            <a href="{{route('user.profile')}}" title="Upload Items"> <i class="fa fa-user"></i> My Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-9">
                <div class="card shadow">
                    <div class="card-header">
                        <h5>Personal Information</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="mb-1" for="">Name</label>
                                    <input type="text" name="name" value="{{Auth::user()->name}}" placeholder="Enter your name" class="form-control form-control-lg">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="mb-1" for="">Email</label>
                                    <input type="text" name="email" value="{{Auth::user()->email}}" placeholder="Enter your email" class="form-control form-control-lg">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="mb-1" for="">Mobile</label>
                                    <input type="text" name="mobile" value="{{Auth::user()->mobile}}" placeholder="Enter your mobile" class="form-control form-control-lg">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="mb-1" for="">Country</label>
                                    <select name="country" class="form-control form-control-lg">
                                        <option value="">Select your country</option>
                                        <option value="bd" {{Auth::user()->country == 'bd' ? 'selected':''}}>Bangladesh</option>
                                        <option value="in" {{Auth::user()->country == 'in' ? 'selected':''}}>India</option>
                                        <option value="jp" {{Auth::user()->country == 'jp' ? 'selected':''}}>Japan</option>
                                        <option value="ch" {{Auth::user()->country == 'ch' ? 'selected':''}}>China</option>
                                        <option value="np" {{Auth::user()->country == 'np' ? 'selected':''}}>Nepal</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="mb-1" for="">Address</label>
                                    <textarea name="address" placeholder="Enter your address" class="form-control" rows="5">{{Auth::user()->address}}</textarea>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <input type="checkbox" id="checkPass">
                                    <label for="checkPass">Update Password</label>
                                </div>
                            </div>
                            <div id="updatePass" class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="mb-1" for="">Password</label>
                                    <input type="text" name="password" placeholder="Enter your password" class="form-control form-control-lg">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="mb-1" for="">Confirm Password</label>
                                    <input type="text" name="confirm_password" placeholder="Enter your confirm password" class="form-control form-control-lg">
                                </div>
                            </div>
                            </div>
                            <div class="col-md-6 mt-4">
                                <div class="mb-3">
                                    <button type="submit" class="btn-style red-btn border-0">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    </div>
</section>


@section('script')
<script>
    $('.dropify').dropify();
    $(document).ready(function(){
        let list = $('#updatePass').hide();
        $('#checkPass').on('change',function(e){
            let check = $(this).prop('checked') == true ? 1 : 0;
            if (check == 1) {
                list.show();
            } else {
                list.hide();
            }
        })
    })
</script>
@endsection


@endsection