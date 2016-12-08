var user_obj = {};

$(document).ready(function(){
	
	$('#twitter').on('click', function(){
		if(user_obj = {}){
			window.location = 'http://127.0.0.1:8080/auth/twitter';
		}else{
		$.ajax({
			url: '/twitter',
			type: 'POST',
			dataType: 'json',
			success: function(obj){
				user_obj = obj;
				
			}
		});
		}
	});
	
	$('#world').on('click', function(){
		$.ajax({
			url: '/world',
			type: 'GET',
			success: function(obj){
				str = '<h2 class="text-center">World</h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key=="one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-7"><a href="' + obj[key].newsLink+ '" target="_blank"><p id="one">'+ obj[key].title +'</p></a></div></div></div>';
					}
					else{
					str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-7"><a href="' + obj[key].newsLink+ '" target="_blank"><p>'+ obj[key].title +'</p></a></div></div></div>';
					}
				});
				$('#field').html(str);
			}
		});
	});
	
	$('#politics').on('click', function(){
		$.ajax({
			url: '/politics',
			type: 'GET',
			success: function(obj){
				str = '<h2 class="text-center">Politics</h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					console.log(key);
					str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-7"><a href="' + obj[key].newsLink+ '" target="_blank"><p>'+ obj[key].title +'</p></a></div></div></div>';
				});
				$('#field').html(str);
			}
		});
	});
	
	$('#invest').on('click', function(){
		$.ajax({
			url: '/invest',
			type: 'GET',
			success: function(obj){
				str = '<h2 class="text-center">Investigations</h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					console.log(key);
					str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-7"><a href="' + obj[key].newsLink+ '" target="_blank"><p>'+ obj[key].title +'</p></a></div></div></div>';
				});
				$('#field').html(str);
			}
		});
	});
	
	$('#health').on('click', function(){
		$.ajax({
			url: '/health',
			type: 'GET',
			success: function(obj){
				str = '<h2 class="text-center">Health</h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					console.log(key);
					str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-7"><a href="' + obj[key].newsLink+ '" target="_blank"><p>'+ obj[key].title +'</p></a></div></div></div>';
				});
				$('#field').html(str);
			}
		});
	});
	
	$('#tech').on('click', function(){
		$.ajax({
			url: '/tech',
			type: 'GET',
			success: function(obj){
				str = '<h2 class="text-center">Tech</h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					console.log(key);
					str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-7"><a href="' + obj[key].newsLink+ '" target="_blank"><p>'+ obj[key].title +'</p></a></div></div></div>';
				});
				$('#field').html(str);
			}
		});
	});
	
	$('#science').on('click', function(){
		$.ajax({
			url: '/science',
			type: 'GET',
			success: function(obj){
				str = '<h2 class="text-center">Science</h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					console.log(key);
					str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-7"><a href="' + obj[key].newsLink+ '" target="_blank"><p>'+ obj[key].title +'</p></a></div></div></div>';
				});
				$('#field').html(str);
			}
		});
	});
	
	$('#popc').on('click', function(){
		$.ajax({
			url: '/popculture',
			type: 'GET',
			success: function(obj){
				str = '<h2 class="text-center">Pop-Culture</h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					console.log(key);
					str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-7"><a href="' + obj[key].newsLink+ '" target="_blank"><p>'+ obj[key].title +'</p></a></div></div></div>';
				});
				$('#field').html(str);
			}
		});
	});
	
	$('#lifestyle').on('click', function(){
		$.ajax({
			url: '/lifestyle',
			type: 'GET',
			success: function(obj){
				str = '<h2 class="text-center">Lifestyle</h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					console.log(key);
					str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-7"><a href="' + obj[key].newsLink+ '" target="_blank"><p>'+ obj[key].title +'</p></a></div></div></div>';
				});
				$('#field').html(str);
			}
		});
	});
	
	$('#business').on('click', function(){
		$.ajax({
			url: '/business',
			type: 'GET',
			success: function(obj){
				str = '<h2 class="text-center">Business</h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					console.log(key);
					str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-7"><a href="' + obj[key].newsLink+ '" target="_blank"><p>'+ obj[key].title +'</p></a></div></div></div>';
				});
				$('#field').html(str);
			}
		});
	});
	
	$('#us').on('click', function(){
		$.ajax({
			url: '/us',
			type: 'GET',
			success: function(obj){
				str = '<h2 class="text-center">US-News</h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					console.log(key);
					str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-7"><a href="' + obj[key].newsLink+ '" target="_blank"><p>'+ obj[key].title +'</p></a></div></div></div>';
				});
				$('#field').html(str);
			}
		});
	});
	
});

$(window).on("beforeunload", function(){
	//if(user_obj=={}){
		
	//}
	//else{
		$.ajax({
			url:"/",
			type:"POST",
			dataType:"json",
			data: {a:user_obj}
		});
	//}
});

$(window).on("load", function(){
	
	console.log(user_obj);
		
	$.ajax({
		url:"/",
		type:"POST",
		dataType:"json",
		success: function(obj){
				user_obj = obj;
				console.log(user_obj);
			}
		});
		
	});