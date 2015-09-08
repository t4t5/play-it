app = require('express.io')()
app.http().io()
 
//build your realtime-web app 
console.log("I'm working!");
 
app.listen(7076)
