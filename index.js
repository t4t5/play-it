var express = require('express.io');
var app = express();
app.http().io()
 
//build your realtime-web app 
console.log("I'm working!");


app.use(express.static(__dirname + '/public'));


app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index');
});
 
app.listen(7076)
