$(document).ready(function() {
	$('p.text_banner').animate({
		marginLeft: '0vw'
	},500,'linear', $('.button_project').animate({
		marginLeft:'0vw'
	},1000,'swing'));
	
	$('.button_project').click(function(){
		$('html,body').animate({
			scrollTop: '650vh'
		},1000);
	});
});