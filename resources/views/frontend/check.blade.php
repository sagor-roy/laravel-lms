@foreach ($item->chapters as $class)
    <div class="row border-bottom py-2">
        <div class="col-md-1">
            <i class="fa-solid fa-circle-play"></i>
        </div>
        <div class="col-md-7">
            {{ $class->title }}
            <i class="fa-solid fa-caret-down"></i>
        </div>

        <div class="col-md-2">
            <i class="fa-solid fa-lock"></i>
        </div>
        <div class="col-md-2 text-end">
            {{ $class->duration }} min
        </div>
    </div>
@endforeach
