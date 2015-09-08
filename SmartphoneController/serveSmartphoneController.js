static = require('node-static');

var file = new static.Server('.');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(3000);


require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    console.log('Listening at: --->  '+add + ":3000");
});
