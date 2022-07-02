@php
$total = 0;
$learn = 0;
$price = 0;
$values = 0;
$rating = \App\Models\Comments::where('post_id', $id)
    ->where('price', '!=', null)
    ->where('learn', '!=', null)
    ->where('value', '!=', null)
    ->get();
foreach ($rating as $item) {
    $value = $item->learn + $item->price + $item->value;
    $total += $value / 3;
    $learn += $item->learn;
    $price += $item->price;
    $values += $item->value;
}
$gtotal = $total == 0 ? 0 : $total / count($rating);
$min = 5 - $gtotal;
$learn = $learn == 0 ? 0 : $learn / count($rating);
$price = $price == 0 ? 0 : $price / count($rating);
$valuess = $values == 0 ? 0 : $values / count($rating);
@endphp

<div class="title mb-4">
    <h5 class="fw-bold border-bottom border-2 border-primary d-inline">Student Feedback :</h5>
</div>
<div class="row">
    <div class="col-md-3 text-center">
        <h1>{{ round($gtotal, 1) }}</h1>
        @for ($i = 0; $i < intval($gtotal); $i++)
            <i class="fas fa-star" style="color: #ffc107"></i>
        @endfor
        @for ($i = 0; $i < round($min, 1); $i++)
            <i class="fas fa-star"></i>
        @endfor
        <p>Course Rating</p>
    </div>
    <div class="col-md-9">
        <div class="progress my-2">
            <div class="progress-bar" role="progressbar" style="width: {{ round($learn * 20, 1) }}%;" aria-valuenow="25"
                aria-valuemin="0" aria-valuemax="100">Learn-{{ round($learn * 20, 1) }}%</div>
        </div>
        <div class="progress my-2">
            <div class="progress-bar" role="progressbar" style="width: {{ round($price * 20, 1) }}%;" aria-valuenow="25"
                aria-valuemin="0" aria-valuemax="100">Price-{{ round($price * 20, 1) }}%</div>
        </div>
        <div class="progress my-2">
            <div class="progress-bar" role="progressbar" style="width: {{ round($valuess * 20, 1) }}%;"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Value-{{ round($valuess * 20, 1) }}%</div>
        </div>
    </div>
</div>
