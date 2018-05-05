var mongoose = require('mongoose');
var SubmissionSchema = new mongoose.Schema({
	cname: {type: String},
	cdesc: {type: String},
	cemail: {type: String},
	cpassword: {type: String},

}, {timestamps: true});


module.exports = mongoose.model('Submission', SubmissionSchema);
