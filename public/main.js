var user_obj = {};
var i;
var id;
var newsObj;
$(document).ready(function(){
	
	$('#twitter').on('click', function(){
		/*
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
		}*/
		
		
		
	});
	
	$('#world').on('click', function(){
		$.ajax({
			url: '/world',
			type: 'GET',
			success: function(obj){
				newsObj=obj;
				str = '<h2 class="text-center">World\t<i id="topic-world" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="one">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
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
				newsObj=obj;
				str = '<h2 class="text-center">Politics\t<i id="topic-politics" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="one"">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
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
				newsObj=obj;
				str = '<h2 class="text-center">Investigations\t<i id="topic-investigation" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="one">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
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
				newsObj=obj;
				str = '<h2 class="text-center">Health\t<i id="topic-health" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="one">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
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
				newsObj=obj;
				str = '<h2 class="text-center">Tech\t<i id="topic-tech" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="one">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
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
				newsObj=obj;
				str = '<h2 class="text-center">Science\t<i id="topic-science" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="one">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
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
				newsObj=obj;
				str = '<h2 class="text-center">Pop-Culture\t<i id="topic-pop-culture" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="one">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
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
				newsObj=obj;
				str = '<h2 class="text-center">Lifestyle\t<i id="topic-lifestyle" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="one">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
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
				newsObj=obj;
				str = '<h2 class="text-center">Business\t<i id="topic-business" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="one">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
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
				newsObj=obj;
				str = '<h2 class="text-center">US-News\t<i id="topic-us" class="fa fa-star star-btn"></i></h2>';
				i=1;
				Object.getOwnPropertyNames(obj).forEach(function(key) {
					if(key == "one"){
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="one">'
						+ obj[key].title +'</p></a></div><div class="col-md-1"><i id="1" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
					else{
						i++;
						str += '<div class="news"><div class="row"><div class="col-md-1"></div><div class="col-md-3"><a href="' +
						obj[key].newsLink+ '" target="_blank"><img src="' +
						obj[key].img + '"></img></a></div><div class="col-md-6"><a href="' +
						obj[key].newsLink+ '" target="_blank"><p class="secondary">'+
						obj[key].title +'</p></a></div><div class="col-md-1"><i id="'+
						i+'" class="fa fa-thumbs-up like-btn"></i></div></div></div>';
					}
				});
				
				$('#field').html(str);
		}
	});

});


	$("#field").on("click", "i", function(){	
	
		id = $(this).prop('id');
		
		if(id==1){
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
		}
		
	});
	
});

/*
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
	*/