$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

function validatename()
{
	var name = document.getElementById("commentname").value;
	if (name.length == 0)
	{
		produceprompt("Name is Required", "commentnameprompt", "red");
		return false;
	}
    else
    {
    	produceprompt("Welcome " + name, "commentnameprompt", "green");
    	return true;
    }
}

function validateemail()
{
	var email = document.getElementById("commentemail").value;
	if (email.length == 0)
	{
		produceprompt("Email is Required", "commentemailprompt", "red");
		return false;
	}
	if (!email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/))
	{
		produceprompt("Email is Invalid", "commentemailprompt", "red");
		return false;
	}
	produceprompt("Valid Email Address", "commentemailprompt", "green");
	return true;
}

function validatepassword()
{
	var password = document.getElementById("commentpassword").value;
	if (password.length == 0)
	{
		produceprompt("Password is Required", "commentpasswordprompt", "red");
		return false;
	}
	if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/))
	{
		produceprompt("Password is Invalid", "commentpasswordprompt", "red");
		return false;
	}
	produceprompt("Valid Password", "commentpasswordprompt", "green");
	return true;
}

function validatedescription()
{
	var description = document.getElementById("commentdescription").value;
	var required = 100;
	var left = required - description.length;
	if (left > 0)
	{
		produceprompt(left + " characters required", "commentdescriptionprompt", "red");
		return false;
	}
	produceprompt("Thank You for the Description", "commentdescriptionprompt", "green");
	return true;
}

function validatecommentform()
{
	if(!validatename() || !validateemail() || !validatedescription() || !validatepassword())
	{
		jsShow("commentformprompt");
		produceprompt("Form Must Be Valid in Order to Submit", "commentformprompt", "red");
		setTimeout(function(){jsHide("commentformprompt")}, 2000);
	}
	else
	{
		var Formdata = {
			cdesc :  document.getElementById("commentdescription").value,
			cpassword : document.getElementById("commentpassword").value,
			cemail : document.getElementById("commentemail").value,
			cname : document.getElementById("commentname").value
		}
		console.log(Formdata);
		$.post( "http://localhost:8000/register", Formdata, function (data) {window.location.replace("http://localhost:8000/login")})
	}
}

function jsShow(id)
{
	document.getElementById(id).style.display = "block";

}

function jsHide(id)
{
	document.getElementById(id).style.display = "none";
}

function produceprompt(message, promptlocation, color)
{
	document.getElementById(promptlocation).innerHTML = message;
	document.getElementById(promptlocation).style.color = color;
}
