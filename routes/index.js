module.exports = function (app) {
  //These are the routes. There are two main types of HTTP "Verbs", Get and Post
  //Get is when you access the route through the URL.
  //To use this "get" route, go to localhost:8000/home
  app.get('/home', (req,res) => {
    res.render('home');
  });

  app.post('/home', (req,res) => {
    console.log(req.body.name);
    res.render('home2', {name: req.body.name});
  })
}
