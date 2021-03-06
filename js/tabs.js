/* --------------------------------- *
 * Author: Calum James Flanagan      *
 * Institution: Edge Hill University *
 * --------------------------------- */


document.getElementById('main').style.display='';
document.getElementById('cardholderAddr').style.display='';
document.getElementById('submitBtn').style.display='';
document.getElementById('orderSummary').style.display='';
document.getElementById('cardholderMain').style.display='none';
document.getElementById('cardButton').style.backgroundColor='#28bdb3';
/*
*
* The following controls the section concerning the payment options.
*
*/

// Make Card form appear and paypal/alipay disappear, when user clicks cardButton.
document.getElementById('cardForm').style.display='';
document.getElementById('cardButton').onclick=function(){

  document.getElementById('cardButton').style.backgroundColor='#28bdb3';
  document.getElementById('paypalButton').style.backgroundColor='transparent';
  document.getElementById('alipayButton').style.backgroundColor='transparent';

  document.getElementById('main').style.display='';
  document.getElementById('cardholderAddr').style.display='';
  document.getElementById('submitBtn').style.display='';
  document.getElementById('orderSummary').style.display='';
  document.getElementById('cardForm').style.display='';

  document.getElementById('cardholderMain').style.display='none';
  document.getElementById('paypal').style.display='none';
  document.getElementById('alipay').style.display='none';
};

// Make PayPal appear and card form/alipay disappear, when user clicks paypalButton.
document.getElementById('paypal').style.display='none';
document.getElementById('paypalButton').onclick=function(){

  document.getElementById('paypalButton').style.backgroundColor='#28bdb3';
  document.getElementById('cardButton').style.backgroundColor='transparent';
  document.getElementById('alipayButton').style.backgroundColor='transparent';

  document.getElementById('main').style.display='';
  document.getElementById('paypal').style.display='';
  document.getElementById('submitBtn').style.display='';
  document.getElementById('orderSummary').style.display='';

  document.getElementById('cardholderMain').style.display='none';
  document.getElementById('cardholderAddr').style.display='none';
  document.getElementById('cardForm').style.display='none';
  document.getElementById('alipay').style.display='none';
};

// Make AliPay appear and card form/paypal disappear, when user clicks alipayButton.
document.getElementById('alipay').style.display='none';
document.getElementById('alipayButton').onclick=function(){

  //display these items
  document.getElementById('alipayButton').style.backgroundColor='#28bdb3';
  document.getElementById('paypalButton').style.backgroundColor='transparent';
  document.getElementById('cardButton').style.backgroundColor='transparent';

  document.getElementById('main').style.display='';
  document.getElementById('alipay').style.display='';
  document.getElementById('submitBtn').style.display='';
  document.getElementById('orderSummary').style.display='';

  //hide these items
  document.getElementById('cardholderMain').style.display='none';
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

  document.getElementById('newAddrButton').style.backgroundColor='#28bdb3';
  document.getElementById('useDelAddrButton').style.backgroundColor='transparent';

  document.getElementById('cardholderMain').style.display='';
  document.getElementById('cardholderAddr').style.display='';
  document.getElementById('newAddrForm').style.display='';
  document.getElementById('useDeliveryAddr').style.display='none';
};

// Make useDelivery appear and card form/paypal disappear, when user clicks alipayButton.
document.getElementById('useDeliveryAddr').style.display='none';

document.getElementById('useDelAddrButton').onclick=function(){

  document.getElementById('useDelAddrButton').style.backgroundColor='#28bdb3';
  document.getElementById('newAddrButton').style.backgroundColor='transparent';

  document.getElementById('cardholderAddr').style.display='';
  document.getElementById('cardholderMain').style.display='';
  document.getElementById('useDeliveryAddr').style.display='';
  document.getElementById('newAddrForm').style.display='none';
};
