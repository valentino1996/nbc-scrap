$(document).ready(function(){
	
	$('#world').on('click', function(){
		$.ajax({
			url: '/world',
			type: 'GET',
			dataType: 'json',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('#politics').on('click', function(){
		$.ajax({
			url: '/politics',
			type: 'GET',
			dataType: 'json',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('#invest').on('click', function(){
		$.ajax({
			url: '/invest',
			type: 'GET',
			dataType: 'json',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('#health').on('click', function(){
		$.ajax({
			url: '/health',
			type: 'GET',
			dataType: 'json',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('#tech').on('click', function(){
		$.ajax({
			url: '/tech',
			type: 'GET',
			dataType: 'json',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('#science').on('click', function(){
		$.ajax({
			url: '/science',
			type: 'GET',
			dataType: 'json',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('#popc').on('click', function(){
		$.ajax({
			url: '/popculture',
			type: 'GET',
			dataType: 'json',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('#lifestyle').on('click', function(){
		$.ajax({
			url: '/lifestyle',
			type: 'GET',
			dataType: 'json',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('#business').on('click', function(){
		$.ajax({
			url: '/business',
			type: 'GET',
			dataType: 'json',
			success: function(result){
				console.log(result);
			}
		});
	});
	
	$('#us').on('click', function(){
		$.ajax({
			url: '/us',
			type: 'GET',
			dataType: 'json',
			success: function(result){
				console.log(result);
			}
		});
	});
	
});