@extends('layouts.frontend')
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
        <div class="row">
            <div class="col-md-3">
                <div class="card card-body text-center shadow py-5">
                    <input type="file" class="dropify" />
                    <h4 class="mt-3">John Doe</h4>
                </div>

                <div class="dashboard-items card card-body mt-4 shadow">
                    <ul>
                        <li>
                            <a href="" title="Dashboard"> <i class="fa fa-bookmark"></i> My Courses</a>
                        </li>
                        <li>
                            
                            <a href="" title="Profile Update"> <i class="fa fa-heart"></i> My Wishlist</a>
                        </li>
                        <li>
                            
                            <a href="" title="Followers"> <i class="fa fa-history"></i> Purchase History</a>
                        </li>
                        <li>
                            
                            <a href="" title="Upload Items"> <i class="fa fa-user"></i> My Profile</a>
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
                        <form action="">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="mb-1" for="">Name</label>
                                        <input type="text" placeholder="Enter your name" class="form-control form-control-lg">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="mb-1" for="">Email</label>
                                        <input type="text" placeholder="Enter your email" class="form-control form-control-lg">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="mb-1" for="">Mobile</label>
                                        <input type="text" placeholder="Enter your mobile" class="form-control form-control-lg">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="mb-1" for="">Country</label>
                                        <select name="" class="form-control form-control-lg">
                                            <option value="">Bangladesh</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label class="mb-1" for="">Address</label>
                                        <textarea name="" placeholder="Enter your address" class="form-control" rows="5"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <input type="checkbox" id="checkPass" class="">
                                        <label for="checkPass">Update Password</label>
                                    </div>
                                </div>
                               <div id="updatePass" class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="mb-1" for="">Password</label>
                                        <input type="text" placeholder="Enter your password" class="form-control form-control-lg">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="mb-1" for="">Confirm Password</label>
                                        <input type="text" placeholder="Enter your confirm password" class="form-control form-control-lg">
                                    </div>
                                </div>
                               </div>
                                <div class="col-md-6 mt-4">
                                    <div class="mb-3">
                                        <button type="submit" class="btn-style red-btn border-0">Update</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection