var express = require("express"),
    path = require("path"),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express();

mongoose.Promise = global.Promise;
require('./config/mongoose.js');
mongoose.connect('mongodb://localhost/survey', function(err) {
	if (err){
		console.log('Could not connect to mongodb');

	}
	else
	{
		console.log('Successfully connected to mongodb');
	}
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  res.render("index");
});

require('./routes/index.js')(app);

app.listen(8000, () => {
  console.log("Port 8000");
});
