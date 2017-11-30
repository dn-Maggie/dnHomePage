var mySwiper = new Swiper("#banner", {
    autoplay: 5E3,
    pagination: ".swiper-pagination"
}), mySwiper2 = new Swiper("#student", {
    autoplay: 5E3,
    pagination: ".swiper-pagination"
}), nav_sel = $("#fix-list .fix-sel").eq(0);
0 == nav_sel.length && (nav_sel = $("#fix-list .fix-item").eq(0));
var nav_ref = $("#fix-list .fix-move"), nav_pace = 30, nav_s_p = 70, nav_l = 10;
0 != nav_sel.length && nav_ref.fadeIn(10).css({left: nav_sel.position().left, width: nav_sel.width()});
$('#fix-list .fix-item:not(".fix-sel")').each(function () {
    var d = $(this).position().left, e = 0 == nav_sel.length ? 0 : nav_sel.position().left, b = d > e ? nav_l : -nav_l;
    $(this).hover(function () {
        var a = $(this).position().left, c = $(this).width();
        nav_ref.stop(!0, !1).animate({
            left: a + b,
            width: c
        }, nav_pace).animate({left: a - b}, nav_s_p).animate({left: a}, nav_s_p)
    }, function () {
        var a = nav_sel.position().left, c = nav_sel.width();
        nav_ref.stop(!0, !1).animate({
            left: a + b,
            width: c
        }, nav_pace).animate({left: a - b}, nav_s_p).animate({left: a}, nav_s_p)
    })
});
$("#returnTop").click(function () {
    $("body,html").animate({scrollTop: 0}, 200);
    return !1
});
$(window).scroll(function () {
    300 >= $(document).scrollTop() ? $(".side-bar").hide() : $(".side-bar").show()
});
$("#wechat-show").hover(function () {
    $(this).children("img").show()
}, function () {
    $(this).children("img").hide()
});