var express = require("express"),
    path = require("path"),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  res.render("index");
});

app.listen(8000, () => {
  console.log("Port 8000");
});
