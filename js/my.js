$(document).ready(function(){
	$('.buttonContainer').click(function(){
		$('.popup').fadeIn('slow');
	});
	$('.close').click(function(){
		$('.popup').fadeOut('slow');
	});
});