$(document).ready(function() {
	var widthResH = $('h1.project_text_main').innerWidth()/2;
	widthResH = 0-widthResH;
	$('h1.project_text_main').css('marginLeft',widthResH)
	
	var scroling = $('body').innerHeight()*0.4;
	$('p.text_banner').animate({
		marginLeft: '0vw'
	},500,'linear', $('.button_project').animate({
		marginLeft:'0vw'
	},1000,'swing'));
	
	$('.button_project').click(function(){
		$('html,body').animate({
			scrollTop: scroling
		},1000);
		});
var Prechu_img = $('img.Prechu_desktop');
	$('img.Prechu_desktop').mouseenter(function(){
    $('#Prechu').animate({
    	opacity: '0.2'
    },200,'swing',
    function(){
   
    $('#Prechu').attr('src','image/Prechu_desktop_eyes.jpg')
});

	
	

	
	
});
	$('img.Prechu_desktop').mouseleave(function(){
		$('img.Prechu_desktop').attr('src','image/Prechu_desktop.jpg');
	})


	});
