<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use App\Library\SslCommerz\SslCommerzNotification;
use App\Models\OrderItem;
use App\Models\Orders;
use App\Notifications\CourseEnrolledNotification;
use App\Notifications\EnrolledNotification;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Omnipay\Omnipay;

class SslCommerzPaymentController extends Controller
{

    private $gateway;

    public function __construct()
    {
        $this->gateway = Omnipay::create('PayPal_Rest');
        $this->gateway->setClientId('AS_pnPQbMySPHAQ-sYwIH087-eU7gVNwfR665HqThDDLemFE6mtRmT2gmd8JqI6gbw7FzaiNJUX9pSif');
        $this->gateway->setSecret('EHdfKPbyPifwUpVDwYDPNFo4cJpyRURSSiulOTK8u2Xp-pAea810j8XK5hnnBLvTu5tJMsSz9rT71wM-');
        $this->gateway->setTestMode(true);
    }

    public function exampleEasyCheckout()
    {
        return view('exampleEasycheckout');
    }

    public function exampleHostedCheckout()
    {
        return view('exampleHosted');
    }

    public function index(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'method'=>'required'
        ],
        ['method.required' => 'Please select your payment method']
    );

        if($validator->fails()) {
            return redirect()->back()->withErrors(Toastr::error($validator->errors()->all()[0]))->withInput();
        }

        if ($request->input('method') == 'ssl') {
            $post_data = array();
            $post_data['total_amount'] = $request->input('amount'); # You cant not pay less than 10
            $post_data['currency'] = "BDT";
            $post_data['tran_id'] = uniqid(); // tran_id must be unique
    
            # CUSTOMER INFORMATION
            $post_data['cus_name'] = 'Customer Name';
            $post_data['cus_email'] = 'customer@mail.com';
            $post_data['cus_add1'] = 'Customer Address';
            $post_data['cus_add2'] = "";
            $post_data['cus_city'] = "";
            $post_data['cus_state'] = "";
            $post_data['cus_postcode'] = "";
            $post_data['cus_country'] = "Bangladesh";
            $post_data['cus_phone'] = '8801XXXXXXXXX';
            $post_data['cus_fax'] = "";
    
            # SHIPMENT INFORMATION
            $post_data['ship_name'] = "Store Test";
            $post_data['ship_add1'] = "Dhaka";
            $post_data['ship_add2'] = "Dhaka";
            $post_data['ship_city'] = "Dhaka";
            $post_data['ship_state'] = "Dhaka";
            $post_data['ship_postcode'] = "1000";
            $post_data['ship_phone'] = "";
            $post_data['ship_country'] = "Bangladesh";
    
            $post_data['shipping_method'] = "NO";
            $post_data['product_name'] = "Computer";
            $post_data['product_category'] = "Goods";
            $post_data['product_profile'] = "physical-goods";
    
            # OPTIONAL PARAMETERS
            $post_data['value_a'] = "ref001";
            $post_data['value_b'] = "ref002";
            $post_data['value_c'] = "ref003";
            $post_data['value_d'] = "ref004";
    
            #Before  going to initiate the payment order status need to insert or update as Pending.
            $order_id = DB::table('orders')
                    ->insertGetId([
                    'user_id' => Auth::user()->id,
                    'amount' => $post_data['total_amount'],
                    'method' => 'ssl',
                    'status' => 'Pending',
                    'order_status' => 'processing',
                    'transaction_id' => $post_data['tran_id'],
                    'currency' => $post_data['currency'],
                    'created_at' => date("Y-m-d H:i:s"),
                    'updated_at' => date("Y-m-d H:i:s"),
                ]);

                $cart = \session()->has('cart') ? \session()->get('cart') : [];
                foreach ($cart as $item) {
                    OrderItem::create([
                        'user_id' => Auth::user()->id,
                        'order_id' => $order_id,
                        'course_id' => $item['id']
                    ]);
                }
    
            $sslc = new SslCommerzNotification();
            # initiate(Transaction Data , false: Redirect to SSLCOMMERZ gateway/ true: Show all the Payement gateway here )
            $payment_options = $sslc->makePayment($post_data, 'hosted');
            if (!is_array($payment_options)) {
                print_r($payment_options);
                $payment_options = array();
            }
        } else {
            $amount = $request->input('amount') / 89;
            $dollar = number_format($amount, 2);
            $response = $this->gateway->purchase(array(
                'amount' => $dollar,
                'currency' => 'USD',
                'returnUrl' => url('/paypal/success'),
                'cancelUrl' => url('/papal/error'),
            ))->send();

            if ($response->isRedirect()) {
                // redirect to offsite payment gateway
                $response->redirect();
            } elseif ($response->isSuccessful()) {
                // payment was successful: update database
                print_r($response);
            } else {
                // payment failed: display message to customer
                echo $response->getMessage();
            }
        }
    }

    public function paypalSuccess(Request $request) {
        if ($request->input('paymentId') && $request->input('PayerID')) {
            $response = $this->gateway->completePurchase(array(
                'payer_id' => $request->input('paymentId'),
                'transactionReference' => $request->input('PayerID')
            ))->send();

            if ($response->isSuccessful()) {
                $attr = $response->getData();
                $id = Orders::create([
                    'user_id' => Auth::user()->id,
                    'payer_id' => $attr['payer']['payer_ifo']['payer_id'],
                    'amount' => $attr['transactions'][0]['amount']['total'],
                    'status' => $attr['state'],
                    'transaction_id' => $attr['id'],
                    'currency' => 'USD',
                    'method' => 'paypal',
                ]);

                $cart = \session()->has('cart') ? \session()->get('cart') : [];
                foreach ($cart as $item) {
                    OrderItem::create([
                        'order_id' => $id,
                        'course_id' => $item['id']
                    ]);
                }
                Session::forget('cart');
                Toastr::success('Transaction is successfully Completed','Thank you');
                return redirect()->route('user.history');
            } else {
                return $response->getMessage(); 
            }
        } else {
            return "Payment Declined";
        }
    }


    public function success(Request $request)
    {
        echo "Transaction is Successful";

        $tran_id = $request->input('tran_id');
        $amount = $request->input('amount');
        $currency = $request->input('currency');

        $sslc = new SslCommerzNotification();

        #Check order status in order tabel against the transaction id or order id.
        $order_detials = DB::table('orders')
            ->where('transaction_id', $tran_id)
            ->select('transaction_id', 'status', 'currency', 'amount')->first();

        if ($order_detials->status == 'Pending') {
            $validation = $sslc->orderValidate($request->all(), $tran_id, $amount, $currency);

            if ($validation == TRUE) {
                /*
                That means IPN did not work or IPN URL was not set in your merchant panel. Here you need to update order status
                in order table as Processing or Complete.
                Here you can also sent sms or email for successfull transaction to customer
                */
                $update_product = DB::table('orders')
                    ->where('transaction_id', $tran_id)
                    ->update(['status' => 'Complete']);
                    $cart = \session()->has('cart') ? \session()->get('cart') : [];
                    foreach ($cart as $item) {
                        auth()->user()->notify(new EnrolledNotification($item['title']));
                        auth()->user()->notify(new CourseEnrolledNotification($item));
                    }
                Session::forget('cart');
                Toastr::success('Transaction is successfully Completed','Thank you');
                return redirect()->route('user.history');
            } else {
                /*
                That means IPN did not work or IPN URL was not set in your merchant panel and Transation validation failed.
                Here you need to update order status as Failed in order table.
                */
                $update_product = DB::table('orders')
                    ->where('transaction_id', $tran_id)
                    ->update(['status' => 'Failed']);
                echo "validation Fail";
            }
        } else if ($order_detials->status == 'Processing' || $order_detials->status == 'Complete') {
            /*
             That means through IPN Order status already updated. Now you can just show the customer that transaction is completed. No need to udate database.
             */
            echo "Transaction is successfully Completed";
        } else {
            #That means something wrong happened. You can redirect customer to your product page.
            echo "Invalid Transaction";
        }


    }

    public function fail(Request $request)
    {
        $tran_id = $request->input('tran_id');

        $order_detials = DB::table('orders')
            ->where('transaction_id', $tran_id)
            ->select('transaction_id', 'status', 'currency', 'amount')->first();

        if ($order_detials->status == 'Pending') {
            $update_product = DB::table('orders')
                ->where('transaction_id', $tran_id)
                ->update(['status' => 'Failed']);
                Toastr::error('Transaction is Failed');
                return redirect()->route('home');
        } else if ($order_detials->status == 'Processing' || $order_detials->status == 'Complete') {
            echo "Transaction is already Successful";
        } else {
            echo "Transaction is Invalid";
        }

    }

    public function cancel(Request $request)
    {
        $tran_id = $request->input('tran_id');

        $order_detials = DB::table('orders')
            ->where('transaction_id', $tran_id)
            ->select('transaction_id', 'status', 'currency', 'amount')->first();

        if ($order_detials->status == 'Pending') {
            $update_product = DB::table('orders')
            ->where('transaction_id', $tran_id)
            ->update(['status' => 'Canceled']);
            Toastr::error('Transaction is Cancel');
            return redirect()->route('home');
        } else if ($order_detials->status == 'Processing' || $order_detials->status == 'Complete') {
            echo "Transaction is already Successful";
        } else {
            echo "Transaction is Invalid";
        }


    }

    public function ipn(Request $request)
    {
        #Received all the payement information from the gateway
        if ($request->input('tran_id')) #Check transation id is posted or not.
        {

            $tran_id = $request->input('tran_id');

            #Check order status in order tabel against the transaction id or order id.
            $order_details = DB::table('orders')
                ->where('transaction_id', $tran_id)
                ->select('transaction_id', 'status', 'currency', 'amount')->first();

            if ($order_details->status == 'Pending') {
                $sslc = new SslCommerzNotification();
                $validation = $sslc->orderValidate($request->all(), $tran_id, $order_details->amount, $order_details->currency);
                if ($validation == TRUE) {
                    /*
                    That means IPN worked. Here you need to update order status
                    in order table as Processing or Complete.
                    Here you can also sent sms or email for successful transaction to customer
                    */
                    $update_product = DB::table('orders')
                        ->where('transaction_id', $tran_id)
                        ->update(['status' => 'Processing']);

                    echo "Transaction is successfully Completed";
                } else {
                    /*
                    That means IPN worked, but Transation validation failed.
                    Here you need to update order status as Failed in order table.
                    */
                    $update_product = DB::table('orders')
                        ->where('transaction_id', $tran_id)
                        ->update(['status' => 'Failed']);

                    echo "validation Fail";
                }

            } else if ($order_details->status == 'Processing' || $order_details->status == 'Complete') {

                #That means Order status already updated. No need to udate database.

                echo "Transaction is already successfully Completed";
            } else {
                #That means something wrong happened. You can redirect customer to your product page.

                echo "Invalid Transaction";
            }
        } else {
            echo "Invalid Data";
        }
    }

}
