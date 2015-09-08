app = require('express.io')()
app.http().io()
 
//build your realtime-web app 
console.log("I'm working!");

app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index');
});
 
app.listen(7076)
