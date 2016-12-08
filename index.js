var express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	passport = require("passport"),
	TwitterStrategy = require("passport-twitter").Strategy,
	Xray = require("x-ray");
	
var app = express();
var x = Xray();

//app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());

var user="";
var token = '2538355556-GeEuOWBlO2wo7vi6zHq9nEOrfdGRIkZQT1wcW1P';
var tokenSecret = 'fuSWRwwzBRVSQrskxEwSHIZoFBc0PJUydlkz94rLDyA9T';
var idName ="";
var obj = {
	
	data:[
		
		{
			newsLink: "html body main " + idName + "#top-stories-section div div div div div div div a@href",
			img: "html body main " + idName + "#top-stories-section div div div div div div img@src",
			title: "html body main " + idName + "#top-stories-section div div div div div div div a div img@alt"
		},
		
		{
			newsLink: "html body main " + idName + "#top-stories-section .col-sm-12:nth-of-type(1) .visible-lg-block a@href",
			img: "html body main " + idName + "#top-stories-section .col-sm-12:nth-of-type(1) .visible-lg-block img@src",
			title: "html body main " + idName + "#top-stories-section .col-sm-12:nth-of-type(1) .visible-lg-block img@alt"
		},
		
		{
			newsLink: "html body main " + idName + "#top-stories-section .col-sm-12:nth-of-type(2) .visible-lg-block a@href",
			img: "html body main " + idName + "#top-stories-section .col-sm-12:nth-of-type(2) .visible-lg-block img@src",
			title: "html body main " + idName + "#top-stories-section .col-sm-12:nth-of-type(2) .visible-lg-block img@alt"
		},
		
		{
			newsLink: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(1) .story-link:nth-of-type(1) a@href",
			img: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(1) .story-link:nth-of-type(1) img@data-original",
			title: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(1) .story-link:nth-of-type(1) img@alt"
		},

		{
			newsLink: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(1) .story-link:nth-of-type(2) a@href",
			img: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(1) .story-link:nth-of-type(2) img@data-original",
			title: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(1) .story-link:nth-of-type(2) img@alt"
		},
		
		{
			newsLink: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(1) .story-link:nth-of-type(3) a@href",
			img: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(1) .story-link:nth-of-type(3) img@data-original",
			title: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(1) .story-link:nth-of-type(3) img@alt"
		},
		
		{
			newsLink: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(2) .story-link:nth-of-type(1) a@href",
			img: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(2) .story-link:nth-of-type(1) img@data-original",
			title: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(2) .story-link:nth-of-type(1) img@alt"
		},
		
		{
			newsLink: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(2) .story-link:nth-of-type(2) a@href",
			img: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(2) .story-link:nth-of-type(2) img@data-original",
			title: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(2) .story-link:nth-of-type(2) img@alt"
		},
		
		{
			newsLink: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(2) .story-link:nth-of-type(3) a@href",
			img: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(2) .story-link:nth-of-type(3) img@data-original",
			title: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(2) .story-link:nth-of-type(3) img@alt"
		}
		
	]}

/*
mongoose.connect("mongodb://test:test@ds053156.mlab.com:53156/mongodb-test-valentino", function (err) {
	
	if (err) {
		console.log('Unable to connect to the mongoDB server. Error:', err);
	}
	
	else {
		console.log('Connection established');
	}
});


mongoose.connection.once("open", function(err){
	
	if(err){
		console.log(err);
	}
	
	else{
		//create snippet
		
	}
	*/
	passport.use(new TwitterStrategy({
		consumerKey: '7yqe1MKJmAHBBV97lro32cZi9',
		consumerSecret: 'F573BNj9Daj1ohAjnT2Q79EUPwXv0c14r2gbsQbuX23Ct6iL4E',
		callbackURL: "http://127.0.0.1:8080/auth/twitter/callback"
	},
	function(token, tokenSecret, profile, done) {
		
			console.log(profile);
			console.log(profile.id);
			user=profile.id;
			
			passport.serializeUser(function(user, done) {
				done(null, user);
			});

			passport.deserializeUser(function(user, done) {
				done(null, user);
			});
			
			return done(null, profile.id);
			
		}
	));
	
	app.get("/", function(req, res){
		
	});

app.get("/health", function(req, res){
	
	idName="#health-section";
	
	x('http://www.nbcnews.com/health', obj)(function(err, code) {
		
		res.json(code);
	});
	
});

app.get("/world", function(req, res){
	
	idName="#world-section";
	
	x('http://www.nbcnews.com/news/world', obj)(function(err, code) {
		
		res.json(code);
	});
	
});

app.get("/politics", function(req, res){
	
	idName="#politics-section";
	
	x('http://www.nbcnews.com/politics', obj)(function(err, code) {
		
		res.json(code);
	});
	
});

app.get("/invest", function(req, res){
	
	idName="#investigations-section";
	
	x('http://www.nbcnews.com/news/investigations', obj)(function(err, code) {
		
		res.json(code);
	});
	
});

app.get("/tech", function(req, res){
	
	idName="#tech-section";
	
	x('http://www.nbcnews.com/tech', obj)(function(err, code) {
		
		res.json(code);
	});
});

app.get("/science", function(req, res){
	
	idName ="#science-section";
	
	x('http://www.nbcnews.com/science', obj)(function(err, code) {
		
		res.json(code);
	});
});

app.get("/popculture", function(req, res){
	
	idName ="#pop-culture-section";
	
	x('http://www.nbcnews.com/pop-culture', obj)(function(err, code) {
		
		res.json(code);
	});
});

app.get("/lifestyle", function(req, res){
	
	idName ="#lifestyle-section";
	
	x('http://www.nbcnews.com/pop-culture/lifestyle', obj)(function(err, code) {
		
		res.json(code);
	});
});

app.get("/business", function(req, res){
	
	idName ="#business-section";
	
	x('http://www.nbcnews.com/business', obj)(function(err, code) {
		
		res.json(code);
	});
});

app.get("/us", function(req, res){
	
	idName ="#us-news-section";
	
	x('http://www.nbcnews.com/news/us-news', obj)(function(err, code) {
		
		res.json(code);
	});
});

	
	app.get('/auth/twitter', passport.authenticate('twitter'));
	
	app.get("/login", function(req, res){
		res.send("twitter authentication went wrong");
	})

	app.get('/auth/twitter/callback',
		passport.authenticate('twitter', { successRedirect: '/',
                                     failureRedirect: '/login' }));
	

//});
app.listen(process.env.PORT||8080);