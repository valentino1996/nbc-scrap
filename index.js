var express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	passport = require("passport"),
	session = require("express-session"),
	TwitterStrategy = require("passport-twitter").Strategy,
	Xray = require("x-ray");
	
var app = express();
var x = Xray();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'bla bla bla' 
}));

var user="";
var userObj='';
var token = '2538355556-GeEuOWBlO2wo7vi6zHq9nEOrfdGRIkZQT1wcW1P';
var tokenSecret = 'fuSWRwwzBRVSQrskxEwSHIZoFBc0PJUydlkz94rLDyA9T';
var idName ="";
var obj = {
	

		one:{
			newsLink: "html body main " + idName + "#top-stories-section div div div div div div div a@href",
			img: "html body main " + idName + "#top-stories-section div div div div div div img@src",
			title: "html body main " + idName + "#top-stories-section div div div div div div div a div img@alt"
		},
		
		two:{
			newsLink: "html body main " + idName + "#top-stories-section .col-sm-12:nth-of-type(1) .visible-lg-block a@href",
			img: "html body main " + idName + "#top-stories-section .col-sm-12:nth-of-type(1) .visible-lg-block img@src",
			title: "html body main " + idName + "#top-stories-section .col-sm-12:nth-of-type(1) .visible-lg-block img@alt"
		},
		
		three:{
			newsLink: "html body main " + idName + "#top-stories-section .col-sm-12:nth-of-type(2) .visible-lg-block a@href",
			img: "html body main " + idName + "#top-stories-section .col-sm-12:nth-of-type(2) .visible-lg-block img@src",
			title: "html body main " + idName + "#top-stories-section .col-sm-12:nth-of-type(2) .visible-lg-block img@alt"
		},
		
		four:{
			newsLink: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(1) .story-link:nth-of-type(1) a@href",
			img: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(1) .story-link:nth-of-type(1) img@data-original",
			title: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(1) .story-link:nth-of-type(1) img@alt"
		},

		five:{
			newsLink: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(1) .story-link:nth-of-type(2) a@href",
			img: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(1) .story-link:nth-of-type(2) img@data-original",
			title: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(1) .story-link:nth-of-type(2) img@alt"
		},
		
		six:{
			newsLink: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(1) .story-link:nth-of-type(3) a@href",
			img: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(1) .story-link:nth-of-type(3) img@data-original",
			title: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(1) .story-link:nth-of-type(3) img@alt"
		},
		
		seven:{
			newsLink: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(2) .story-link:nth-of-type(1) a@href",
			img: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(2) .story-link:nth-of-type(1) img@data-original",
			title: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(2) .story-link:nth-of-type(1) img@alt"
		},
		
		eight:{
			newsLink: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(2) .story-link:nth-of-type(2) a@href",
			img: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(2) .story-link:nth-of-type(2) img@data-original",
			title: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(2) .story-link:nth-of-type(2) img@alt"
		},
		
		nine:{
			newsLink: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(2) .story-link:nth-of-type(3) a@href",
			img: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(2) .story-link:nth-of-type(3) img@data-original",
			title: "html body main " + idName + "#top-stories-section .col-lg-4 .col-md-lg-6:nth-of-type(2) .story-link:nth-of-type(3) img@alt"
		}
		
	};


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
		
		var schema = mongoose.Schema({
			username: {type: String, unique:true},
			favourite: {type: String},
			likes: {type: Array},
			fullNews: {type: Array}
		});
		
		var Db = mongoose.model("NBC User", schema);
		
	}
	
	passport.use(new TwitterStrategy({
		consumerKey: '7yqe1MKJmAHBBV97lro32cZi9',
		consumerSecret: 'F573BNj9Daj1ohAjnT2Q79EUPwXv0c14r2gbsQbuX23Ct6iL4E',
		callbackURL: "http://nbc-news-scrap.herokuapp.com/auth/twitter/callback"
	},
	function(token, tokenSecret, profile, done) {
		
			user=profile.id;
			userObj={
				username: profile.username,
				displayName: profile.displayName,
				photo: profile.photos[0].value
			};
			
			Db.create({username: userObj.username, favourite:"", likes:[], fullNews:[]}, function(err, snippet){
				
				if(err||!snippet){
					console.log(err);
					return;
				}
				console.log("Db created", snippet);
				
			});
			
			passport.serializeUser(function(user, done) {
				done(null, user);
			});

			passport.deserializeUser(function(user, done) {
				done(null, user);
			});
			
			return done(null, profile.id);
			
		}
	));
	
	app.post("/", function(req, res){
		//userObj = req.body.a;
		//console.log(userObj);
		//res.send(userObj);
		
	});
	
	app.post("/favourite", function(req, res){
		
		var favourite = req.body.topic;
		
		Db.findOne({username:userObj.username}, function(err, snippet){
			
			if(err||!snippet){
				console.log(err);
				return;
			}
			
			if(snippet.favourite==favourite){
				favourite="";
				console.log(favourite);
			}
			
			Db.findOneAndUpdate({username:userObj.username}, {favourite:favourite}, function(err, updatedSnippet){
				
				if(err||!updatedSnippet){
					console.log(err);
					return;
				}
				
				res.json(updatedSnippet.favourite);
				
			});
			
		});
		
	});
	//shif kodin posht ksaj
	app.post("/likes", function(req, res){
		
		var article = req.body.title;
		var fullNews = {newsLink:req.body.newsLink, img:req.body.img, title:req.body.title};
		console.log(article);
		
		Db.findOne({username:userObj.username}, function(err, snippet){
			
			if(err||!snippet){
				console.log(err);
				return;
			}
			
			var arr=snippet.likes;
			var index = arr.indexOf(article);
			if(index==-1){
				arr.push(article);
				snippet.fullNews.push(fullNews);
			}
			else{
				arr.splice(index,1);
				snippet.fullNews.splice(index,1);
			}
			
			Db.findOneAndUpdate({username:userObj.username}, {likes:arr, fullNews:snippet.fullNews}, function(err, updatedSnippet){
				
				if(err||!updatedSnippet){
					console.log(err);
					return;
				}
				
				res.json(updatedSnippet.likes);
				
			});
			
		});
		
	});
	
app.post("/twitter", function(req, res){
	
	if(userObj==''){
		res.json({a:1});
		return;
	}
	res.json(userObj);
	
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
		console.log(code);
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
	});

	app.get('/auth/twitter/callback',
		passport.authenticate('twitter', { successRedirect: '/',
                                     failureRedirect: '/login' }));
	

});
app.listen(process.env.PORT||8080);