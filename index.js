var express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	passport = require("passport"),
	session = require("express-session"),
	TwitterStrategy = require("passport-twitter").Strategy,
	Xray = require("x-ray"),
	CronJob = require("cron").CronJob,
	events = require("events").EventEmitter,
	async = require("async"),
	path = require("path");
	
var app = express();
var x = Xray();

app.use(express.static("public"));
//app.use(express.static(path.join(__dirname, 'public/index.html')));
//app.use(express.static(path.join(__dirname + 'public/style.css')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'bla bla bla' 
}));

var array=[];
var arr = [];

mongoose.connect("mongodb://test:test@ds053156.mlab.com:53156/mongodb-test-valentino", function (err) {
	
	if (err) {
		console.log('Unable to connect to the mongoDB server. Error:', err);
	}
	
	else {
		console.log('Connection established');
	}
});

//function start(){

var user="";
var userObj='';
var idName ="";
var sendObj={};
var number=0;
var myEvent = new events();

var token = '2538355556-GeEuOWBlO2wo7vi6zHq9nEOrfdGRIkZQT1wcW1P';
var tokenSecret = 'fuSWRwwzBRVSQrskxEwSHIZoFBc0PJUydlkz94rLDyA9T';

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


mongoose.connection.once("open", function(err){
	
	if(err){
		console.log(err);
	}
	
	else{
		
		var schema = mongoose.Schema({
			username: {type: String, unique:true},
			favourite: {type: Array},
			likes: {type: Array},
			fullNews: {type: Array},
			photo: {type:String},
			displayName: {type: String}
		});
		
		var Db = mongoose.model("NBC User", schema);
		
	}
	
	
	
	passport.use(new TwitterStrategy({
		consumerKey: '7yqe1MKJmAHBBV97lro32cZi9',
		consumerSecret: 'F573BNj9Daj1ohAjnT2Q79EUPwXv0c14r2gbsQbuX23Ct6iL4E',
		callbackURL: "http://nbc-news-scrap.herokuapp.com/auth/twitter/callback"
		//callbackURL: "http://127.0.0.1:8080/auth/twitter/callback"
	},
	function(token, tokenSecret, profile, done) {
		
			user=profile.id;
			userObj={
				username: profile.username,
				displayName: profile.displayName,
				photo: profile.photos[0].value
			};
			
			Db.create({username: userObj.username, favourite:"", likes:[], fullNews:[], photo: userObj.photo, displayName: userObj.displayName }, function(err, snippet){
				
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
	
	myEvent.on("newUser", function(){
		console.log("success");
		user="";
		userObj='';
		idName ="";
		sendObj={};
		number=0;
		
	});
	
	app.get("/", function(req, res){
		
		//res.sendFile(__dirname+"/public/index.html");
	});
	
	app.get("/home", function(req, res){
		console.log("new user");
		myEvent.emit("newUser");
		res.sendFile(__dirname+"/public/index.html");
	});
	
	app.get("/user", function(req,res){
		
		//res.sendFile(__dirname+"/public/index.html");
		//if(array.indexOf(userObj.username)==-1){
			array.push(userObj.username);
		//}
		console.log(array);
		res.redirect("/user/"+userObj.username);
	});
	
	app.get("/user/:twitterUsername", function(req, res){
		
		var twitterUsername = req.params.twitterUsername;
		
		if(array.indexOf(twitterUsername)!=-1){
			res.sendFile(__dirname+"/public/index.html");
		}
		
		else{
			res.send("bad request");
		}
		
	});
	
	app.post('/liked', function(req, res){
		
		var username = req.body.username;
	
	Db.findOne({username: username}, function(err, snippet){
	
		if(err || !snippet){
			console.log(err);
			return;
		}
		
		res.json(snippet.fullNews);
	});
	
});

	app.get("/daily", function(req, res){
		number ++;
		var job = new CronJob({
		cronTime: '00 00 10 * * 1-5',
		//cronTime: '* * * * *',
		onTick: function() {
		if(number>1){
			number--;
			job.stop();
		}
		console.log("time");
		number--;
		job.stop();
		res.send("a");
		},
		start: false,
		timeZone: 'America/New_York'
		});
		job.start();
		
	});

	app.post("/disliked", function(req, res){
		
		var username = req.body.username;
		
		var disliked = req.body.disliked;
		console.log(disliked);
		
		Db.findOne({username:username}, function(err, snippet){
			
			if(err||!snippet){
				console.log(err);
				return;
			}
			//error is here
			var arr = snippet.likes;
			var index = arr.indexOf(disliked);
			
			console.log(arr);
			arr.splice(index, 1);
			snippet.fullNews.splice(index, 1)
			console.log(snippet.fullNews);
			
			Db.findOneAndUpdate({username:username}, {likes: arr, fullNews: snippet.fullNews}, function(err, updatedSnippet){
				
				if(err||!updatedSnippet){
					console.log(err);
					return;
				}
				console.log("success");
				res.json({a:1});
				
			});
			
		});
		
	});
	
	app.post("/remove", function(req, res){
		
		var index = req.body.removed;
		var username = req.body.username;
		
		Db.findOne({username:username}, function(err, snippet){
			
			if(err||!snippet){
				console.log(err);
				return;
			}
			
			snippet.favourite.splice(index, 1);
			
			Db.findOneAndUpdate({username:username}, {favourite:snippet.favourite}, function(err, updatedSnippet){
				
				if(err||!updatedSnippet){
					console.log(err);
					return;
				}
				
				res.json(snippet.favourite);
				
			});
			
		});
		
	});
	
	app.post("/favourite", function(req, res){
		
		var favourite = req.body.topic;
		var username = req.body.username;
		
		Db.findOne({username:username}, function(err, snippet){
			
			if(err||!snippet){
				console.log(err);
				return;
			}
			
			var arr = snippet.favourite;
			if(arr.indexOf(favourite)==-1){
				arr.push(favourite);
			}
			else{
				arr.splice(snippet.favourite.indexOf(favourite),1);
			}
			
			Db.findOneAndUpdate({username:username}, {favourite:arr}, function(err, updatedSnippet){
				
				if(err||!updatedSnippet){
					console.log(err);
					return;
				}
				
					res.json(arr);
				
			});
			
		});
		
	});
	
	app.post("/likes", function(req, res){
		
		var username = req.body.username;
		var article = req.body.title;
		var fullNews = {newsLink:req.body.newsLink, img:req.body.img, title:req.body.title};
		console.log(article);
		
		Db.findOne({username:username}, function(err, snippet){
			
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
			
			Db.findOneAndUpdate({username:username}, {likes:arr, fullNews:snippet.fullNews}, function(err, updatedSnippet){
				
				if(err||!updatedSnippet){
					console.log(err);
					return;
				}
				
					res.json(arr);
				
			});
			
		});
		
	});
	
	app.post("/twitter", function(req, res){
	
		var username = req.body.username;
	
	if(userObj==''){
		res.json({a:1});
		return;
	}
	
	Db.findOne({username:username}, function(err, snippet){
		
		if(err||!snippet){
			console.log(err);
			return;
		}
		
		userObj = {username: username, photo: snippet.photo, displayName: snippet.displayName}
	
		res.json({key1:userObj,key2:snippet.favourite});
	
	});
	
});

	app.post("/health", function(req, res){
	
		var username = req.body.username;
	
		idName="#health-section";
	
	Db.findOne({username:username}, function(err, snippet){

		x('http://www.nbcnews.com/health', obj)(function(err, code) {
			
			if(err||!snippet){
				console.log(err);
				sendObj = {	key1: code,
							key2:0,
							key3:0};
			}
			
			else{
		
				sendObj = {	key1: code,
							key2:snippet.favourite,
							key3:snippet.likes};
			}
					
			res.json(sendObj);
		
	});
		
	});
	
});

	app.post("/world", function(req, res){
		
		var username = req.body.username;
	
	idName="#world-section";
	
	Db.findOne({username:username}, function(err, snippet){

		x('http://www.nbcnews.com/news/world', obj)(function(err, code) {
			
			if(err||!snippet){
				console.log(err);
				sendObj = {	key1: code,
							key2:0,
							key3:0};
			}
			
			else{
		
				sendObj = {	key1: code,
							key2:snippet.favourite,
							key3:snippet.likes};
			}
					
			res.json(sendObj);
		
	});
		
	});
	
});

app.post("/politics", function(req, res){
	
		var username = req.body.username;
	
	idName="#politics-section";
	
	Db.findOne({username:username}, function(err, snippet){

		x('http://www.nbcnews.com/politics', obj)(function(err, code) {
			
			if(err||!snippet){
				console.log(err);
				sendObj = {	key1: code,
							key2:0,
							key3:0};
			}
			
			else{
		
				sendObj = {	key1: code,
							key2:snippet.favourite,
							key3:snippet.likes};
			}
					
			res.json(sendObj);
		
	});
		
	});
	
});

app.post("/invest", function(req, res){
	
		var username = req.body.username;
	
	idName="#investigations-section";
	
	Db.findOne({username:username}, function(err, snippet){

		x('http://www.nbcnews.com/news/investigations', obj)(function(err, code) {
			
			if(err||!snippet){
				console.log(err);
				sendObj = {	key1: code,
							key2:0,
							key3:0};
			}
			
			else{
		
				sendObj = {	key1: code,
							key2:snippet.favourite,
							key3:snippet.likes};
			}
					
			res.json(sendObj);
		
	});
		
	});
	
});

app.post("/tech", function(req, res){
	
		var username = req.body.username;
	
	idName="#tech-section";
	
	Db.findOne({username:username}, function(err, snippet){

		x('http://www.nbcnews.com/tech', obj)(function(err, code) {
			
			if(err||!snippet){
				console.log(err);
				sendObj = {	key1: code,
							key2:0,
							key3:0};
			}
			
			else{
		
				sendObj = {	key1: code,
							key2:snippet.favourite,
							key3:snippet.likes};
			}
					
			res.json(sendObj);
		
	});
		
	});
	
});

app.post("/science", function(req, res){
	
		var username = req.body.username;
	
	idName ="#science-section";
	
	Db.findOne({username:username}, function(err, snippet){

		x('http://www.nbcnews.com/science', obj)(function(err, code) {
			
			if(err||!snippet){
				console.log(err);
				sendObj = {	key1: code,
							key2:0,
							key3:0};
			}
			
			else{
		
				sendObj = {	key1: code,
							key2:snippet.favourite,
							key3:snippet.likes};
			}
					
			res.json(sendObj);
		
	});
		
	});
	
});

app.post("/popculture", function(req, res){
	
		var username = req.body.username;
	
	idName ="#pop-culture-section";
	
	Db.findOne({username:username}, function(err, snippet){

		x('http://www.nbcnews.com/pop-culture', obj)(function(err, code) {
			
			if(err||!snippet){
				console.log(err);
				sendObj = {	key1: code,
							key2:0,
							key3:0};
			}
			
			else{
		
				sendObj = {	key1: code,
							key2:snippet.favourite,
							key3:snippet.likes};
			}
					
			res.json(sendObj);
		
	});
		
	});
	
});

app.post("/lifestyle", function(req, res){
	
		var username = req.body.username;
	
	idName ="#lifestyle-section";
	
	Db.findOne({username:username}, function(err, snippet){

		x('http://www.nbcnews.com/pop-culture/lifestyle', obj)(function(err, code) {
			
			if(err||!snippet){
				console.log(err);
				sendObj = {	key1: code,
							key2:0,
							key3:0};
			}
			
			else{
		
				sendObj = {	key1: code,
							key2:snippet.favourite,
							key3:snippet.likes};
			}
					
			res.json(sendObj);
		
	});
		
	});
	
});

app.post("/business", function(req, res){
	
		var username = req.body.username;
	
	idName ="#business-section";
	
	Db.findOne({username:username}, function(err, snippet){

		x('http://www.nbcnews.com/business', obj)(function(err, code) {
			
			if(err||!snippet){
				console.log(err);
				sendObj = {	key1: code,
							key2:0,
							key3:0};
			}
			
			else{
		
				sendObj = {	key1: code,
							key2:snippet.favourite,
							key3:snippet.likes};
			}
					
			res.json(sendObj);
		
	});
		
	});
	
});

app.post("/us", function(req, res){
	
		var username = req.body.username;
	
	idName ="#us-news-section";
	
	Db.findOne({username:username}, function(err, snippet){

		x('http://www.nbcnews.com/news/us-news', obj)(function(err, code) {
			
			if(err||!snippet){
				console.log(err);
				sendObj = {	key1: code,
							key2:0,
							key3:0};
			}
			
			else{
		
				sendObj = {	key1: code,
							key2:snippet.favourite,
							key3:snippet.likes};
			}
					
			res.json(sendObj);
		
	});
		
	});
	
});

app.post("/deactivate", function(req, res){
	
	var username = req.body.username;
	
	Db.findOneAndRemove({username:username}, function(err, snippet){
		
		if(err||!snippet){
			console.log(err);
			return;
		}
		
		user="";
		userObj='';
		idName ="";
		sendObj={};
		number=0;
		
		res.json({a:1});
		
	});
});

	
	app.get('/auth/twitter', passport.authenticate('twitter'));
	
	app.get("/login", function(req, res){
		res.send("twitter authentication went wrong");
	});

	app.get('/auth/twitter/callback',
		passport.authenticate('twitter', { successRedirect: '/user',
                                     failureRedirect: '/login' }));
	

});
//};

app.listen(process.env.PORT||8080, function(){
	/*
	arr.push(function(callback){
		callback(null, start());
	});
	
	async.parallel(arr, function(err, result){
		
		console.log("user");
		
	});
	*/
	//start();
	
	
});