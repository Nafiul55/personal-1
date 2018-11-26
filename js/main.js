$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 40){
			$('#scroll-top-btn').fadeIn();
		}	else{
			$('#scroll-top-btn').fadeOut();
		}
		
	});

	$("#scroll-top-btn").click(function(){
		$('html ,body').animate({scrollTop :0},800);
	});
});