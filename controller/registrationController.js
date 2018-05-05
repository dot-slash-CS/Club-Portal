var mongoose = require('mongoose');
var bcrypt = require('bcrypt'),
User = mongoose.model('User');

exports.register = (req,res) => {
	var data = {
		cname: req.body.cname,
		cdesc: req.body.cdesc,
		cemail: req.body.cemail,
		cpassword: bcrypt.hashSync(req.body.cpassword, bcrypt.genSaltSync(9))
	}
	console.log("Data before Database Entry", data);

	var validatename = function()
	{
		var cname = req.body.cname;
		if (cname.length == 0)
		{
			return false;
		}
		else
		{
			return true;
		}
	}

	var validatedescription = function()
	{
		var cdesc = req.body.cdesc;
		var required = 100;
		var left = required - cdesc.length;
		if (left > 0)
		{
			return false;
		}
		else
		{
			return true;
		}
	}

	var validateemail = function()
	{
		var cemail = req.body.cemail;
		if (cemail.length == 0)
		{
			return false;
		}
		if (!cemail.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/))
		{
			return false;
		}
		return true;
	}

	var validatepassword = function()
	{
		var cpassword = req.body.cpassword;
		if (password.length == 0)
		{
			return false;
		}
		if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/))
		{
			return false;
		}
		return true;
	}

	var validateform = function()
	{
		if (!validatename() || !validatedescription() || !validatepassword() || !validateemail())
		{
			res.json("You have managed to bypass the form validations. Please go back to the registration page and resubmit the form");
		}
	}


	User.create(data, (err, user) => {
		if (err){
			console.log("Error: ", err)

		}
		else {
			console.log("Success", user);
			res.redirect("/confirmation");
		}

});
}

exports.login = (req, res) => {
	var cemail = req.body.cemail;
	var cpassword = req.body.cpassword;

	User.findOne({cemail: cemail}, (err, user) => {
		if (err) {
			console.log("error:", err)
		} else
		{
			var newuser = new User();
			newuser.cemail = cemail;
			newuser.cpassword = newuser.generateHash(cpassword);
			if (!user.validPassword(cpassword))
			{
				res.json({err: "password does not match"});
			} else
			{
				res.json ({success: "logged in"});
			}
		}
	});
}
