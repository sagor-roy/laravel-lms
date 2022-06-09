@extends('layouts.frontend')

@section('content')
<section class="single">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h2>Invoice</h2>
            </div>
        </div>
    </div>
</section>

<section class="mt-4">
    <div class="container">
        <table width="100%" align="center" cellpadding="6" cellspacing="0" border="0" bgcolor="#fff" style="border: 1px solid #D8D8D8;">
            <tbody><tr>
                <td width="100%">
                    <table width="100%" border="0" bgcolor="#FFEFEF" cellpadding="10px" cellspacing="0">
                        <tbody>
                            <tr>
                              <td align="left">
                                <img style="float: left;" src="images/logo.png" alt="">
                              </td>
                              <td align="right">
                                <h3 style="font-size:45px; font-weight:700; text-transform: uppercase; color:#363B45; margin:0; padding:0;">INVOICE</h3>
                              </td>
                              </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        
            <tr>
                <td width="100%">
                    <table width="100%" border="0" cellpadding="10px" cellspacing="0">
                        <tbody><tr>
                            <td width="45%">
                                <h3 style="font-size:18px; font-weight:500; color:#fff; margin:0; padding:8px; background-color: #03204F; text-align: center;">Order# {{$order->transaction_id}}</h3>
                                <p style="font-size:13px; font-weight:400; color:#666666; margin:8px 0 0 20px;">Order Status 
                                @if ($order->order_status == 'complete')
                                <span class="badge bg-success">complete</span>
                                @elseif ($order->order_status == 'processing')
                                <span class="badge bg-warning">processing</span>
                                @elseif ($order->order_status == 'cancel')
                                <span class="badge bg-danger">cancel</span>
                                @endif
                                </p>
                                <p style="font-size:13px; font-weight:400; color:#666666; margin:8px 0 0 20px;">Order Date {{$order->created_at, 'Y-m-d'}}</p>
                            </td> 
                            <td width="20%">&nbsp;</td>
                            <td width="35%">
                                <a class="mx-2" href="{{route('user.history')}}" style="font-size:15px; font-weight:400; color:#fff; margin:0; padding: 6px 10px; background-color: #c40700; border-radius: 3px;display: flex;align-items: center;float: right;"><img src="images/ico1.png" alt="" style="margin-left: 8px;"> Back</a> 
                                <a href="#" style="font-size:15px; font-weight:400; color:#fff; margin:0; padding: 6px 10px; background-color: #03204F; border-radius: 3px;display: flex;align-items: center;float: right;"><img src="images/ico1.png" alt="" style="margin-right: 8px;"> Print</a>
                                <h3 style="font-size:22px; font-weight:500; color:#000; margin: 40px 0 0; padding:0;">Payment Information</h3>
                                <p style="font-size:14px; font-weight:400; color:#000; margin:10px 0 0;">Payment Status 
                                @if ($order->status == 'Complete')
                                <span class="badge bg-success">complete</span>
                                @elseif ($order->status == 'Failed')
                                <span class="badge bg-danger">failed</span>
                                @elseif ($order->status == 'Canceled')
                                <span class="badge bg-danger">cancel</span>
                                @endif
                                </p>
                                <p style="font-size:14px; font-weight:400; color:#000; margin:10px 0 0;">Payment Amount : <strong>{{number_format($order->amount)}}&#2547;</strong></p>
                                <p style="font-size:14px; font-weight:400; color:#000; margin:10px 0 0;">Payment Mehtod <span class="badge bg-success">{{$order->method}}</span></p>
                            </td>
                        </tr>
                    </tbody></table>
                </td>       
            </tr>
        
            <tr>
                <td width="100%">&nbsp;</td>
            </tr>
        
            <tr>
                <td width="100%">
                    <table width="100%" border="0" cellpadding="10px" cellspacing="0">
                        <tbody><tr>
                            <td width="45%">
                                <h3 style="font-size:16px; font-weight:400; color:#03204F; margin:0; padding:6px 10px; background-color: #FFD2C8">User Information</h3>
                                <p style="font-size:14px; font-weight:400; color:#000; margin:12px 0 0;"><img src="images/user-ico.png" style="margin-right: 8px; float: left;" alt=""> {{$order->user->name}}</p>
                                <p style="font-size:14px; font-weight:400; color:#000; margin:12px 0 0;"><img src="images/map-ico2.png" style="margin-right: 8px; float: left;" alt=""> {{$order->user->address}}</p>
                                <p style="font-size:14px; font-weight:400; color:#000; margin:12px 0 0;"><img src="images/call-ico2.png" style="margin-right: 8px; float: left;" alt=""> {{$order->user->mobile}}</p>
                                <p style="font-size:14px; font-weight:400; color:#000; margin:12px 0 0;"><img src="images/mail-ico2.png" style="margin-right: 8px; float: left;" alt=""> {{$order->user->email}}</p>                        
                            </td>
                        </tr>
                    </tbody></table>
                </td>        
            </tr>
        
            <tr>
                <td width="100%">&nbsp;</td>
            </tr>
        
            <tr>
                <td width="100%">
                    <table width="100%" border="0" cellpadding="10px" cellspacing="0">
                        <thead>
                            <tr bgcolor="#E6E6E6">
                                <th >Course</th>
                                <th>Price</th>
                                <th>Qty.</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <td style="display: flex; align-items: center; border-bottom: 1px solid #A6A6A5;"><img src="images/pro1.png" alt="" style="float: left; margin-right: 12px;"> <p style="font-size:14px; font-weight:400; color:#03204F; margin:0;">@foreach ($order_item as $item) {{$loop->iteration}}. {{$item->course->title}}, <br>  @endforeach</p></td>
                                <td bgcolor="#E6E6E6" style="border-bottom: 1px solid #A6A6A5;">{{number_format($order->amount)}}&#2547;</td>
                                <td style="border-bottom: 1px solid #A6A6A5;">{{count($order_item)}}</td>
                                <td bgcolor="#E6E6E6" style="border-bottom: 1px solid #A6A6A5;">{{number_format($order->amount)}}&#2547;</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </td>       
            </tr>
        
            <tr>
                <td width="100%">
                    <table width="100%" border="0" cellpadding="10px" cellspacing="0">
                        <tbody><tr>
                            <td width="60%" style="border-bottom: 1px solid #03204F;"></td>
                            <td width="40%" style="border-bottom: 1px solid #03204F;">
                                <table width="100%" border="0" cellpadding="5px">
                                    <tbody><tr>
                                        <th align="left">Sub Total</th>
                                        <th align="right">{{number_format($order->amount)}}&#2547;</th>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                        <tr>
                            <td width="60%"></td>
                            <td width="40%" style="background-color: #03204F;">
                                <table width="100%" border="0" cellpadding="5px">
                                    <tbody><tr>
                                        <th align="center" style="color:#fff">Total</th>
                                        <th align="right" style="color:#fff">{{number_format($order->amount)}}&#2547;</th>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                    </tbody></table>
                </td>       
            </tr>
            
            <tr>
                <td width="100%">
                    <table width="100%" border="0" bgcolor="#FFEFEF" cellpadding="10px" cellspacing="0">
                        <tbody>
                            <tr>
                              <td width="40%" bgcolor="#03204F">
                                <h3 style="font-size:15px; font-weight:400; color:#fff; margin:0; padding:0;">Thank you for your Purchase</h3>
                              </td>
                              <td width="60%">&nbsp;</td>
                              </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody></table>
    </div>
</section>
@endsection