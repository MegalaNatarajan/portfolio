const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const sgMail = require("@sendgrid/mail");
const PORT = process.env.PORT || 3000;
var first_name;
var last_name;
var email;
var message;
const app = express();
app.use(express.static(__dirname + '/public'));

const profile = require('./profile');
app.use('/profile', profile)
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/',(req,res) => {
    const data =  {
        person :{
           firstName : 'Megala',
           lastName :  'Natarajan',
        }  
    }
    res.render('index',data);
});
app.get('/nav',(req, res) => {
    res.render('nav');
});
app.get('/contact',(req, res) => {
    res.render('contact');
});
app.get('/project',(req, res) => {
    res.render('project');
});
app.get('/about',(req, res) => {
    res.render('about');
});
app.post('/thanks',(req, res) => {
    res.render('thanks', {contact: req.body});
     first_name = req.body.firstName;
     last_name = req.body.lastName;
     email = req.body.email;
     message = req.body.message;
     sgMail.setApiKey(process.env.SENDGRID_API_KEY);
     const msg = {
       to: 'megalainla@gmail.com',
       from: email,
       subject: 'Contact Information',
       text: first_name,
       html: 'Full Name: '+first_name +' ' +last_name +'<br>Email: '+email+'<br>Message: '+message,
     };
     sgMail.send(msg);
});

/*app.listen(8080,() => {
    console.log('listening at http://localhost:8080');
});*/
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
