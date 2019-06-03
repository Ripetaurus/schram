const express = require('express');
const app = express();

var publicDir = require('path').join(__dirname, '/public');
app.use(express.static(publicDir));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('home');
});

app.listen(8080, function() {
	console.log('Server started on localhost:8080');
});
