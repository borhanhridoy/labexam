//declaration
var express 		= require('express');
var bodyParser 		= require('body-parser');
var ejs 			= require('ejs');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');
var login 			= require('./controllers/login');
var registration 	= require('./controllers/registration');
var logout 			= require('./controllers/logout');
var home 			= require('./controllers/home');
var home1 			= require('./controllers/home1');

var app = express();

//configuration
app.set('view engine', 'ejs');


//middleware
app.use('/CSS', express.static('CSS'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use('/login', login);
app.use('/registration', registration);
app.use('/logout', logout);
app.use('/home', home);
app.use('/home1', home1);


//routes
app.get('/', function(req, res){
	res.render('index');
});



//server startup
app.listen(3000, function(){
	console.log('server started at 3000!');
});