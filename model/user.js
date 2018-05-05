var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var UserSchema = new mongoose.Schema({
	cname: {type: String},
	cdesc: {type: String},
	cemail: {type: String},
	cpassword: {type: String},

}, {timestamps: true});

UserSchema.methods.generateHash = function(cpassword)
{
	return s
}

UserSchema.methods.validPassword = function(password)
{
	console.log("log from valid password function", bcrypt.compareSync(password, this.cpassword));
	console.log(password);
	console.log(this.cpassword);
	return bcrypt.compareSync(password, this.cpassword);
}

module.exports = mongoose.model('User', UserSchema, 'User');
