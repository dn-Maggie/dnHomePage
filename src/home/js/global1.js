var mySwiper2 = new Swiper('#student', {
	autoplay: 5000,//可选选项，自动滑动
	pagination:'.swiper-pagination',
});
/* 导航条运动效果  */
var nav_sel = $('#fix-list .fix-sel').eq(0);
if( nav_sel.length==0) nav_sel = $('#fix-list .fix-item').eq(0);
var nav_ref = $('#fix-list .fix-move');
var nav_pace = 30,nav_s_p = 70,nav_l = 10;
if( nav_sel.length != 0 ) nav_ref.fadeIn(10).css({'left':nav_sel.position().left,'width':nav_sel.width()});
$('#fix-list .fix-item:not(".fix-sel")').each(function(){
	var this_l = $(this).position().left,
		sel_l = (nav_sel.length==0?0:nav_sel.position().left),
		offset = (this_l>sel_l)?nav_l:-nav_l;
	$(this).hover(function(){
		var left = $(this).position().left,width = $(this).width();
		nav_ref.stop(true,false).animate({left:left+offset,width:width},nav_pace)
					.animate({'left':left-offset},nav_s_p)
					.animate({'left':left},nav_s_p);
	},function(){
		var left = nav_sel.position().left,width = nav_sel.width();
		nav_ref.stop(true,false).animate({left:left+offset,width:width},nav_pace)
					.animate({'left':left-offset},nav_s_p)
					.animate({'left':left},nav_s_p);
	});
});


$("#returnTop").click(function () {
    var speed=200;//滑动的速度
    $('body,html').animate({ scrollTop: 0 }, speed);
    return false;
});
$(window).scroll(function(){
  	if ($(document).scrollTop()<=300){
    	$(".side-bar").hide();
    } else {
    	$(".side-bar").show();
    }
});
$("#wechat-show").hover(function(){
	$(this).children('img').show();
}, function(){
	$(this).children('img').hide();
})	

