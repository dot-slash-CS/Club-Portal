var mongoose = require('mongoose');

var SubmissionSchema = new mongoose.Schema({
  fname: {type: String},
  lname: {type: String},
  age: {type: Number},
  comments: {type: String},
},{timestamps: true});

module.exports = mongoose.model ('Submission',SubmissionSchema, 'Submission');

module.exports = function (app) {
  app.get ('/home',(req,res)=>{
    res.render ('home');
  } );
  app.post ('/home',(req,res)=>{
    console.log(req.body);
    res.render('home2',{name: req.body.name});
  })
}
