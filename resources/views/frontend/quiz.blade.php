@extends('layouts.frontend')
@section('style')
    <link rel="stylesheet" href="{{ asset('asset/frontend/css/uikit.min.css') }}" />
@endsection
@section('content')
    <section>
        <section class="single">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <h2 class="text-white">Lorem ipsum dolor sit amet consectetur</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore veniam voluptatem fugiat qui
                            architecto dicta sapiente omnis beatae eos inventore.</p>

                        <div class="single-title">
                            <p>No Rating (0 Reviews) 5 User Enrolled</p>
                            <p>Created by: Meherun Nesa Last Updated: 22nd May 2022 Bangla</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="product-learn-block shadow">
                            <form action="{{ route('user.quiz.store', $id) }}" method="POST">
                                @csrf
                                @foreach ($data as $key => $item)
                                    <div class="py-3">
                                        <h5 class="product-learn-heading">{{ $key + 1 }}.{{ $item->ques }}</h5>
                                        <div class="row">
                                            <div class="col-md-3 my-1">
                                                <div class="product-learn-dtl">
                                                    <ul>
                                                        <li>
                                                            <input type="radio" value="a"
                                                                name="answer[{{ $item->id }}]"
                                                                id="a-{{ $item->id }}">
                                                            <label for="a-{{ $item->id }}">{{ $item->a }}</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-3 my-1">
                                                <div class="product-learn-dtl">
                                                    <ul>
                                                        <li>
                                                            <input type="radio" value="b"
                                                                name="answer[{{ $item->id }}]"
                                                                id="b-{{ $item->id }}">
                                                            <label for="b-{{ $item->id }}">{{ $item->b }}</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-3 my-1">
                                                <div class="product-learn-dtl">
                                                    <ul>
                                                        <li>
                                                            <input type="radio" value="c"
                                                                name="answer[{{ $item->id }}]"
                                                                id="c-{{ $item->id }}">
                                                            <label for="c-{{ $item->id }}">{{ $item->c }}</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-3 my-1">
                                                <div class="product-learn-dtl">
                                                    <ul>
                                                        <li>
                                                            <input type="radio" value="d"
                                                                name="answer[{{ $item->id }}]"
                                                                id="d-{{ $item->id }}">
                                                            <label for="d-{{ $item->id }}">{{ $item->d }}</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    @section('script')
        <script></script>
    @endsection
@endsection
