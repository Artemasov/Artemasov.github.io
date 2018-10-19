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

$('img.Prechu_desktop').on('click',function(){
	document.location.href = 'https://artemasov.github.io/Portfolio_site_1/';
})
	$('img.Prechu_desktop').mouseenter(function(){
		$('img.Prechu_desktop').attr('src','image/Prechu_desktop_eyes.jpg');

		

});

	$('img.Prechu_desktop').mouseleave(function(){
		$('img.Prechu_desktop').attr('src','image/Prechu_desktop.jpg');
	});


	});
