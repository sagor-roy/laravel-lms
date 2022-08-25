@extends('layouts.backend')

@error('tags') is-invalid 
<style>
div#tags_tagsinput {border: 1px solid red;}
</style>
@enderror
<style>
ul.course-sidebar {list-style: none;margin: 0;padding: 0;position: relative;}
ul.course-sidebar > li > a {font-size: 15px;padding:10px;display: block;color: black;border-bottom: 1px solid #ddd;text-decoration: none}
a.active {background-color: #ddd;}
</style>
@error('desc') is-invalid 
<style>
.note-editor.note-frame.card {border: 1px solid red;}
</style>
@enderror

@section('content')
<div class="content-wrapper">
  <div class="page-header">
    <h3 class="page-title">
      Edit Course
    </h3>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="{{route('admin.course.index')}}">Edit Course</a></li>
        <li class="breadcrumb-item active" aria-current="page">Edit</li>
      </ol>
    </nav>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5>Course : {{$course->title}}</h5>
            <a href="{{route('admin.course.index')}}" class="btn btn-primary">Back</a>
          </div>
          <div class="row">
            @if (Session::has('message'))
              <div class="alert alert-danger">{{Session::get('message')}}</div>
              @endif
              @csrf
            <div class="col-md-3">
              <ul class="nav nav-tabs nav-tabs-vertical" role="tablist">
                <li class="nav-item">
                  <a class="nav-link 
                  @if(Session::has('status')) 
                  @if (Session::get('status')=='detail')
                    active show
                  @endif
                  @else 
                  active show
                  @endif
                  " id="detail-tab-vertical" onclick="activeFunc('detail')" data-toggle="tab" href="#detail-2" role="tab" aria-controls="detail-2" aria-selected="true">
                    <i class="fas fa-arrow-circle-right"></i> Course Detail
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link @if(Session::get('status')=='chapter') active show @endif" id="chapter-tab-vertical" onclick="activeFunc('chapter')" data-toggle="tab" href="#chapter-2" role="tab" aria-controls="chapter-2" aria-selected="false">
                    <i class="fas fa-arrow-circle-right"></i> Course Chapter
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link @if(Session::get('status')=='classes') active show @endif" id="classes-tab-vertical" onclick="activeFunc('classes')" data-toggle="tab" href="#classes-2" role="tab" aria-controls="classes-2" aria-selected="false">
                    <i class="fas fa-arrow-circle-right"></i> Course Classes
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link @if(Session::get('status')=='quiz') active show @endif" id="quiz-tab-vertical" onclick="activeFunc('quiz')" data-toggle="tab" href="#quiz-2" role="tab" aria-controls="quiz-2" aria-selected="false">
                    <i class="fas fa-arrow-circle-right"></i> Chapter Quiz
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-9">
              <div class="tab-content tab-content-vertical">
                <div class="tab-pane fade 
                  @if(Session::has('status')) 
                  @if (Session::get('status')=='detail')
                    active show
                  @endif
                  @else 
                  active show
                  @endif
                " id="detail-2" role="tabpanel" aria-labelledby="detail-tab-vertical">
                  <form action="{{route('admin.course.update',$course->id)}}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="">Category</label>
                          <select name="category" class="form-control @error('category') is-invalid @enderror">
                            <option value="">Select your category</option>
                            @foreach ($cate as $item )
                            <option value="{{$item->id}}" {{$course->cate_id == $item->id ? 'selected':''}}>{{$item->name}}</option>
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
                          <input type="text" name="title" value="{{$course->title}}" class="form-control @error('title') is-invalid @enderror">
                          @error('title')
                          <div class="text-danger"><i>{{$message}}</i></div>
                          @enderror
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="">Tag</label>
                          <input name="tags" id="tags" value="{{$course->tags}}" />
                          @error('tags')
                          <div class="text-danger"><i>{{$message}}</i></div>
                          @enderror
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="">Short Desc</label>
                          <textarea name="short" rows="3" class="form-control @error('short') is-invalid @enderror">{{$course->short}}</textarea>
                          @error('short')
                          <div class="text-danger"><i>{{$message}}</i></div>
                          @enderror
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="">Description</label>
                          <textarea name="desc" id="summernoteExample" >{{$course->desc}}</textarea>
                          @error('desc')
                          <div class="text-danger"><i>{{$message}}</i></div>
                          @enderror
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="">Status</label> <br>
                          <label class="switch">
                            <input type="checkbox" {{$course->status == 1 ? 'checked':''}} name="status" value="1">
                            <span class="slider round"></span>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="">Thumbnail Video Link</label>
                          <input name="video_link" value="{{$course->video_link}}" type="text" class="form-control">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="">Thumbnail Image</label>
                          <input type="file" name="img" class="form-control @error('img') is-invalid @enderror">
                          @error('img')
                          <div class="text-danger"><i>{{$message}}</i></div>
                          @enderror
                          <img src="{{asset($course->img)}}" class="img-fluid" alt="{{$course->title}}">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="">Price</label>
                          <select name="type" id="price" class="form-control @error('type') is-invalid @enderror">
                            <option value="">Select your price</option>
                            <option value="free" {{$course->type == 'free' ? 'selected':''}}>Free</option>
                            <option value="paid" {{$course->type == 'paid' ? 'selected':''}}>Paid</option>
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
                <div class="tab-pane fade @if(Session::get('status')=='chapter') active show @endif" id="chapter-2" role="tabpanel" aria-labelledby="chapter-tab-vertical">
                  <div class="card border-0">
                    <div class="card-body p-0">
                      <h4 class="card-title text-right">
                        <a href="#chapter" data-toggle="modal" class="btn btn-primary"><i class="fas fa-plus"></i> New Chapter</a>
                      </h4>
                      <div class="row">
                        <div class="col-12">
                          <div class="table-responsive">
                            <table class="order-listing table">
                              <thead>
                                <tr>
                                    <th>
                                      <input type="checkbox" id="selectAll">
                                    </th>
                                    <th>Chapter Name</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                @foreach ($chapter as $item)
                                <tr>
                                  <td>
                                    <input type="checkbox" name="check[]">
                                  </td>
                                  <td>{{$item->name}}</td>
                                  <td>
                                    <form action="{{route('admin.course.chapter.status',[$course->id,$item->id])}}" method="POST">
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
                                        <h5 class="modal-title">Chapter Edit</h5>
                                        <button type="button" class="close" data-dismiss="modal">
                                          <span aria-hidden="true">×</span>
                                        </button>
                                      </div>
                                      <form action="{{route('admin.course.chapter.update',[$course->id,$item->id])}}" method="POST">
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
                                        <a href="{{route('admin.course.chapter.destroy',[$course->id, $item->id])}}" class="btn btn-danger">Yes, Confirm</a>
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
                <div class="tab-pane fade @if(Session::get('status')=='classes') active show @endif" id="classes-2" role="tabpanel" aria-labelledby="classes-tab-vertical">
                  <div class="card border-0">
                    <div class="card-body p-0">
                      <h4 class="card-title text-right">
                        <a href="#class" data-toggle="modal" class="btn btn-primary"><i class="fas fa-plus"></i> New Classes</a>
                      </h4>
                      <div class="row">
                        <div class="col-12">
                          <div class="table-responsive">
                            <table class="order-listing table">
                              <thead>
                                <tr>
                                    <th>
                                      <input type="checkbox" id="selectAll">
                                    </th>
                                    <th>Chapter</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                @foreach ($class as $item)
                                <tr>
                                  <td>
                                    <input type="checkbox" name="check[]">
                                  </td>
                                  <td>{{$item->chapter->name}}</td>
                                  <td>{{$item->title}}</td>
                                  <td>
                                    <form action="{{route('admin.course.class.status',$item->id)}}" method="POST">
                                      @csrf
                                    <label class="switch">
                                      <input type="checkbox" onchange="this.form.submit()" name="status" value="1" {{$item->status == 1 ? 'checked':''}}>
                                      <span class="slider round"></span>
                                    </label>
                                  </form>
                                  </td>
                                  <td>
                                    <a title="Edit" data-toggle="modal" href="#class{{$item->id}}"><i class="fas fa-pen"></i></a>
                                    <a title="Delete" data-toggle="modal" href="#delete{{$item->id}}" class="text-danger ml-2"><i class="fas fa-trash-alt"></i></a>
                                  </td>
                                </tr>
                                <!-- edit -->
                                <div class="modal fade" id="class{{$item->id}}" tabindex="-1">
                                  <div class="modal-dialog">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title">Class Edit</h5>
                                        <button type="button" class="close" data-dismiss="modal">
                                          <span aria-hidden="true">×</span>
                                        </button>
                                      </div>
                                      <form action="{{route('admin.course.class.update',$item->id)}}" method="POST">
                                        @csrf
                                        <input type="hidden" name="course" value="{{$course->id}}">
                                      <div class="modal-body">
                                        <div class="form-group">
                                          <label for="">Chapter Name :</label>
                                          <select name="chapter" class="form-control">
                                            <option value="">Select your chapter</option>
                                            @foreach ($chapter as $chap)
                                            <option value="{{$chap->id}}" {{$item->chapter_id == $chap->id ? 'selected':''}}>{{$chap->name}}</option>
                                            @endforeach
                                          </select>
                                        </div>
                                        <div class="form-group">
                                          <label for="">Title</label>
                                          <input type="text" name="title" value="{{$item->title}}" class="form-control">
                                        </div>
                                        <div class="form-group">
                                          <label for="">Detail</label>
                                          <textarea name="detail" rows="4" class="form-control">{{$item->detail}}</textarea>
                                        </div>
                                        <div class="form-group">
                                          <label for="">Video Link</label>
                                          <input type="text" value="{{$item->link}}" name="link" class="form-control">
                                        </div>
                                        <div class="form-group">
                                          <label for="">Video Duration</label>
                                          <input type="text" value="{{$item->duration}}" name="duration" class="form-control">
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
                                        <button type="submit" class="btn btn-primary">Save changes</button>
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
                                        <a href="{{route('admin.course.class.destroy', $item->id)}}" class="btn btn-danger">Yes, Confirm</a>
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
                <div class="tab-pane fade @if(Session::get('status')=='quiz') active show @endif" id="quiz-2" role="tabpanel" aria-labelledby="quiz-tab-vertical">
                  <div class="card border-0">
                    <div class="card-body p-0">
                      <h4 class="card-title text-right">
                        <a href="#quiz" data-toggle="modal" class="btn btn-primary"><i class="fas fa-plus"></i> New Quiz</a>
                      </h4>
                      <div class="row">
                        <div class="col-12">
                          <div class="table-responsive">
                            <table class="order-listing table">
                              <thead>
                                <tr>
                                    <th>
                                      <input type="checkbox" id="selectAll">
                                    </th>
                                    <th>Chapter</th>
                                    <th>Quiz</th>
                                    <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <input type="checkbox" name="check[]">
                                  </td>
                                  <td>Lorem ipsum dolor sit amet.</td>
                                  <td>Lorem, ipsum dolor.</td>
                                  <td>
                                    <a title="Edit" data-toggle="modal" href=""><i class="fas fa-pen"></i></a>
                                    <a title="Delete" data-toggle="modal" href="" class="text-danger ml-2"><i class="fas fa-trash-alt"></i></a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- create -->
<div class="modal fade" id="chapter" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Chapter Create</h5>
        <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <form action="{{route('admin.course.chapter.store',$course->id)}}" method="POST">
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

<!-- create -->
<div class="modal fade" id="class" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Class Create</h5>
        <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <form action="{{route('admin.course.class.store',$course->id)}}" method="POST">
        @csrf
      <div class="modal-body">
        <div class="form-group">
          <label for="">Chapter Name :</label>
          <select name="chapter" class="form-control">
            <option value="">Select your chapter</option>
            @foreach ($chapter as $item)
            <option value="{{$item->id}}">{{$item->name}}</option>
            @endforeach
          </select>
        </div>
        <div class="form-group">
          <label for="">Title</label>
          <input type="text" name="title" class="form-control">
        </div>
        <div class="form-group">
          <label for="">Detail</label>
          <textarea name="detail"  rows="4" class="form-control"></textarea>
        </div>
        <div class="form-group">
          <label for="">Video Link</label>
          <input type="text" name="link" class="form-control">
        </div>
        <div class="form-group">
          <label for="">Video Duration</label>
          <input type="text" name="duration" class="form-control">
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



@section('script')
<script>
  $(document).ready(function () {
    let check = "{{$course->type}}";
    if (check == 'paid') {
      $("div#prices").html('<div class="row"><div class="col-md-6"><div class="form-group"><label for="">Price</label><input type="number" required name="price" value="{{$course->price}}" class="form-control"></div></div><div class="col-md-6"><div class="form-group"><label for="">Dicount (Percent)</label><input type="number" value="{{$course->discount}}" name="discount" class="form-control"></div></div></div>');
    }
    $("select#price").change(function () {
      var price = $(this).children("option:selected").val();
      if (price == 'paid') {
        $("div#prices").html('<div class="row"><div class="col-md-6"><div class="form-group"><label for="">Price</label><input type="number" required name="price" value="{{$course->price}}" class="form-control"></div></div><div class="col-md-6"><div class="form-group"><label for="">Dicount (Percent)</label><input type="number" value="{{$course->discount}}" name="discount" class="form-control"></div></div></div>');
      } else {
        $("div#prices").html('');
      }
    })
  })

function activeFunc(data) {
  var token = $('input[name="_token"]').val();
  $.ajax({
    url:"{{route('admin.course.active')}}",
    method:'post',
    data:{
      _token:token,
      data:data
    },
    success:(result)=>{
    }
  })
}
</script>
@endsection

@endsection