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
				str = '<h2 class="text-center">World\t<i class="fa fa-star star-btn"></i></h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="one">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="secondary">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
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
				str = '<h2 class="text-center">Politics\t<i class="fa fa-star star-btn"></i></h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="one"">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="secondary">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
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
				str = '<h2 class="text-center">Investigations\t<i class="fa fa-star star-btn"></i></h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="one">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="secondary">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
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
				str = '<h2 class="text-center">Health\t<i class="fa fa-star star-btn"></i></h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="one">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="secondary">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
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
				str = '<h2 class="text-center">Tech\t<i class="fa fa-star star-btn"></i></h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="one">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="secondary">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
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
				str = '<h2 class="text-center">Science\t<i class="fa fa-star star-btn"></i></h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="one">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="secondary">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
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
				str = '<h2 class="text-center">Pop-Culture\t<i class="fa fa-star star-btn"></i></h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="one">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="secondary">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
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
				str = '<h2 class="text-center">Lifestyle\t<i class="fa fa-star star-btn"></i></h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="one">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="secondary">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
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
				str = '<h2 class="text-center">Business\t<i class="fa fa-star star-btn"></i></h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="one">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="secondary">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
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
				str = '<h2 class="text-center">US-News\t<i class="fa fa-star star-btn"></i></h2>';
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="one">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' + obj[key].newsLink+ '" target="_blank"><img src="' + obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' + obj[key].newsLink+ '" target="_blank"><p class="secondary">'+ obj[key].title +'</p></a></div><div class="col-md-1"><i class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
				});
				$('#field').html(str);
			}
		});
	});
	
	$('.fa-start-o').on('click', function(){
		$.ajax({
			url: '/favourite',
			type: 'POST',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('.fa-thumbs-up').on('click', function(){
		$.ajax({
		url: '/like',
		type: 'POST',
		success: function(result){
			console.log(result);
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