@extends('layouts.backend')

@section('content')
<div class="content-wrapper">
  <div class="page-header">
    <h3 class="page-title">
      User
    </h3>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">User</a></li>
        <li class="breadcrumb-item active" aria-current="page">list</li>
      </ol>
    </nav>
  </div>
  {{-- <form action="{{route('admin.cate.multi-delete')}}" method="POST"> --}}
    @csrf
  <div class="card">
    <div class="card-body">
      <h4 class="card-title text-right">
        <a href="{{route('admin.role.user')}}" class="btn btn-primary"><i class="fas fa-plus"></i> New User</a>
      </h4>
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table id="" class="table order-listing">
              <thead>
                <tr>
                    <th>
                      <input type="checkbox" id="selectAll">
                    </th>
                    <th>User</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                @foreach ($user as $item)
               <tr>
                   <td>
                    <input type="checkbox" >
                   </td>
                   <td>
                       {{$item->name}}
                   </td>
                   <td>
                    {{$item->email}}
                   </td>
                   <td>
                    xxxxxxx
                   </td>
                   <td>
                    <label class="switch">
                        <input type="checkbox" name="status" value="1">
                        <span class="slider round"></span>
                      </label>
                   </td>
                   <td>
                    <a title="Edit" data-toggle="modal" href=""><i class="fas fa-pen"></i></a>
                    <a title="Delete" data-toggle="modal" href="" class="text-danger ml-2"><i class="fas fa-trash-alt"></i></a>
                   </td>
               </tr>
               @endforeach
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
{{-- </form> --}}
</div>




@endsection