<div class="title d-flex justify-content-between align-items-center">
    <h6>Search History</h6>
    @if (count($tags)>0)
    <a href="{{route('tags.forget')}}" class="btn btn-sm btn-outline-primary">Clear All</a>
    @endif
</div>
<hr class="my-2">
<div class="history__list d-flex flex-wrap mb-4">
    @foreach ($tags as $key=>$item)
        <span><a href="">{{$item['name']}}</a> <a href="{{route('his-remove',$key)}}"><i class="fa-solid fa-xmark"></i></a></span>
    @endforeach
</div>
<ul>
    @foreach ($data as $item)
    <li>
        <a href="{{route('single.course',[$item->id, $item->slug])}}">
            <div class="d-flex">
                <img src="{{asset($item->img)}}" alt="img" width="120">
                <div class="ms-3">
                    <p class="m-0">{{$item->title}} 
                    <h6 class="text-black">6000tk <del>100</del></h6>
                </div>
                </p>
            </div>
        </a>
        <hr class="my-2">
    </li>
    @endforeach
    
</ul>