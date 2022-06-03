@foreach ($cate as $course)
@foreach ($course->courses as $item)
<div class="col-md-3">
    <div class="card course">
        <img src="{{asset($item->img)}}" alt="">
        <div class="card-body">
            <h6>{{str_title($item->title)}}</h6>
            <div class="sort">
                <p>by Hapijul Islam</p>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        @if ($item->type == 'paid')
        <h6 class="text-end me-2">&#2547; 
            @if ($item->discount == null)
                {{number_format($item->price)}}
            @else
                @php
                    $price = $item->price * $item->discount / 100;
                    $final = $item->price - $price;
                @endphp
                {{number_format($final)}}
                <del> &#2547;{{number_format($item->price)}}</del>
            @endif 
        </h6>
        @else
            <div class="badge bg-danger float-end">Free</div>
        @endif
        <a href="{{route('single.course',[$item->id, $item->slug])}}" class="link"></a>
    </div>
</div>
@endforeach
@endforeach
