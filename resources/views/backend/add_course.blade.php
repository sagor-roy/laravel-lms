@extends('layouts.backend')

@error('tags') is-invalid 
<style>
div#tags_tagsinput {border: 1px solid red;}
</style>
@enderror

@error('desc') is-invalid 
<style>
.note-editor.note-frame.card {border: 1px solid red;}
</style>
@enderror

@section('content')
<div class="content-wrapper">
  <div class="page-header">
    <h3 class="page-title">
      Course
    </h3>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="{{route('admin.course.index')}}">Course</a></li>
        <li class="breadcrumb-item active" aria-current="page">Create</li>
      </ol>
    </nav>
  </div>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title text-right">
        <a href="{{route('admin.course.index')}}" class="btn btn-primary">Back</a>
      </h4>
      <div class="row">
        <div class="col-12">
          @if (Session::has('message'))
          <div class="alert alert-danger">{{Session::get('message')}}</div>
          @endif
          <form action="{{route('admin.course.store')}}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">Category</label>
                  <select name="category" class="form-control @error('category') is-invalid @enderror">
                    <option value="">Select your category</option>
                    @foreach ($data as $item )
                    <option value="{{$item->id}}" {{old('category') == $item->id ? 'selected':''}}>{{$item->name}}</option>
                    @endforeach
                  </select>
                  @error('category')
                  <div class="text-danger"><i>{{$message}}</i></div>
                  @enderror
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">Title</label>
                  <input type="text" name="title" value="{{old('title')}}" class="form-control @error('title') is-invalid @enderror">
                  @error('title')
                  <div class="text-danger"><i>{{$message}}</i></div>
                  @enderror
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">Tag</label>
                  <input name="tags" id="tags" value="{{old('tags')}}" />
                  @error('tags')
                  <div class="text-danger"><i>{{$message}}</i></div>
                  @enderror
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label for="">Short Desc</label>
                  <textarea name="short" rows="3" class="form-control @error('short') is-invalid @enderror">{{old('short')}}</textarea>
                  @error('short')
                  <div class="text-danger"><i>{{$message}}</i></div>
                  @enderror
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label for="">Description</label>
                  <textarea name="desc" id="summernoteExample" >{{old('desc')}}</textarea>
                  @error('desc')
                  <div class="text-danger"><i>{{$message}}</i></div>
                  @enderror
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">Status</label> <br>
                  <label class="switch">
                    <input type="checkbox" name="status" value="1">
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">Thumbnail Video Link</label>
                  <input name="video_link" value="{{old('video_link')}}" type="text" class="form-control">
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">Thumbnail Image</label>
                  <input type="file" name="img" class="form-control @error('img') is-invalid @enderror">
                  @error('img')
                  <div class="text-danger"><i>{{$message}}</i></div>
                  @enderror
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">Price</label>
                  <select name="type" id="price" class="form-control @error('type') is-invalid @enderror">
                    <option value="">Select your price</option>
                    <option value="free" {{old('type') == 'free' ? 'selected':''}}>Free</option>
                    <option value="paid" {{old('type') == 'paid' ? 'selected':''}}>Paid</option>
                  </select>
                  @error('type')
                  <div class="text-danger"><i>{{$message}}</i></div>
                  @enderror
                </div>
              </div>
              <div id="prices" class="col-md-8">
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>



@section('script')
<script>
  $(document).ready(function () {
    $("select#price").change(function () {
      var price = $(this).children("option:selected").val();
      if (price == 'paid') {
        $("div#prices").html('<div class="row"><div class="col-md-6"><div class="form-group"><label for="">Price</label><input type="number" required name="price" value="" class="form-control"></div></div><div class="col-md-6"><div class="form-group"><label for="">Dicount (Percent)</label><input type="number" value="" name="discount" class="form-control"></div></div></div>');
      } else {
        $("div#prices").html('');
      }
    })
  })
</script>
@endsection

@endsection