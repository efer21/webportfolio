// index.js

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));


app.set('view engine', 'ejs');
var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/submit', (req, res) => {
    res.render('home')
});

app.listen(port, () => {
    console.log("Server started on port " + port);
});
