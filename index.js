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

app.io.route('game', {
  create: function(req) {
    console.log("Create game");

    req.io.emit('received');
  }
});
 
app.listen(7076)
