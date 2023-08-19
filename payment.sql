<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Payment - Hok Makeup</title>
    <!-- <link rel="shortcut icon" type="image" href="C:\Users\Ankit Mishra\Downloads\logo.png"> -->
    <link rel="stylesheet" href="./styles/payment.css">
</head>

<body>
    <div id="container">

        <div id="box">

            <div class="topbox">
                <div id="for-img">
                    <img src="https://cdn.shopify.com/s/files/1/1743/7443/files/website_logo.png?36281" alt=""
                        width="80px" height="80px">
                </div>
                <div id="for_edit">
                    <p id="hok-namee">HOK MAKEUP</p>
                    <p class="colorgg">HOK Makeup - #23391111970</p>
                    <h1 id="showtotal" class="totly"></h1>
                </div>
                <p class="marg_top">English ▼</p>
            </div>

            <div id="for_cardd">
                <a href="card.html" class="casss">
                    < Card</a>
                        <p id="contactno."></p>
            </div>

            <div id="for_btom">
                <div id="forpay_br">
                    <p>Pay With Your Saved Card
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ></p>
                    <p class="font12">Access securely with OTP</p>
                </div> <br>
                <p>Add New Card</p>
                <form id="for_frm">
                    <input type="number" placeholder="Card Number" class="for_cardin marg_top">
                    <input type="number" placeholder="Expiry" class="for_cardin marg_top">
                    <input type="text" placeholder="Card Holder's Name" class="for_cardin marg_top">
                    <input type="password" placeholder="CVV" class="for_cardin marg_top">
                </form>
                <input type="checkbox">
                <label>Remember Card</label>
            </div>

            <a href="./congrats.html"><button class="mypaise" id="payBtn">PAYMENT</button></a>

        </div>
    </div>


</body>

</html>


<Script src="./script/checkout.js"></Script>