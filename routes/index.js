var register = require("../controller/registrationController.js")
module.exports = function (app) {
  app.get('/home', (req,res) => {
    res.render('signin');
  });

 app.get('/route', (req,res) => {
    console.log(req.body);
    res.render('signin');
  });

  app.post('/register', register.register);

  app.get('/confirmation', (req,res) => {
    res.render('login');
  });

  app.get('/login', (req,res) => {
    res.render('login');
  });

  app.post('/login', register.login);
}
