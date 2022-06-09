@extends('layouts.frontend')
@section('content')
<section class="single">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h2>Purchase History</h2>
            </div>
        </div>
    </div>
</section>

<section class="mt-5">
    <div class="container table-responsive">
        <table class="table table-bordered text-center">
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
                        <a href="{{route('single.course',[$items->course_id, $items->course->slug])}}" class="m-0">{{str_title($items->course->title)}}</a> <br>
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
                        @if ($item->order_status == 'complete')
                        <span class="badge bg-success">complete</span>
                        @elseif ($item->order_status == 'processing')
                        <span class="badge bg-warning">processing</span>
                        @elseif ($item->order_status == 'cancel')
                        <span class="badge bg-danger">cancel</span>
                        @endif
                        
                    </td>
                    <td>
                        <a href="{{route('user.invoice',$item->id)}}" class="btn btn-outline-primary">invoice</a>
                    </td>
                </tr>
                @endforeach
                
            </tbody>
        </table>
    </div>
</section>
@endsection