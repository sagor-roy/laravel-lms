
@foreach ($comments as $value)
@foreach ($value->comment as $comment)
<div class="row my-4">
    <div class="col-md-4 d-flex">
        <img width="40" height="40" src="{{Avatar::create($comment->user->name)->toBase64()}}" alt="avatar">
        <div class="ms-2">
            <h6 class="m-0">{{$comment->user->name}}</h6>
            <p class="p-0 m-0 text-muted">{{$comment->created_at->diffForHumans()}}</p>
        </div>
    </div>
    <div class="col-md-8">
        @php
            $rate = $comment->price + $comment->learn + $comment->value;
            $value = $rate / 3;
            $total = 5-$value;
        @endphp
        @for ($i=0; $i < intval($value); $i++)
        <i class="fas fa-star" style="color: #ffc107"></i>
        @endfor
        @for ($i=0; $i < round($total,1); $i++)
        <i class="fas fa-star"></i>
        @endfor
        

        <p class="m-0"><i>{{$comment->comment}}</i></p>
        @auth
        @if(Auth::user()->role == 'super')
        <div class="dropdown">
            <a id="drp{{$comment->id}}" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">
                Reply
            </a>
            
            <ul class="dropdown-menu p-0 w-100 shadow" aria-labelledby="drp{{$comment->id}}">
                <form action="{{route('user.replies.store')}}" method="POST">
                    @csrf
                    <input type="hidden" name="parent_id" value="{{$comment->id}}">
                    <input type="hidden" name="post_id" value="{{$comment->post_id}}">
                    <input type="hidden" name="user_id" value="{{Auth::user()->id}}">
                    <div class="input-group">
                    <input type="text" required class="form-control" name="comments" placeholder="Your replies...">
                    <span><button class="btn bg-white border"><i class="fa-solid fa-paper-plane"></i></button></span>
                    </div>
                </form>
            </ul>
        </div>
        @endif
        @endauth 

        @if (count($comment->replies) > 0)
        <div class="card card-body bg-transparent">
            @foreach ($comment->replies as $item)
            <div class="row pt-2">
                <div class="col-md-5 d-flex">
                    <img width="40" height="40" src="{{Avatar::create('Admin')->toBase64()}}" alt="avatar">
                    <div class="ms-2">
                        <h6 class="m-0">Admin</h6>
                        <p class="p-0 m-0 text-muted">{{$item->created_at->diffForHumans()}}</p>
                    </div>
                </div>
                <div class="col-md-7">
                    <p><i>{{$item->comment}}</i></p>
                </div>
            </div>
            @endforeach
        </div>
        @endif
    </div>
</div>
<hr>
@endforeach
@endforeach
