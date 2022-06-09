@foreach ($cate as $course)
@foreach ($course->courses as $item)
@php
    $total = 0;
    $learn = 0;
    $price = 0;
    $values = 0;
    $rating = \App\Models\Comments::where('post_id',$item->id)->where('price','!=',null)->where('learn','!=',null)->where('value','!=',null)->get();
    foreach ($rating as $items) {
        $value = $items->learn + $items->price + $items->value;
        $total += $value / 3;
        $learn += $items->learn;
        $price += $items->price;
        $values += $items->value;
    }
    $gtotal = $total == 0 ? 0 : $total/count($rating);
    $min = 5-$gtotal;
    $learn = $learn == 0 ? 0 : $learn / count($rating);
    $price = $price == 0 ? 0 : $price / count($rating);
    $valuess = $values == 0 ? 0 : $values / count($rating);
@endphp

<div class="col-md-3">
    <div class="card course">
        <img src="{{asset($item->img)}}" alt="">
        <div class="card-body">
            <h6>{{str_title($item->title)}}</h6>
            <div class="sort">
                <p>by Hapijul Islam</p>
                @for ($i=0; $i < intval($gtotal); $i++)
                <i class="fas fa-star"></i>
                @endfor
                @for ($i=0; $i < round($min,1); $i++)
                <i class="fas fa-star text-muted"></i>
                @endfor
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
