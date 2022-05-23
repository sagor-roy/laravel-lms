<header>
    <nav class="nav bg-white shadow-sm py-2">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-md-3">
                    <a href="{{route('home')}}" class="navbar-brand">
                        <img src="{{asset('asset/frontend/img/iconic-logo.png')}}" class="img-fluid" width="180" alt="logo">
                    </a>
                </div>
                <div class="col-md-6">
                    <form class="d-flex search">
                        <input class="form-control form-control-lg" type="search" placeholder="Search">
                        <button class="btn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
                <div class="col-md-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="list">
                            <a href=""><i class="fa-solid fa-bell"></i></a>
                            <span>0</span>
                        </div>
                        <div class="list">
                            <a href=""><i class="fa-solid fa-heart"></i></a>
                            <span>0</span>
                        </div>
                        <div class="list">
                            <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
                            <span>0</span>
                        </div>
                        @guest
                        <a href="{{route('login')}}" class="btn-style red-btn border-0">Login</a>
                        @endguest

                        @auth
                        <div class="dropdown">
                            <button class="btn-style red-btn border-0" type="button" id="drp"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-user"></i> {{Auth::user()->name}}
                            </button>
                            <ul class="dropdown-menu mt-2" aria-labelledby="drp">
                                @if (Auth::user()->role == 'super')
                                <li><a class="dropdown-item" href="{{route('admin.dashboard')}}"><i class="fa-regular fa-user"></i></i> My Dashboard</a></li>
                                @else
                                <li><a class="dropdown-item" href="{{route('user.course')}}"><i class="fa-solid fa-gem"></i> My Course</a></li>
                                <li><a class="dropdown-item" href="{{route('user.wishlist')}}"><i class="fa-solid fa-code-compare"></i> Wishlist</a></li>
                                <li><a class="dropdown-item" href="{{route('user.history')}}"><i class="fa-solid fa-money-check-dollar"></i> Purchase History</a></li>
                                <li><a class="dropdown-item" href="{{route('user.profile')}}"><i class="fa-regular fa-user"></i></i> Profile</a></li>
                                @endif
                                <li><a class="dropdown-item" href="{{route('logout')}}"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a></li>
                            </ul>
                        </div>
                        @endauth
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>