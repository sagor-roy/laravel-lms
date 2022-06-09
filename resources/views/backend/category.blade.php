@extends('layouts.backend')

@section('content')
<div class="content-wrapper">
  <div class="page-header">
    <h3 class="page-title">
      Category
    </h3>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Category</a></li>
        <li class="breadcrumb-item active" aria-current="page">list</li>
      </ol>
    </nav>
  </div>
  {{-- <form action="{{route('admin.cate.multi-delete')}}" method="POST"> --}}
    @csrf
  <div class="card">
    <div class="card-body">
      <h4 class="card-title text-right">
        <a href="#create" data-toggle="modal" class="btn btn-primary"><i class="fas fa-plus"></i> New Category</a>
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
                    <th>Category Name</th>
                    <th>Slug</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                @foreach ($data as $item)
                <tr>
                  <td>
                    <input type="checkbox" name="check[]" value="{{$item->id}}">
                  </td>
                  <td>{{$item->name}}</td>
                  <td>{{$item->slug}}</td>
                  <td>
                    <form action="{{route('admin.cate.status.update',$item->id)}}" method="POST">
                      @csrf
                    <label class="switch">
                      <input type="checkbox" onchange="this.form.submit()" name="status" value="1" {{$item->status == 1 ? 'checked':''}}>
                      <span class="slider round"></span>
                    </label>
                  </form>
                  </td>
                  <td>
                    <a title="Edit" data-toggle="modal" href="#edit{{$item->id}}"><i class="fas fa-pen"></i></a>
                    <a title="Delete" data-toggle="modal" href="#delete{{$item->id}}" class="text-danger ml-2"><i class="fas fa-trash-alt"></i></a>
                  </td>
                </tr>
                <!-- edit -->
                  <div class="modal fade" id="edit{{$item->id}}" tabindex="-1">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Category Edit</h5>
                          <button type="button" class="close" data-dismiss="modal">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <form action="{{route('admin.cate.update',$item->id)}}" method="POST">
                          @csrf
                        <div class="modal-body">
                          <div class="form-group">
                            <label for="">Name :</label>
                            <input type="text" value="{{$item->name}}" name="name" class="form-control">
                          </div>
                          <div class="form-group">
                            <label for="">Status :</label> <br>
                            <label class="switch">
                              <input type="checkbox" name="status" value="1" {{$item->status == 1 ? 'checked':''}}>
                              <span class="slider round"></span>
                            </label>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="submit" class="btn btn-primary">Update</button>
                        </div>
                      </form>
                      </div>
                    </div>
                  </div>

                  <!-- delete -->
                    <div class="modal fade" id="delete{{$item->id}}" tabindex="-1">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">Category Delete</h5>
                            <button type="button" class="close" data-dismiss="modal">
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <h4>Are you sure to Delete?</h4>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
                            <a href="{{route('admin.cate.destroy',$item->id)}}" class="btn btn-danger">Yes, Confirm</a>
                          </div>
                        </div>
                      </div>
                    </div>
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


<!-- create -->
<div class="modal fade" id="create" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Category Create</h5>
        <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <form action="{{route('admin.cate.store')}}" method="POST">
        @csrf
      <div class="modal-body">
        <div class="form-group">
          <label for="">Name :</label>
          <input type="text" name="name" class="form-control">
        </div>
        <div class="form-group">
          <label for="">Status :</label> <br>
          <label class="switch">
            <input type="checkbox" name="status" value="1">
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save changes</button>
      </div>
    </form>
    </div>
  </div>
</div>


@endsection