$(document).ready(function() {
	//Center p.Project head text
	var widthResH = $('h1.project_text_main').innerWidth()/2;
	widthResH = 0-widthResH;
	$('h1.project_text_main').css('marginLeft',widthResH)
	
	//Center p.About me head text
	var widthResM=$('#text_main_me').innerWidth()/2;
	widthResM=0-widthResM;
	$('#text_main_me').css('marginLeft',widthResM);
	
	//constant for animate scroll
	var scroling_1 = $('.banner').height()+315;

	var scroling_2 = $('.banner').height()+315+$('div.About_me.border_line').height()+$('div.Project.border_line').height();

	var scroling_3 = $('body').height();
	//Animate main buttons 
	$('p.text_banner').animate({
		marginLeft: '0vw'
	},500,'linear', $('.button_project').animate({
		marginLeft:'0vw'
	},1000,'swing'));
	//Scrolling to Project
	$('.button_project').click(function(){
		$('html,body').animate({
			scrollTop: scroling_1
		},1000);
		});
	//Scrolling to Project - text button
 $('p.top_menu_project').click(function(){
		$('html,body').animate({
			scrollTop: scroling_1
		},1000)
	});

 	//Scrolling to About me - text button
 	$('p.top_menu_me').click(function(){
 		$('html,body').animate({
 			scrollTop: scroling_2
 		},1000);
 	});

 	$('p.top_menu_contact').click(function(){
 		$('html,body').animate({
 			scrollTop: scroling_3
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
