$(function(){
	$(".homepage-link").click(function(){
		var url=$(this).data("href");
		window.open(url);
	})
})