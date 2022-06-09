<style>
    li.noti-active {
    background-color: #e9ecef;
}
</style>
<header>
    <nav class="nav bg-white shadow-sm py-2">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-md-3">
                    <a href="{{route('home')}}" class="navbar-brand">
                        <img src="{{asset('asset/frontend/img/iconic-logo.png')}}" class="img-fluid" width="180" alt="logo">
                    </a>
                </div>
                <div class="col-md-6 position-relative">
                    <form class="d-flex search" action="{{route('search')}}" method="get">
                        <input required name="query" class="form-control form-control-lg" id="courseSearch" type="search" placeholder="Search">
                        <button class="btn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                    <div id="lists" class="search__list">
                        
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="d-flex justify-content-between align-items-center">
                        @auth
                        <div class="">
                            <a href=""></a>
                            
                        </div>
                        <div class="dropdown list">
                            <button class="border-0 bg-transparent text-primary" type="button" id="drp1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-bell"></i>
                            </button>
                            <span>{{count(Auth()->user()->unreadNotifications)}}</span>
                            <ul class="dropdown-menu mt-2 py-0" aria-labelledby="drp1">
                                <li class="py-2 ps-2">Notifications</li>
                                <hr class="m-0">
                                @foreach (Auth()->user()->unreadNotifications as $notification)
                                <li class="noti-active">
                                    <a class="dropdown-item py-1" href="{{route('user.noti.read',$notification->id)}}">
                                        <div class="d-flex">
                                            <img src="{{asset($notification->data['img'])}}" width="70" class="me-2" alt="img">
                                            <div>
                                                {{str_title($notification->data['title'])}}
                                                @if ($notification->data['message'] !== null)
                                                <p>{{$notification->data['message']}}</p>
                                                @else
                                                <p>You are enrolled</p>
                                                @endif
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <hr class="m-0">
                                @endforeach
                                @foreach (Auth()->user()->readNotifications as $notification)
                                <li>
                                    <a class="dropdown-item py-1" href="{{route('user.noti.read',$notification->id)}}">
                                        <div class="d-flex">
                                            @if ($notification->data['img'] !== null)
                                            <img src="{{asset($notification->data['img'])}}" width="70" class="me-2" alt="img">
                                            @else
                                            <i class="fa-solid fa-comment-dots fa-1x me-2"></i>
                                            @endif
                                            
                                            <div>
                                                {{str_title($notification->data['title'])}}
                                                @if ($notification->data['message'] !== null)
                                                <p>{{$notification->data['message']}}</p>
                                                @else
                                                <p>You are enrolled</p>
                                                @endif
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <hr class="m-0">
                                @endforeach
                                <a href="#" class="bg-secondary py-1 text-white d-block text-center">Clear</a>
                            </ul>
                        </div>
                        @endauth
                        <div class="list">
                            <a href="{{route('user.wishlist')}}"><i class="fa-solid fa-heart"></i></a>
                            <span>
                                @if (Auth::check())
                                {{\App\Models\Wishlist::where('user_id',Auth::user()->id)->count()}}
                                @else
                                    0
                                @endif
                            </span>
                        </div>
                        <div class="list">
                            <a href="{{route('cart')}}"><i class="fa-solid fa-cart-shopping"></i></a>
                            <span>{{count(Session::has('cart') ? Session::get('cart') : [])}}</span>
                        </div>
                        @guest
                        <a href="{{route('login')}}" class="btn-style red-btn border-0">Login</a>
                        @endguest

                        @auth
                        <div class="dropdown">
                            <button class="btn-style red-btn border-0" type="button" id="drp"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                {{-- <i class="fa-solid fa-user"></i> --}}
                                <img width="25" src="{{Avatar::create(Auth::user()->name)->toBase64()}}" alt="avatar">
                                {{-- {{str_limit(Auth::user()->name)}} --}}
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