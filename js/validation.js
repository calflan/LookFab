function validateCardNum(){
	var cardNum=document.getElementById('cardNumber').value;
	if(cardNum == ""){
		// please enter a card number
		document.getElementById('cardNumber').style.borderColor = "red";
		return false;
	} else{
		document.getElementById('cardNumber').style.borderColor = "green";
 	}
 	if (/^[0-9]+$/.test(document.getElementById("cardNumber").value)) {
	 	document.getElementById('cardNumber').style.borderColor = "green";
 	} else{
		// Numbers only please!
	 	document.getElementById('cardNumber').style.borderColor = "red";
	 	return false;
 	}
 	if(cardNum.length <=13){
		// Please enter a valid card number (minimum 14 numbers)
		document.getElementById('cardNumber').style.borderColor = "red";
		return false;
	} else{
		document.getElementById('cardNumber').style.borderColor = "green";
	}
}

function validateNameOnCard(){
	var nameOnCard=document.getElementById('nameOnCard').value;
	if(nameOnCard == ""){
		// please enter a card number
		document.getElementById('nameOnCard').style.borderColor = "red";
		return false;
	} else{
		document.getElementById('nameOnCard').style.borderColor = "green";
 	}
 	if (/^[0-9]+$/.test(document.getElementById("nameOnCard").value)) {
		// No numbers please!
	 	document.getElementById('nameOnCard').style.borderColor = "red";
		return false;
 	} else{
	 	document.getElementById('nameOnCard').style.borderColor = "green";
 	}
 	if(nameOnCard.length <=9){
		// Please enter a valid card number (minimum 14 numbers)
		document.getElementById('nameOnCard').style.borderColor = "red";
		return false;
	} else{
		document.getElementById('nameOnCard').style.borderColor = "green";
	}
}

function validateExpMonth(){
	var expMonth=document.getElementById('expMonth').value;
	if(expMonth == ""){
		// please enter the expiry date
		document.getElementById('expMonth').style.borderColor = "red";
		return false;
	} else{
		document.getElementById('expMonth').style.borderColor = "green";
 	}
 	if (/^[0-9]+$/.test(document.getElementById("expMonth").value)) {
	 	document.getElementById('expMonth').style.borderColor = "green";
 	} else{
		// Numbers only please!
	 	document.getElementById('expMonth').style.borderColor = "red";
	 	return false;
 	}
 	if(expMonth.length < 2 || expMonth.length > 2){
		// Please enter a valid card number (minimum 14 numbers)
		document.getElementById('expMonth').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('expMonth').style.borderColor = "green";
	}
	if(expMonth <= 0 || expMonth > 12){
		// Please enter a valid card number (minimum 14 numbers)
		document.getElementById('expMonth').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('expMonth').style.borderColor = "green";
	}
}

function validateExpYear(){
	var expYear=document.getElementById('expYear').value;
	if(expYear == ""){
		// please enter the expiry date
		document.getElementById('expYear').style.borderColor = "red";
		return false;
	} else{
		document.getElementById('expYear').style.borderColor = "green";
 	}
 	if (/^[0-9]+$/.test(document.getElementById("expYear").value)) {
	 	document.getElementById('expYear').style.borderColor = "green";
 	} else{
		// Numbers only please!
	 	document.getElementById('expYear').style.borderColor = "red";
	 	return false;
 	}
 	if(expYear.length <= 3 || expYear.length > 4){
		// Please enter a valid card number (minimum 14 numbers)
		document.getElementById('expYear').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('expYear').style.borderColor = "green";
	}
	if(expYear < 2017 || expYear > 2030){
		// Please enter a valid card number (minimum 14 numbers)
		document.getElementById('expYear').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('expYear').style.borderColor = "green";
	}
}

function validateCV2(){
	var cardCV2=document.getElementById('cardCV2').value;
	if(cardCV2 == ""){
		// please enter a card number
		document.getElementById('cardCV2').style.borderColor = "red";
		return false;
	} else{
		document.getElementById('cardCV2').style.borderColor = "green";
 	}
 	if (/^[0-9]+$/.test(document.getElementById("cardCV2").value)) {
	 	document.getElementById('cardCV2').style.borderColor = "green";
 	} else{
		// Numbers only please!
	 	document.getElementById('cardCV2').style.borderColor = "red";
	 	return false;
 	}
 	if(cardCV2.length <= 2 || cardCV2.length > 3){
		// Please enter a valid card number (minimum 14 numbers)
		document.getElementById('cardCV2').style.borderColor = "red";
		return false;
	} else{
		document.getElementById('cardCV2').style.borderColor = "green";
	}
}
