var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');

app.locals.pagetitle = "Awesome website!!!";

app.get('/', routes.index)
app.get('/about', routes.about)

app.get('*', function(req, res){
	var name = req.params.name; 
	var title = req.params.title; 
	res.send('Bad route');
});


var server = app.listen(3000, function(){
	console.log("Listening on port 3000")
});