<nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item nav-profile">
        <div class="nav-link">
          <div class="profile-image">
            <img src="{{asset('asset/backend/images/faces/face5.jpg')}}" alt="image"/>
          </div>
          <div class="profile-name">
            <p class="name">
              Welcome Jane
            </p>
            <p class="designation">
              Super Admin
            </p>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('admin.dashboard')}}">
          <i class="fa fa-home menu-icon"></i>
          <span class="menu-title">Dashboard</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('admin.order')}}">
          <i class="fa fa-puzzle-piece menu-icon"></i>
          <span class="menu-title">Orders</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('admin.cate.index')}}">
          <i class="fa fa-puzzle-piece menu-icon"></i>
          <span class="menu-title">Category</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('admin.course.index')}}">
          <i class="fa fa-puzzle-piece menu-icon"></i>
          <span class="menu-title">Course</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" data-toggle="collapse" href="#page-layouts" aria-expanded="false" aria-controls="page-layouts">
          <i class="fab fa-trello menu-icon"></i>
          <span class="menu-title">Role Management</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="page-layouts" style="">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="{{route('admin.role.index')}}">User</a></li>
            <li class="nav-item"> <a class="nav-link" href="{{route('admin.role.list')}}">Role</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>