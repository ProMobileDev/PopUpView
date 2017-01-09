//popUp.html Javascript file

//these provide a pop-up for the user to interact with.

//alert() displays what is in the parentheses
alert("Hello World");

//propmt() allows the user to input a value
function input() {
var input = prompt("Hello World", "Name");
document.getElementById("prompt").innerHTML = "Hello " + input;
};

//confirm() poses the question, ok or cancel
/*this conditional take the undefined x, sets the condition to be any 
button press with the bool "true" and them prints x in the Id "Confirm"*/
function choice() {
var x;
if(confirm("Is this yes or no?") == true) {
	x = "Ok is confirmed";
}
else {
	x = "Cancel is confirmed";
}
document.getElementById("confirm").innerHTML = x;
};

//alert("Hello\n World") breaks it into two lines
//this makes 4 lines
function lnbr () {
alert(" line 1\n line 2\n line 3\n line 4");
};