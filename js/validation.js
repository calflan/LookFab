function validateForm() {
	var userInput = document.forms["form"]["cardNumber"].value;
	if (userInput == "") {
		alert("Required!");
		return false;
	}
}