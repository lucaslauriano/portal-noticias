var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/news', function(req, res) {
  res.render('news');
});

app.get('/admin', function(req, res) {
  res.render('admin');
});

app.listen(3000, function() {
  console.log('Servidor rodando com Express');
});
