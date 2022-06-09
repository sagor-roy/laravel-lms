@extends('layouts.backend')

@section('content')
<div class="content-wrapper">
  <div class="page-header">
    <h3 class="page-title">
      Order
    </h3>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Order</a></li>
        <li class="breadcrumb-item active" aria-current="page">list</li>
      </ol>
    </nav>
  </div>
  {{-- <form action="{{route('admin.cate.multi-delete')}}" method="POST"> --}}
    @csrf
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table order-listing text-center table-responsive">
              <thead>
                <tr>
                    <th>Course</th>
                    <th>Transaction</th>
                    <th>Qty</th>
                    <th>Enroll On</th>
                    <th>Payment Mode</th>
                    <th>Total Price</th>
                    <th>Payment Status</th>
                    <th>Order Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($data as $item)
                @php
                    $counter = 0;
                    $order_item = \App\Models\OrderItem::where('order_id',$item->id)->with('course')->get();
                @endphp
                <tr>
                    
                    <td>
                        @foreach ($order_item as $items)
                        <a target="_blank" href="{{route('single.course',[$items->course_id, $items->course->slug])}}" class="m-0">{{str_title($items->course->title)}}</a> <br> <br>
                        @php
                            $counter++;
                        @endphp
                        @endforeach
                    </td>
                    <td >
                        {{$item->transaction_id}}
                    </td>
                    <td>
                        {{$counter}}
                    </td>
                    <td>{{$item->created_at, 'Y-m-d'}}</td>
                    <td><span class="badge bg-success">{{strtoupper($item->method)}}</span></td>
                    <td>&#2547; {{number_format($item->amount)}}</td>
                    <td>
                        @if ($item->status == 'Complete')
                        <span class="badge bg-success">complete</span>
                        @elseif ($item->status == 'Failed')
                        <span class="badge bg-danger">failed</span>
                        @elseif ($item->status == 'Canceled')
                        <span class="badge bg-danger">cancel</span>
                        @endif
                        
                    </td>
                    <td>
                      <form action="{{route('admin.order.status',$item->id)}}" method="POST">
                        @csrf
                      <label class="switch">
                        <input type="checkbox" onchange="this.form.submit()" name="status" value="1" {{$item->order_status == 'complete' ? 'checked':''}}>
                        <span class="slider round"></span>
                      </label>
                    </form>
                        
                    </td>
                    <td>
                        <a href="{{route('user.invoice',$item->id)}}" class="btn btn-outline-primary">invoice</a>
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