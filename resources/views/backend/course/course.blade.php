@extends('layouts.backend')

@section('content')
<div class="content-wrapper">
  <div class="page-header">
    <h3 class="page-title">
      Course
    </h3>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Course</a></li>
        <li class="breadcrumb-item active" aria-current="page">list</li>
      </ol>
    </nav>
  </div>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title text-right">
        <a href="{{route('admin.course.create')}}" class="btn btn-primary"><i class="fas fa-plus"></i> New Course</a>
      </h4>
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table id="order-listing" class="table">
              <thead>
                <tr>
                    <th>
                      <input type="checkbox" id="selectAll">
                    </th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Discount</th>
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
                  <td>
                    <img src="
                    @if (file_exists(public_path($item->img)))
                      {{asset($item->img)}}
                      @else
                      https://pharem-project.eu/wp-content/themes/consultix/images/no-image-found-360x250.png
                  @endif" width="150" alt="">
                  </td>
                  <td>{{$item->title}}</td>
                  <td>
                    @if ($item->price != null)
                    {{$item->price}}
                    @else
                    <span class="badge badge-danger">{{$item->type}}</span>
                    @endif
                  </td>
                  <td>
                    @if ($item->discount != null)
                    {{$item->discount}}
                    @else
                    <span class="badge badge-primary">0</span>
                    @endif
                  </td>
                  <td>
                    <form action="{{route('admin.course.status.update',$item->id)}}" method="POST">
                      @csrf
                    <label class="switch">
                      <input type="checkbox" onchange="this.form.submit()" name="status" value="1" {{$item->status == 1 ? 'checked':''}}>
                      <span class="slider round"></span>
                    </label>
                  </form>
                  </td>
                  <td>
                    <a class="mx-1" title="Edit" href="{{route('admin.course.edit',$item->id)}}"><i class="fas fa-pen"></i></a>
                    <a class="mx-1" title="View" href=""><i class="fas fa-eye"></i></a>
                    <a class="mx-1" title="Duplicate" href="{{route('admin.course.duplicate',$item->id)}}"><i class="fas fa-copy"></i></a>
                    <a  title="Delete" data-toggle="modal" href="#delete{{$item->id}}" class="text-danger ml-2"><i class="fas fa-trash-alt"></i></a>
                  </td>
                </tr>

                  <!-- delete -->
                    <div class="modal fade" id="delete{{$item->id}}" tabindex="-1">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">Course Delete</h5>
                            <button type="button" class="close" data-dismiss="modal">
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <h4>Are you sure to Delete?</h4>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
                            <a href="{{route('admin.course.destroy',$item->id)}}" class="btn btn-danger">Yes, Confirm</a>
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
</div>

@endsection