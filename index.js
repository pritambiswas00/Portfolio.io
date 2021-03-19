const path = require('path')
const express = require('express')

const app = express();
const hbs = require('hbs')

const PORT = process.env.PORT || 3000;
const filesPublic = path.join(__dirname,"./publicFiles")
const partialsPath = path.join(__dirname, "./partials");
app.use(express.static(filesPublic))

app.use('./CSS', express.static(__dirname + './publicFiles/CSS'))
app.use('./JS', express.static(__dirname + './publicFiles/JS'))
app.use('./images', express.static(__dirname+'./publicFiles/images'))
app.set('views', './views')

app.set('view engine','hbs');

hbs.registerPartials(partialsPath);


app.get('', (req, res)=>{
    res.render('homepage')
})
app.get('/about',(req, res)=>{
    res.render('about')
})
app.get('/works', (req, res)=>{
    res.render('works')
})
app.get('/contact', (req, res)=>{
    res.render('contact')
})

app.listen(PORT, ()=>{
    console.log('Server is up'+ PORT);
})