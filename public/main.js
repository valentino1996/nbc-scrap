var userObj='';
var i;
var id;
var newsObj;
var arr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var favString="";
var likedArray=[];
var favouriteArray=[];
//http://nbc-news-scrap.herokuapp.com

$(document).ready(function(){
	
	$('#profile-page').hide();
	
	$('#x').on('click', function(){
		$('#profile-page').hide();
		$('#field').css("position", "static");
	});
	
	$("#deactivate").on("click", function(){
		
		$.ajax({
			url:"/deactivate",
			type:"POST",
			data:{
				user:userObj.username
			},
			success: function(){
				$("#twitter").html("<i class='fa fa-twitter'> Sign in with Twitter");	
				window.location = "http://nbc-news-scrap.herokuapp.com";
			}
		});
		
	});
	
	$('#like').on('click', function(){
		$.ajax({
			url: '/liked',
			type: 'GET',
			success: function(array){
				likedArray = array;
				str ='<h2 class="text-center">Liked Articles</h2>';
				for(var j = 0; j < array.length; j++){
					
				 	str += '<div class="news liked-news"><div class="row"><div class="col-md-5"><a href="' +
						array[j].newsLink+ '" target="_blank"><img src="' +
						array[j].img + '"></img></a></div><div class="col-md-5"><a href="' +
						array[j].newsLink+ '" target="_blank"><p class="one">'+
						array[j].title +'</p></a></div><div class="col-md-1"><i id="dislike" class="fa fa-times '+j+'"></i></div></div></div>';
					}
					
					$('#field').html(str);
					
					$("#x").trigger("click");
				}
			});
		});
		
	$("#schedule").on("click", function(){
		console.log("button pressed");
		$.ajax({
			url: "/schedule",
			type: "POST",
			data: {
				
			},
			success: function(){
				$("#x").trigger("click");
				$("#world").trigger("click");
				$("#schedule").trigger("click");
			}
		});
		
	});
	
	$('#twitter').on('click', function(){
		
		$.ajax({
			url: '/twitter',
			type: 'POST',
			dataType: 'json',
			success: function(obj){
				
				if(obj.a==1){
					window.location="http://nbc-news-scrap.herokuapp.com/auth/twitter";
				}
				else{
					userObj== obj.key1;
					
					$("#twitter").html("Profile Page");	
					$("#display-name").html(obj.key1.displayName);
					$("#profile-image").prop("src", obj.key1.photo);
					
					favouriteArray=obj.key2;
					
					favString="<h5>Favourite Topics :</h5>";
					
					for(var j=0; j<obj.key2.length; j++){
						favString += 	'<div class="row"><div class="col-md-5"><h6>'+
										obj.key2[j]+'</h6></div>'+
										'<div class="col-md-3"><p id="'+j+'" class="remove-articles">x</p></div></div>';
					}
					$("#fav-text").html(favString);
					$('#profile-page').show();
					$('#field').css("position", "fixed");
				}
				
			}
		});
		
	});
	
	$("#fav-text").on("click", ".remove-articles", function(){
		
		id = Number($(this).prop("id"));
		console.log(id);
		
		$.ajax({
			url: "/remove",
			type: "POST",
			data: {
				removed: id
			},
			success: function(obj){
				$("#twitter").trigger("click");
			}
		});
		
	});
	
	
	
	$('#world').on('click', function(){
		$.ajax({
			url: '/world',
			type: 'GET',
			success: function(obj){
				newsObj=obj.key1;
				str ='<h2 class="text-center">World\t<i id="topic-world" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					if(typeof obj.key1[key].title=="undefined"){
						obj.key1[key].img = "http://i68.tinypic.com/2i9i0l5.jpg";
						obj.key1[key].title = "Click here to read this article";
					}
					
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="one">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
				});
				$('#field').html(str);
				
				for (var j=0; j<obj.key2.length; j++){
				
					if(obj.key2[j]=="topic-world"){
						$("#topic-world").css("color", "#fc0");
						j=obj.key2.length;
					}
				}
				
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					for (var k=0; k<obj.key3.length; k++){
					
					if(obj.key1[key].title==obj.key3[k]){
						$("#"+String(arr.indexOf(key)+1)).css("color", "#09f");
						$("#"+String(arr.indexOf(key)+1)).hover(function(){
						$(this).css("color", "#09f");
						}, function(){
						$(this).css("color", "#09f");
					});
						k=obj.key3.length;
					}
					else{
					$("#"+String(arr.indexOf(key)+1)).hover(function(){
					$(this).css("color", "#09f");
					}, function(){
					$(this).css("color", "#ddd");
					});
					}
					}
					
				});
				
			}
		});
	});
	
	$('#politics').on('click', function(){
		$.ajax({
			url: '/politics',
			type: 'GET',
			success: function(obj){
				newsObj=obj.key1;
				str = '<h2 class="text-center">Politics\t<i id="topic-politics" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					if(typeof obj.key1[key].title=="undefined"){
						obj.key1[key].img = "http://i68.tinypic.com/2i9i0l5.jpg";
						obj.key1[key].title = "Click here to read this article";
					}
					
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="one"">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
				});
				$('#field').html(str);
				
				for (var j=0; j<obj.key2.length; j++){
				
					if(obj.key2[j]=="topic-politics"){
						$("#topic-politics").css("color", "#fc0");
						j=obj.key2.length;
					}
				}
				
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					for (var k=0; k<obj.key3.length; k++){
					
					if(obj.key1[key].title==obj.key3[k]){
						$("#"+String(arr.indexOf(key)+1)).css("color", "#09f");
						$("#"+String(arr.indexOf(key)+1)).hover(function(){
						$(this).css("color", "#09f");
						}, function(){
						$(this).css("color", "#09f");
					});
						k=obj.key3.length;
					}
					else{
					$("#"+String(arr.indexOf(key)+1)).hover(function(){
					$(this).css("color", "#09f");
					}, function(){
					$(this).css("color", "#ddd");
					});
					}
					}
					
				});
				
			}
		});
	});
	
	$('#invest').on('click', function(){
		$.ajax({
			url: '/invest',
			type: 'GET',
			success: function(obj){
				newsObj=obj.key1;
				str = '<h2 class="text-center">Investigations\t<i id="topic-investigation" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					if(typeof obj.key1[key].title=="undefined"){
						obj.key1[key].img = "http://i68.tinypic.com/2i9i0l5.jpg";
						obj.key1[key].title = "Click here to read this article";
					}
					
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="one">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
				});
			$('#field').html(str);
				
				for (var j=0; j<obj.key2.length; j++){
				
					if(obj.key2[j]=="topic-investigation"){
						$("#topic-investigation").css("color", "#fc0");
						j=obj.key2.length;
					}
				}
				
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					for (var k=0; k<obj.key3.length; k++){
					
					if(obj.key1[key].title==obj.key3[k]){
						$("#"+String(arr.indexOf(key)+1)).css("color", "#09f");
						$("#"+String(arr.indexOf(key)+1)).hover(function(){
						$(this).css("color", "#09f");
						}, function(){
						$(this).css("color", "#09f");
					});
						k=obj.key3.length;
					}
					else{
					$("#"+String(arr.indexOf(key)+1)).hover(function(){
					$(this).css("color", "#09f");
					}, function(){
					$(this).css("color", "#ddd");
					});
					}
					}
					
				});
				
			}
		});
	});
	
	$('#health').on('click', function(){
		$.ajax({
			url: '/health',
			type: 'GET',
			success: function(obj){
				newsObj=obj.key1;
				str = '<h2 class="text-center">Health\t<i id="topic-health" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					if(typeof obj.key1[key].title=="undefined"){
						obj.key1[key].img = "http://i68.tinypic.com/2i9i0l5.jpg";
						obj.key1[key].title = "Click here to read this article";
					}
					
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="one">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
				});
				$('#field').html(str);
				
				for (var j=0; j<obj.key2.length; j++){
				
					if(obj.key2[j]=="topic-health"){
						$("#topic-health").css("color", "#fc0");
						j=obj.key2.length;
					}
				}
				
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					for (var k=0; k<obj.key3.length; k++){
					
					if(obj.key1[key].title==obj.key3[k]){
						$("#"+String(arr.indexOf(key)+1)).css("color", "#09f");
						$("#"+String(arr.indexOf(key)+1)).hover(function(){
						$(this).css("color", "#09f");
						}, function(){
						$(this).css("color", "#09f");
					});
						k=obj.key3.length;
					}
					else{
					$("#"+String(arr.indexOf(key)+1)).hover(function(){
					$(this).css("color", "#09f");
					}, function(){
					$(this).css("color", "#ddd");
					});
					}
					}
					
				});
				
			}
		});
	});
	
	$('#tech').on('click', function(){
		$.ajax({
			url: '/tech',
			type: 'GET',
			success: function(obj){
				newsObj=obj.key1;
				str = '<h2 class="text-center">Tech\t<i id="topic-tech" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					if(typeof obj.key1[key].title=="undefined"){
						obj.key1[key].img = "http://i68.tinypic.com/2i9i0l5.jpg";
						obj.key1[key].title = "Click here to read this article";
					}
					
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="one">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
				});
				$('#field').html(str);
				
				for (var j=0; j<obj.key2.length; j++){
				
					if(obj.key2[j]=="topic-tech"){
						$("#topic-tech").css("color", "#fc0");
						j=obj.key2.length;
					}
				}
				
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					for (var k=0; k<obj.key3.length; k++){
					
					if(obj.key1[key].title==obj.key3[k]){
						$("#"+String(arr.indexOf(key)+1)).css("color", "#09f");
						$("#"+String(arr.indexOf(key)+1)).hover(function(){
						$(this).css("color", "#09f");
						}, function(){
						$(this).css("color", "#09f");
					});
						k=obj.key3.length;
					}
					else{
					$("#"+String(arr.indexOf(key)+1)).hover(function(){
					$(this).css("color", "#09f");
					}, function(){
					$(this).css("color", "#ddd");
					});
					}
					}
					
				});
				
			}
		});
	});
	
	$('#science').on('click', function(){
		$.ajax({
			url: '/science',
			type: 'GET',
			success: function(obj){
				newsObj=obj.key1;
				str = '<h2 class="text-center">Science\t<i id="topic-science" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					if(typeof obj.key1[key].title=="undefined"){
						obj.key1[key].img = "http://i68.tinypic.com/2i9i0l5.jpg";
						obj.key1[key].title = "Click here to read this article";
					}
					
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="one">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
				});
				$('#field').html(str);
				
				for (var j=0; j<obj.key2.length; j++){
				
					if(obj.key2[j]=="topic-science"){
						$("#topic-science").css("color", "#fc0");
						j=obj.key2.length;
					}
				}
				
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					for (var k=0; k<obj.key3.length; k++){
					
					if(obj.key1[key].title==obj.key3[k]){
						$("#"+String(arr.indexOf(key)+1)).css("color", "#09f");
						$("#"+String(arr.indexOf(key)+1)).hover(function(){
						$(this).css("color", "#09f");
						}, function(){
						$(this).css("color", "#09f");
					});
						k=obj.key3.length;
					}
					else{
					$("#"+String(arr.indexOf(key)+1)).hover(function(){
					$(this).css("color", "#09f");
					}, function(){
					$(this).css("color", "#ddd");
					});
					}
					}
					
				});
				
			}
		});
	});
	
	$('#popc').on('click', function(){
		$.ajax({
			url: '/popculture',
			type: 'GET',
			success: function(obj){
				newsObj=obj.key1;
				str = '<h2 class="text-center">Pop-Culture\t<i id="topic-pop-culture" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					if(typeof obj.key1[key].title=="undefined"){
						obj.key1[key].img = "http://i68.tinypic.com/2i9i0l5.jpg";
						obj.key1[key].title = "Click here to read this article";
					}
					
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="one">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
				});
				$('#field').html(str);
				
				for (var j=0; j<obj.key2.length; j++){
				
					if(obj.key2[j]=="topic-pop-culture"){
						$("#topic-pop-culture").css("color", "#fc0");
						j=obj.key2.length;
					}
				}
				
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					for (var k=0; k<obj.key3.length; k++){
					
					if(obj.key1[key].title==obj.key3[k]){
						$("#"+String(arr.indexOf(key)+1)).css("color", "#09f");
						$("#"+String(arr.indexOf(key)+1)).hover(function(){
						$(this).css("color", "#09f");
						}, function(){
						$(this).css("color", "#09f");
					});
						k=obj.key3.length;
					}
					else{
					$("#"+String(arr.indexOf(key)+1)).hover(function(){
					$(this).css("color", "#09f");
					}, function(){
					$(this).css("color", "#ddd");
					});
					}
					}
					
				});
				
			}
		});
	});
	
	$('#lifestyle').on('click', function(){
		$.ajax({
			url: '/lifestyle',
			type: 'GET',
			success: function(obj){
				newsObj=obj.key1;
				str = '<h2 class="text-center">Lifestyle\t<i id="topic-lifestyle" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					if(typeof obj.key1[key].title=="undefined"){
						obj.key1[key].img = "http://i68.tinypic.com/2i9i0l5.jpg";
						obj.key1[key].title = "Click here to read this article";
					}
					
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="one">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
				});
				$('#field').html(str);
				
				for (var j=0; j<obj.key2.length; j++){
				
					if(obj.key2[j]=="topic-lifestyle"){
						$("#topic-lifestyle").css("color", "#fc0");
						j=obj.key2.length;
					}
				}
				
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					for (var k=0; k<obj.key3.length; k++){
					
					if(obj.key1[key].title==obj.key3[k]){
						$("#"+String(arr.indexOf(key)+1)).css("color", "#09f");
						$("#"+String(arr.indexOf(key)+1)).hover(function(){
						$(this).css("color", "#09f");
						}, function(){
						$(this).css("color", "#09f");
					});
						k=obj.key3.length;
					}
					else{
					$("#"+String(arr.indexOf(key)+1)).hover(function(){
					$(this).css("color", "#09f");
					}, function(){
					$(this).css("color", "#ddd");
					});
					}
					}
					
				});
				
			}
		});
	});
	
	$('#business').on('click', function(){
		$.ajax({
			url: '/business',
			type: 'GET',
			success: function(obj){
				newsObj=obj.key1;
				str = '<h2 class="text-center">Business\t<i id="topic-business" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					if(typeof obj.key1[key].title=="undefined"){
						obj.key1[key].img = "http://i68.tinypic.com/2i9i0l5.jpg";
						obj.key1[key].title = "Click here to read this article";
					}
					
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="one">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
				});
				$('#field').html(str);
				
				for (var j=0; j<obj.key2.length; j++){
				
					if(obj.key2[j]=="topic-business"){
						$("#topic-business").css("color", "#fc0");
						j=obj.key2.length;
					}
				}
				
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					for (var k=0; k<obj.key3.length; k++){
					
					if(obj.key1[key].title==obj.key3[k]){
						$("#"+String(arr.indexOf(key)+1)).css("color", "#09f");
						$("#"+String(arr.indexOf(key)+1)).hover(function(){
						$(this).css("color", "#09f");
						}, function(){
						$(this).css("color", "#09f");
					});
						k=obj.key3.length;
					}
					else{
					$("#"+String(arr.indexOf(key)+1)).hover(function(){
					$(this).css("color", "#09f");
					}, function(){
					$(this).css("color", "#ddd");
					});
					}
					}
					
				});
				
			}
		});
	});
	
	$('#us').on('click', function(){
		$.ajax({
			url: '/us',
			type: 'GET',
			success: function(obj){
				newsObj=obj.key1;
				str = '<h2 class="text-center">US-News\t<i id="topic-us" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					if(typeof obj.key1[key].title=="undefined"){
						obj.key1[key].img = "http://i68.tinypic.com/2i9i0l5.jpg";
						obj.key1[key].title = "Click here to read this article";
					}
					
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="one">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><img src="' +
						obj.key1[key].img + '"></img></a></div><div class="col-md-5"><a href="' +
						obj.key1[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj.key1[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
				});
				
				$('#field').html(str);
				
				for (var j=0; j<obj.key2.length; j++){
				
					if(obj.key2[j]=="topic-us"){
						$("#topic-us").css("color", "#fc0");
						j=obj.key2.length;
					}
				}
				
				Object.getOwnPropertyNames(obj.key1).forEach(function(key) {
					
					for (var k=0; k<obj.key3.length; k++){
					
					if(obj.key1[key].title==obj.key3[k]){
						$("#"+String(arr.indexOf(key)+1)).css("color", "#09f");
						$("#"+String(arr.indexOf(key)+1)).hover(function(){
						$(this).css("color", "#09f");
						}, function(){
						$(this).css("color", "#09f");
					});
						k=obj.key3.length;
					}
					else{
					$("#"+String(arr.indexOf(key)+1)).hover(function(){
					$(this).css("color", "#09f");
					}, function(){
					$(this).css("color", "#ddd");
					});
					}
					}
					
				});
				
		}
	});

});

	$("#field").on("click", "i", function(){
		
		$.ajax({
		url:"/twitter",
		type:"POST",
		success: function(obj){
		
			if(obj.a==1){
				window.location="http://nbc-news-scrap.herokuapp.com/auth/twitter";
			}
			else{
				userObj== obj;
				console.log(obj);
				$("#twitter").html("Profile Page");
			}
			
		}
	});
	
		id = $(this).prop('id');
		var number=id;
		
		if(id=="dislike"){
			id= $(this).prop("class");
			number= id.split(" ");
			id=likedArray[Number(number[2])].title;
			likedArray.splice(number[2],1);
			
				str ='<h2 class="text-center">Liked Articles</h2>';
				for(var j = 0; j < likedArray.length; j++){
					
				 	str += '<div class="news liked-news"><div class="row"><div class="col-md-5"><a href="' +
						likedArray[j].newsLink+ '" target="_blank"><img src="' +
						likedArray[j].img + '"></img></a></div><div class="col-md-5"><a href="' +
						likedArray[j].newsLink+ '" target="_blank"><p class="one">'+
						likedArray[j].title +'</p></a></div><div class="col-md-1"><i id="dislike" class="fa fa-times '+j+'"></i></div></div></div>';
					}
					
					$('#field').html(str);
					
			$.ajax({
				url: "/disliked",
				type:"POST",
				data: {
					disliked: id
				}
			});
			
			return;
		}
		else if(id==1){
			id="one";
			console.log(newsObj[id].title);
		}
		else if(id==2){
			id="two";
			console.log(newsObj[id].title);
			
		}
		else if(id==3){
			id="three";
			console.log(newsObj[id].title);
			
		}
		else if(id==4){
			id="four";
			console.log(newsObj[id].title);
			
		}
		else if(id==5){
			id="five";
			console.log(newsObj[id].title);
			
		}
		else if(id==6){
			id="six";
			console.log(newsObj[id].title);
			
		}
		else if(id==7){
			id="seven";
			console.log(newsObj[id].title);
			
		}
		else if(id==8){
			id="eight";
			console.log(newsObj[id].title);
			
		}
		else if(id==9){
			id="nine";
			console.log(newsObj[id].title);
			
		}
		else{
			console.log(id);
			
			$.ajax({
				url:"/favourite",
				type:"POST",
				data:{
					topic: id
				},
				success: function(topicData){
					
					$("#"+id).css("color", "#ddd");
					
					for (var j=0; j<topicData.length; j++){
					
					if(topicData[j]==id){
						
					$("#"+id).css("color", "#fc0");
					
					$("#"+id).hover(function(){
					$(this).css("color", "#fc0");
					}, function(){
					$(this).css("color", "#fc0");
					});
					
						j=topicData.length;
						console.log("favourite topic");
					}
					else{
						$("#"+id).css("color", "#ddd");
					$("#"+id).hover(function(){
					$(this).css("color", "#fc0");
					}, function(){
					$(this).css("color", "#ddd");
					});
					}	
					}
				}
			});
			
			return;
		}
		
		$.ajax({
			url:"/likes",
			type:"POST",
			data:{
				newsLink: newsObj[id].newsLink,
				img: newsObj[id].img,
				title: newsObj[id].title
			},
			success: function(likes){
				
				$("#"+number).css("color", "#ddd");
				
				Object.getOwnPropertyNames(newsObj).forEach(function(key) {
					
				for (var k=0; k<likes.length; k++){
					
					if(newsObj[key].title==likes[k]){
						$("#"+String(arr.indexOf(key)+1)).css("color", "#09f");
						console.log("success!!!");
						$("#"+String(arr.indexOf(key)+1)).hover(function(){
						$(this).css("color", "#09f");
						}, function(){
						$(this).css("color", "#09f");
						});
						k=likes.length;
					}
					else{
						$("#"+String(arr.indexOf(key)+1)).hover(function(){
						$(this).css("color", "#09f");
						}, function(){
						$(this).css("color", "#ddd");
						});
					}
				}
					
				});
			}
		});
		
	});
	
});

/*
$(window).on("beforeunload", function(){
	
		$.ajax({
			url:"/",
			type:"POST",
			dataType:"json",
			data: {a:user_obj}
		});
	
});
*/
$(window).on("load", function(){
	
	$.ajax({
		url:"/twitter",
		type:"POST",
		success: function(obj){
		
			if(obj.a==1){
				console.log("User is not logged in");
			}
			else{
				userObj== obj;
				console.log(obj);
				$("#twitter").html("Profile Page");
			}
			
		}
	});
	
});