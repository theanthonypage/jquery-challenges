
//challenge 1 mobile nav
$("#menu-btn").click(function(){
	$(".nav-main").slideToggle();
});

// accordion panels
$(".panel-content").hide();

$(".panel-title").click(function(){
	$(this).next().slideToggle();
});