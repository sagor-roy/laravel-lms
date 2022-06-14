@extends('layouts.backend')

@section('content')
<div class="content-wrapper">
    <div class="page-header">
      <h3 class="page-title">
        Dashboard
      </h3>
    </div>
    <div class="row">
      <div class="col-md-4 grid-margin">
          <div class="card">
              <div class="card-body">
                  <h4 class="card-title mb-0">Users</h4>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="d-inline-block pt-3">
                          <div class="d-md-flex">
                              <h2 class="mb-0">{{$user}}</h2>
                          </div>
                      </div>
                      <div class="d-inline-block">
                        <i class="fas fa-users icon-lg text-primary"></i>                                 
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-md-4 grid-margin">
          <div class="card">
              <div class="card-body">
                  <h4 class="card-title mb-0">Course</h4>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="d-inline-block pt-3">
                          <div class="d-md-flex">
                              <h2 class="mb-0">{{$course}}</h2>
                          </div>
                      </div>
                      <div class="d-inline-block">
                          <i class="fas fa-book text-danger icon-lg"></i>                                    
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-md-4 grid-margin">
          <div class="card">
              <div class="card-body">
                  <h4 class="card-title mb-0">Categories</h4>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="d-inline-block pt-3">
                          <div class="d-md-flex">
                              <h2 class="mb-0">{{$cate}}</h2>
                          </div>
                      </div>
                      <div class="d-inline-block">
                          <i class="fas fa-list-alt text-warning icon-lg"></i>                                    
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-md-4 grid-margin">
          <div class="card">
              <div class="card-body">
                  <h4 class="card-title mb-0">Total Orders</h4>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="d-inline-block pt-3">
                          <div class="d-md-flex">
                              <h2 class="mb-0">{{$to_order}}</h2>
                          </div>
                      </div>
                      <div class="d-inline-block">
                          <i class="fas fa-shopping-cart text-danger icon-lg"></i>                                    
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-md-4 grid-margin">
          <div class="card">
              <div class="card-body">
                  <h4 class="card-title mb-0">Complete Orders</h4>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="d-inline-block pt-3">
                          <div class="d-md-flex">
                              <h2 class="mb-0">{{$com_order}}</h2>
                          </div>
                      </div>
                      <div class="d-inline-block">
                          <i class="fas fa-check-circle text-success icon-lg"></i>                                    
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-md-4 grid-margin">
          <div class="card">
              <div class="card-body">
                  <h4 class="card-title mb-0">Processing Orders</h4>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="d-inline-block pt-3">
                          <div class="d-md-flex">
                              <h2 class="mb-0">{{$pro_order}}</h2>
                          </div>
                      </div>
                      <div class="d-inline-block">
                          <i class="fas fa-box text-info icon-lg"></i>                                    
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-md-4 grid-margin">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title mb-0">Today Orders</h4>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-inline-block pt-3">
                        <div class="d-md-flex">
                            <h2 class="mb-0">{{$today_order}}</h2>
                        </div>
                    </div>
                    <div class="d-inline-block">
                        <i class="fas fa-th-list icon-lg text-warning"></i>                 
                    </div>
                </div>
            </div>
        </div>
    </div>
      <div class="col-md-4 grid-margin">
          <div class="card">
              <div class="card-body">
                  <h4 class="card-title mb-0">This Week Orders</h4>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="d-inline-block pt-3">
                          <div class="d-md-flex">
                              <h2 class="mb-0">{{$week_order}}</h2>
                          </div>
                        </div>
                        <div class="d-inline-block">
                            <i class="fas fa-calendar-alt icon-lg text-primary"></i>                 
                        </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-md-4 grid-margin">
          <div class="card">
              <div class="card-body">
                  <h4 class="card-title mb-0">This Month Orders</h4>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="d-inline-block pt-3">
                          <div class="d-md-flex">
                              <h2 class="mb-0">{{$month_order}}</h2>
                          </div>
                      </div>
                      <div class="d-inline-block">
                        <i class="fas fa-calendar-alt icon-lg text-dark"></i>                 
                    </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-md-4 grid-margin">
          <div class="card">
              <div class="card-body">
                  <h4 class="card-title mb-0">This Years Orders</h4>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="d-inline-block pt-3">
                          <div class="d-md-flex">
                              <h2 class="mb-0">{{$year_order}}</h2>
                          </div>
                      </div>
                      <div class="d-inline-block">
                          <i class="fas fa-calendar-alt text-danger icon-lg"></i>                                    
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-md-4 grid-margin">
          <div class="card">
              <div class="card-body">
                  <h4 class="card-title mb-0">SSLCOMMERZ</h4>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="d-inline-block pt-3">
                          <div class="d-md-flex">
                              <h2 class="mb-0">{{number_format($ssl)}}</h2>
                          </div>
                      </div>
                      <div class="d-inline-block">
                        <i class="fas fa-lira-sign icon-lg text-info"></i>                               
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-md-4 grid-margin">
          <div class="card">
              <div class="card-body">
                  <h4 class="card-title mb-0">Paypal</h4>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="d-inline-block pt-3">
                          <div class="d-md-flex">
                              <h2 class="mb-0">0</h2>
                          </div>
                      </div>
                      <div class="d-inline-block">
                        <i class="fas fa-dollar-sign icon-lg text-warning"></i>                               
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-md-12 grid-margin">
          <div class="card">
              <div class="card-header">
                  <h5 class="card-title m-0">Monthly Registered User in <?php echo date('Y')?></h5>
              </div>
              <div class="card-body">
                <canvas height='100' id="chartjs-bar-chart" class="chartjs-chart"></canvas>
              </div>
          </div>
      </div>
  </div>
  </div>

  @section('script')
  <script>
    let datas = @json($datas);
    "use strict";
    $(document).ready(function () {
        var barChartID = document.getElementById("chartjs-bar-chart").getContext('2d');
        var barChart = new Chart(barChartID, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
                    'Nov',
                    'Dec'
                ],
                datasets: [{
                    label: 'Monthly Registred Users',
                    backgroundColor: ["#506fe4", "#506fe4", "#506fe4", "#506fe4", "#506fe4",
                        "#506fe4", "#506fe4", "#506fe4", "#506fe4", "#506fe4",
                        "#506fe4",
                        "#506fe4", "#506fe4"
                    ],
                    borderColor: ["#506fe4", "#506fe4", "#506fe4", "#506fe4", "#506fe4",
                        "#506fe4", "#506fe4", "#506fe4", "#506fe4", "#506fe4",
                        "#506fe4",
                        "#506fe4", "#506fe4"
                    ],
                    borderWidth: 1,
                    data: datas,
                }]
            },
            options: {


                responsive: true,
                legend: {
                    position: 'top',
                    height: 100
                },
                title: {
                    display: false,
                    text: 'Chart.js Bar Chart'
                },
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        },
                        gridLines: {
                            color: 'rgba(0,0,0,0.05)',
                            lineWidth: 1,
                            borderDash: [0]
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },

                        gridLines: {
                            color: 'rgba(0,0,0,0.05)',
                            lineWidth: 1,
                            borderDash: [0]
                        }
                    }]
                }
            }
        });
    });
</script>
  @endsection
@endsection