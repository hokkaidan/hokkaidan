<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shipping data</title>
    <link rel="stylesheet" href="./styles/checkout.css">
    <!-- font Awesome line here .... -->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
</head>

<body>


    <div id="mainbox">
        <div id="tittle">
            <div class="header">
                <img src="https://cdn.shopify.com/s/files/1/1743/7443/files/website_logo.png?37115" height="45px"
                    width="150px" />
            </div>
            <div id="cart">
                <button id="cart1">Cart</button>
                <p id="font"> > Information > Shipping > Payment</p>
            </div>


            <div>
                <form class="myform">
                   <div class="crud ">
                       <h4 style="color: grey; font-weight: 500; font-size: 17px;">Contact</h4>
                       <h5 class="contact"></h5>
                       <h4 style="color: grey; font-weight: 500; font-size: 12px;"><a style="text-decoration: none;" href="./checkout.html">Change</a>  </h4>

                   </div>
                  
                   <div class="crud">
                       <h4 style="color: grey; font-weight: 500; font-size: 17px;">Ship to</h4>
                       <h5 class="address"></h5>
                       <h4 style="color: grey; font-weight: 500; font-size: 12px;"><a style="text-decoration: none;" href="./checkout.html">Change</a>  </h4>

                   </div>
                  

                    <div id="return_to_cart">
                        <button id="cart1"><a href="./soOnCart.html" style="text-decoration: none;"> < Return to cart</a></button>
                        <input style="margin-top: 150px;"   type="submit" value="Continue to Payment" id="shop"></input>
                    </div>
                    <hr>

                    <button id="cart1">Refund policy</button>
                    <button id="cart1">Shipping policy</button>
                    <button id="cart1">Privacy policy</button>
                    <button id="cart1">Terms of service</button>
                </form>
            </div>
        </div>
        <div id="right">
            <div class="allItems">
            </div>
            <div>
                <input id="gift" type="text" placeholder="Gift card and discount code">

                <button style="background-color: lightgrey; padding: 10px 15px; border-radius: 7px; margin-left: 5px; color: white; font-weight: bold; font-size: 15px; border: transparent;" id="apply">Apply</button>
            </div>
            <div class="hrShip"></div>
            <div class="subTotal">
                <h5 style="color: grey; font-weight: 500; font-size: 17px;">Subtotal</h5>
                <h5 class="addPrice"></h5>
            </div>


            <div class="shipping">
                <h5 style="color: grey; font-weight: 500; font-size: 17px;">Shipping <i class="fas fa-question-circle"></i></h5>
                <h5>Free</h5>
            </div>
            <div class="hrShip"></div>
            <div class="subTotal">
                <h5 style="color: grey; font-weight: 500; font-size: 17px;">Total <br></h5>
                <h3 class="Total"></h3>
            </div>


        </div>

        <script src="./script/checkout.js">
        </script>

</body>

</html>