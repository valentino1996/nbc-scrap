var express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	passport = require("passport"),
	passportTwitter = require("passport-twitter").Strategy,
	Xray = require("x-ray");
	
var app = express();
var x = Xray();

//app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());

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
	

app.get("/", function(req, res){
	x('http://www.nbcnews.com/news/us-news', {
		
		news_main_link: "html body main #us-news-section #top-stories-section div div div div div div div a@href",
		news_main_img: "html body main #us-news-section #top-stories-section div div div div div div img@src",
		news_main_line: "html body main #us-news-section #top-stories-section div div div div div div div a div img@alt"
		
	})(function(err, code) {
		console.log(code);
		res.json(code);
	});
});

app.get("/world", function(req, res){
	
	x('http://www.nbcnews.com/news/world', {
		
		news_main_link: "html body main #world-section #top-stories-section div div div div div div div a@href",
		news_main_img: "html body main #world-section #top-stories-section div div div div div div img@src",
		news_main_line: "html body main #world-section #top-stories-section div div div div div div div a div img@alt"
		
	})(function(err, code) {
		console.log(code);
		res.json(code);
	});
});

app.get("/politics", function(req, res){
	
});

app.get("/invest", function(req, res){
	
	x('http://www.nbcnews.com/news/investigations', {
		
		news_main_link: "html body main #investigations-section #top-stories-section div div div div div div div a@href",
		news_main_img: "html body main #investigations-section #top-stories-section div div div div div div img@src",
		news_main_line: "html body main #investigations-section #top-stories-section div div div div div div div a div img@alt"
		
	})(function(err, code) {
		console.log(code);
		res.json(code);
	});
});

app.get("/health", function(req, res){
	
	x('http://www.nbcnews.com/health', {
		
		news_main_link: "html body main #health-section #top-stories-section div div div div div div div a@href",
		news_main_img: "html body main #health-section #top-stories-section div div div div div div img@src",
		news_main_line: "html body main #health-section #top-stories-section div div div div div div div a div img@alt"
		
	})(function(err, code) {
		console.log(code);
		res.json(code);
	});
});

app.get("/tech", function(req, res){
	
	x('http://www.nbcnews.com/tech', {
		
		news_main_link: "html body main #tech-section #top-stories-section div div div div div div div a@href",
		news_main_img: "html body main #tech-section #top-stories-section div div div div div div img@src",
		news_main_line: "html body main #tech-section #top-stories-section div div div div div div div a div img@alt"
		
	})(function(err, code) {
		console.log(code);
		res.json(code);
	});
});

app.get("/science", function(req, res){
	
	x('http://www.nbcnews.com/science', {
		
		news_main_link: "html body main #science-section #top-stories-section div div div div div div div a@href",
		news_main_img: "html body main #science-section #top-stories-section div div div div div div img@src",
		news_main_line: "html body main #science-section #top-stories-section div div div div div div div a div img@alt"
		
	})(function(err, code) {
		console.log(code);
		res.json(code);
	});
});

app.get("/popculture", function(req, res){
	
	x('http://www.nbcnews.com/pop-culture', {
		
		news_main_link: "html body main #pop-culture-section #top-stories-section div div div div div div div a@href",
		news_main_img: "html body main #pop-culture-section #top-stories-section div div div div div div img@src",
		news_main_line: "html body main #pop-culture-section #top-stories-section div div div div div div div a div img@alt"
		
	})(function(err, code) {
		console.log(code);
		res.json(code);
	});
});

app.get("/lifestyle", function(req, res){
	
	x('http://www.nbcnews.com/pop-culture/lifestyle', {
		
		news_main_link: "html body main #lifestyle-section #top-stories-section div div div div div div div a@href",
		news_main_img: "html body main #lifestyle-section #top-stories-section div div div div div div img@src",
		news_main_line: "html body main #lifestyle-section #top-stories-section div div div div div div div a div img@alt"
		
	})(function(err, code) {
		console.log(code);
		res.json(code);
	});
});

app.get("/business", function(req, res){
	
	x('http://www.nbcnews.com/business', {
		
		news_main_link: "html body main #business-section #top-stories-section div div div div div div div a@href",
		news_main_img: "html body main #business-section #top-stories-section div div div div div div img@src",
		news_main_line: "html body main #business-section #top-stories-section div div div div div div div a div img@alt"
		
	})(function(err, code) {
		console.log(code);
		res.json(code);
	});
});

app.get("/u", function(req, res){
	
	x('http://www.nbcnews.com/news/us-news', {
		
		news_main_link: "html body main #us-news-section #top-stories-section div div div div div div div a@href",
		news_main_img: "html body main #us-news-section #top-stories-section div div div div div div img@src",
		news_main_line: "html body main #us-news-section #top-stories-section div div div div div div div a div img@alt"
		
	})(function(err, code) {
		console.log(code);
		res.json(code);
	});
});

});
app.listen(8080);