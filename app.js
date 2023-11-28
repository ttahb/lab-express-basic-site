const express = require('express'); //loads the express package
const app = express() //create an express server

const port = 3000;

app.use(express.static('public')); //tells express of location for static files.

app.get("/", function(req, res){
    res.sendFile(`${__dirname}/views/index.html`);
});

app.get("/gallery", function(req, res){
    res.sendFile(`${__dirname}/views/gallery.html`);
});

app.get("/about", function(req, res){
    res.sendFile(`${__dirname}/views/about.html`);
});

app.get("/works", function(req, res){
    res.sendFile(`${__dirname}/views/works.html`);
});

app.listen(port, ()=> console.log(`Server is running on ${port}`));

