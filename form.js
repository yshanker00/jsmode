/* 
Implement a registration page and store details of each 
registered user in local storage.
Username, password,  mobile number and email are the fields
Make sure,  unique emails should be stored
 */

var nameField = document.getElementById("name").value;
var emailField = document.getElementById("email").nodeValue;
var feedbackField = document.getElementById("feedback").value;


var saveButton = document.getElementById("saveButton");
var retrieveButton = document.getElementById("retrieveButton");

function saveResponses() {
	localStorage.setItem("name", nameField.value);
	localStorage.setItem("email", emailField.value);
   	localStorage.setItem("feedback", feedbackField.value);
}

saveButton.addEventListener("click", saveResponses);


function retrieveResponses() {
	nameField.value = localStorage.getItem("name");
   	emailField.value = localStorage.getItem("email");
    	feedbackField.value = localStorage.getItem("feedback");
}

console.log(nameField);

retrieveButton.addEventListener("click", function(e) { e.preventDefault(); retrieveResponses(); });

