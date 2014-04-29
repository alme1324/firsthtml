function checkInput(){
	var userName = document.getElementById("name");
	var surName = document.getElementById("Surname");
	var email = document.getElementById("e_Mail");
	var onlyLetters = /^[A-Za-z]+$/;
	var values= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


}
function checkUserName(){
	var userName = document.getElementById("name");
	var lblName = document.getElementById("lblName");
	var onlyLetters = /^[A-Za-z]+$/;
	if (userName.length !=0 && userName.value.match(onlyLetters))
	{
		lblName.style.color = 'green';
	}

	else{
		lblName.style.color = 'red';
	}
	
}

function checkSurName(){
	var surName = document.getElementById("Surname");
	var lblSurName = document.getElementById("lblSurName");
	var onlyLetters = /^[A-Za-z]+$/;
	if(surName.length !=0 && surName.value.match(onlyLetters)){
		lblSurName.style.color = 'green';
	}
	else{
		lblSurName.style.color = 'red';
	}
}

function checkEMail(){
	var email = document.getElementById("e_Mail");
	var lblemail= document.getElementById("lblE_Mail");
	var values= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(values.test(email.value)){
		lblemail.style.color = "green";
	}
	else{
		lblemail.style.color = "red";
	}
}


function checkPassword(){
	var password = document.getElementById("password");
	var lblPassword = document.getElementById("lblpass");
	
	if(password.length < 6){
		lblPassword.style.color = "red";
	}
	
	esle{
		lblPassword.style.color = "green";
	}
	
}

