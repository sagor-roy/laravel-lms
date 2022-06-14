@extends('layouts.backend')

@section('content')
<div class="content-wrapper">
  <div class="page-header">
    <h3 class="page-title">
      Role Create
    </h3>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Role Create</a></li>
        <li class="breadcrumb-item active" aria-current="page">list</li>
      </ol>
    </nav>
  </div>
  {{-- <form action="{{route('admin.cate.multi-delete')}}" method="POST"> --}}
    @csrf
  <div class="card">
    <div class="card-body">
      <h4 class="card-title text-right">
        <a href="{{route('admin.role.list')}}" class="btn btn-primary">Back</a>
      </h4>
      <form action="{{route('admin.role.store')}}" method="POST">
        @csrf
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Name</label>
              <input type="text" name="role" class="form-control">
            </div>
          </div>
          <div class="col-md-12">
            <div class="custom-checkbox custom-control">
              <input type="checkbox" class="custom-control-input" id="checkbox-all">
              <label for="checkbox-all" class="custom-control-label">All</label>
            </div>
          </div>
          <hr>
          <div class="col-md-6 my-2">
            @php
                $i = 0;
            @endphp
            @foreach ($group as $item)
            <div class="row">
              <div class="col-4">
                <div class="custom-checkbox custom-control">
                  <input type="checkbox" onclick="clickCheckbox('role-{{$i}}-manage',this)" class="custom-control-input" id="group-{{$i}}-checkbox">
                  <label for="group-{{$i}}-checkbox" class="custom-control-label">{{$item->name}}</label>
                </div>
              </div>
              @php
                  $permissions = \App\Models\User::getpermissionsByGroupName($item->name);
              @endphp
              <div class="col-8 role-{{$i}}-manage">
              @foreach ($permissions as $permission)
                <div class="custom-checkbox custom-control">
                  <input type="checkbox" onclick="checkByGroup('role-{{$i}}-manage','group-{{$i}}-checkbox',{{count($permissions)}})" name="permission[]" value="{{$permission->id}}"  class="custom-control-input" id="checkbox-{{$permission->id}}">
                  <label for="checkbox-{{$permission->id}}" class="custom-control-label">{{$permission->name}}</label>
                </div>
                @endforeach
              </div>
            </div>
            <br>
            @php
                $i++;
            @endphp
            @endforeach
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
      </form>
    </div>
  </div>
{{-- </form> --}}
</div>

@section('script')
    @include('backend.role.script')
@endsection


@endsection