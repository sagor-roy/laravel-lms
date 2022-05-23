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
    <div class="container">
        <table class="table table-bordered text-center">
            <thead>
                <tr>
                    <th>Purchase History</th>
                    <th>Enroll On</th>
                    <th>Payment Mode</th>
                    <th>Total Price</th>
                    <th>Payment Statuss</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="d-flex">
                        <img src="./img/course/1.png" width="120" alt="">
                        <a class="ms-2" href="">Lorem ipsum dolor sit amet.</a>
                    </td>
                    <td>20-2-2022</td>
                    <td>Bkash</td>
                    <td>&#2547; 5000</td>
                    <td>
                        <span class="badge bg-warning">pending</span>
                    </td>
                    <td>
                        <a href="" class="btn btn-outline-primary">invoice</a>
                    </td>
                </tr>
                <tr>
                    <td class="d-flex">
                        <img src="./img/course/1.png" width="120" alt="">
                        <a class="ms-2" href="">Lorem ipsum dolor sit amet.</a>
                    </td>
                    <td>20-2-2022</td>
                    <td>Bkash</td>
                    <td>&#2547; 5000</td>
                    <td>
                        <span class="badge bg-warning">pending</span>
                    </td>
                    <td>
                        <a href="" class="btn btn-outline-primary">invoice</a>
                    </td>
                </tr>
                <tr>
                    <td class="d-flex">
                        <img src="./img/course/1.png" width="120" alt="">
                        <a class="ms-2" href="">Lorem ipsum dolor sit amet.</a>
                    </td>
                    <td>20-2-2022</td>
                    <td>Bkash</td>
                    <td>&#2547; 5000</td>
                    <td>
                        <span class="badge bg-warning">pending</span>
                    </td>
                    <td>
                        <a href="" class="btn btn-outline-primary">invoice</a>
                    </td>
                </tr>
                <tr>
                    <td class="d-flex">
                        <img src="./img/course/1.png" width="120" alt="">
                        <a class="ms-2" href="">Lorem ipsum dolor sit amet.</a>
                    </td>
                    <td>20-2-2022</td>
                    <td>Bkash</td>
                    <td>&#2547; 5000</td>
                    <td>
                        <span class="badge bg-warning">pending</span>
                    </td>
                    <td>
                        <a href="" class="btn btn-outline-primary">invoice</a>
                    </td>
                </tr>
                <tr>
                    <td class="d-flex">
                        <img src="./img/course/1.png" width="120" alt="">
                        <a class="ms-2" href="">Lorem ipsum dolor sit amet.</a>
                    </td>
                    <td>20-2-2022</td>
                    <td>Bkash</td>
                    <td>&#2547; 5000</td>
                    <td>
                        <span class="badge bg-warning">pending</span>
                    </td>
                    <td>
                        <a href="" class="btn btn-outline-primary">invoice</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
@endsection