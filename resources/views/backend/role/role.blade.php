@extends('layouts.backend')

@section('content')
<div class="content-wrapper">
  <div class="page-header">
    <h3 class="page-title">
      Role
    </h3>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Role</a></li>
        <li class="breadcrumb-item active" aria-current="page">list</li>
      </ol>
    </nav>
  </div>
  {{-- <form action="{{route('admin.cate.multi-delete')}}" method="POST"> --}}
    @csrf
  <div class="card">
    <div class="card-body">
      <h4 class="card-title text-right">
        <a href="{{route('admin.role.create')}}" class="btn btn-primary"><i class="fas fa-plus"></i> New Role</a>
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
                    <th>Role</th>
                    <th width="40%">Permission</th>
                    <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                @foreach ($roles as $item)
                <tr>
                  <td>
                   <input type="checkbox" >
                  </td>
                  <td>
                      {{ucfirst($item->name)}}
                  </td>
                  <td>
                    @foreach ($item->permissions as $per)
                    <span class="badge badge-primary m-1">{{$per->name}}</span>
                    @endforeach
                      
                  </td>
                  <td>
                   <a title="Edit" href="{{route('admin.role.edit',$item->id)}}"><i class="fas fa-pen"></i></a>
                   <a title="Delete" onclick="return confirm('Are you sure to Delete?')" href="{{route('admin.role.destroy',$item->id)}}" class="text-danger ml-2"><i class="fas fa-trash-alt"></i></a>
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