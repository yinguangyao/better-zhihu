$(function(){
	$(".zu-main-sidebar").hide();
	$(".zu-main-content-inner").css({
		"margin":"0 auto!important;",
		"width":"90%"
	});
	$("body").scroll(function() {
		if($(this).scrollTop()%1000 == 0) {
			$(".feed-item-hook").each(function() {
				$(this).find(".feed-title").each(function() {
					if($(this).html().toUpperCase().indexOf("lIVE") > 0) {
						$(this).hide();
					}
				})
			})
		}
	})
})