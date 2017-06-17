$(document).ready(function() {

	$("div.menu").hover(function() {
		$(this).children("div.lev_2").fadeIn(100);
	}, function(){
		$("div.lev_2").fadeOut(100);

	})

	$("div.levc_1").click(function() {
		$("div.levc_2").slideToggle(100);
	})
	
	$("div.con_x").click(function() {
		$("div.levc_2").slideToggle(100);
	})
	

})