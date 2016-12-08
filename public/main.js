$(document).ready(function(){
	
	$('#world').on('click', function(){
		$.ajax({
			url: '/world',
			type: 'GET',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('#politics').on('click', function(){
		$.ajax({
			url: '/politics',
			type: 'GET',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('#invest').on('click', function(){
		$.ajax({
			url: '/invest',
			type: 'GET',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('#health').on('click', function(){
		$.ajax({
			url: '/health',
			type: 'GET',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('#tech').on('click', function(){
		$.ajax({
			url: '/tech',
			type: 'GET',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('#science').on('click', function(){
		$.ajax({
			url: '/science',
			type: 'GET',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('#popc').on('click', function(){
		$.ajax({
			url: '/popculture',
			type: 'GET',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('#lifestyle').on('click', function(){
		$.ajax({
			url: '/lifestyle',
			type: 'GET',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('#business').on('click', function(){
		$.ajax({
			url: '/business',
			type: 'GET',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('#us').on('click', function(){
		$.ajax({
			url: '/us',
			type: 'GET',
			success: function(result){
				console.log(result);
			}
		});
	});
	
});