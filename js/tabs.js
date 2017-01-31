document.getElementById('main').style.display='none';
document.getElementById('cardholderAddr').style.display='none';
document.getElementById('submitBtn').style.display='none';



/*
*
* The following controls the section concerning the payment options.
*
*/

// Make Card form appear and paypal/alipay disappear, when user clicks cardButton.
document.getElementById('cardForm').style.display='none';

document.getElementById('cardButton').onclick=function(){
  document.getElementById('main').style.display='';
  document.getElementById('cardholderAddr').style.display='';
  document.getElementById('submitBtn').style.display='';
  document.getElementById('cardForm').style.display='';
  document.getElementById('paypal').style.display='none';
  document.getElementById('alipay').style.display='none';
};

// Make PayPal appear and card form/alipay disappear, when user clicks paypalButton.
document.getElementById('paypal').style.display='none';

document.getElementById('paypalButton').onclick=function(){
  document.getElementById('main').style.display='';
  document.getElementById('paypal').style.display='';
  document.getElementById('submitBtn').style.display='';
  document.getElementById('cardholderAddr').style.display='none';
  document.getElementById('cardForm').style.display='none';
  document.getElementById('alipay').style.display='none';
};

// Make AliPay appear and card form/paypal disappear, when user clicks alipayButton.
document.getElementById('alipay').style.display='none';
document.getElementById('alipayButton').onclick=function(){
  document.getElementById('main').style.display='';
  document.getElementById('alipay').style.display='';
  document.getElementById('submitBtn').style.display='';
  document.getElementById('cardholderAddr').style.display='none';
  document.getElementById('cardForm').style.display='none';
  document.getElementById('paypal').style.display='none';
};


/*
*
* The following controls the section concerning the cardholder's delivery address.
*
*/


// Make newAddrForm appear and useDeliveryAddr disappear, when user clicks newAddrButton.

document.getElementById('newAddrForm').style.display='none';
document.getElementById('newAddrButton').onclick=function(){
  document.getElementById('cardholderAddr').style.display='';
  document.getElementById('newAddrForm').style.display='';
  document.getElementById('useDeliveryAddr').style.display='none';
};

// Make useDelivery appear and card form/paypal disappear, when user clicks alipayButton.
document.getElementById('useDeliveryAddr').style.display='none';

document.getElementById('useDelAddrButton').onclick=function(){
  document.getElementById('cardholderAddr').style.display='';
  document.getElementById('newAddrForm').style.display='none';
  document.getElementById('useDeliveryAddr').style.display='';
};

