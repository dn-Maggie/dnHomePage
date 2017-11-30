// JavaScript Document
$(document).ready(function(e) {
/*顶部菜单栏hover效果js开始*/
$(".tm_li").hover(function () {
    $(this).css("background-color","#090a3a");
    $(this).find("span").css("color","white");
    $(".mask_tm").css("display", "block");
    var _for = $(this).attr('for');
    $('.mask_tm ' + _for).show().siblings().hide();
},function () {
    $(".mask_tm").css("display", "none");
    $(this).css("background-color","white");
    $(this).find("span").css("color","#3c3c3c");
});
$(".mask_tm").hover(function () {
    $(this).css("display","block")
},function () {
    $(this).css("display","none")
});

$(".o_e_img_box-list").dnenvironment();
/*顶部菜单栏hover效果js结束*/
/*优秀学员展示轮播图jS开始*/
     var _index=0;
     $(".wrap_scroll .arrow_left").on("click",function(){
        _index--;
        if(_index<0){
            _index=5;
           $(".scroll ul").css({"left":-500*6+"px"});
        }
        _scroll(_index);
    })

    $(".wrap_scroll .arrow_right").on("click",function(){
        _index++;
        if(_index>6){
            _index=1;
            $(".scroll ul").css({"left":0+"px"});
        }
        _scroll(_index);

        if(_index==6){
            $(".wrap_scroll .tab .tab_list").eq(0).addClass('active').siblings().removeClass('active');
        }
    })
    function _scroll(index){
        $(".scroll ul").animate({"left":-500*index+"px"});
        $(".wrap_scroll .tab .tab_list").eq(index).addClass("active").siblings().removeClass("active");
    }
/*优秀学员展示轮播图jS结束*/

/*导师团队展示轮播图jS开始*/
var _tutorIndex=0;
function tutorSlide(index){
    $(".mainlist").animate({"left":-index*302+"px"});
}

$(".mainlist").css("width",402*28+"px");
$(".og_prev").on("click",function(){
    _tutorIndex--;
    if(_tutorIndex<0){
        _tutorIndex=23;
        $(".mainlist").css("left",-24*302+"px");
    }
    tutorSlide(_tutorIndex);
})

$(".og_next").on("click",function(){
    _tutorIndex++;
    if(_tutorIndex>24){
        _tutorIndex=1;
        $(".mainlist").css("left",0+"px");
    }
    tutorSlide(_tutorIndex);
    console.log(_tutorIndex);
    console.log($(".mainlist").width());
})
/*导师团队展示轮播图jS结束*/

/*学员心声jS*/
var timer;
autoPlay();
$('.student_voice_item').hover(function(){
    clearInterval(timer);
});
$('.student_voice_item').mouseout(function(){
    autoPlay();
})
function autoPlay() {
    clearInterval(timer);
//设置定时器实现不停上移
 timer = setInterval(function(){
 //把整个内容的列表div整体往上移动一个标题的高度动画
        $(".student_voice_item_content").eq(0).animate({marginTop:'-78px'},"slow",function(){
            $(this).children('li').eq(0).appendTo($(this));
            $(this).css('margin-top',0);
        });
     $(".student_voice_item_content").eq(1).animate({marginTop:'-78px'},"slow",function(){
         $(this).children('li').eq(0).appendTo($(this));
         $(this).css('margin-top',0);
     });
     $(".student_voice_item_content").eq(2).animate({marginTop:'-78px'},"slow",function(){
         $(this).children('li').eq(0).appendTo($(this));
         $(this).css('margin-top',0);
     });
    },3000);
 }
/*==============================学员心声jS结束========================*/

    $(".hiden_img").hide();

    $(".c_i_3").hover(function () {
        $(".hiden_img").show()
    }, function () {
        $(".hiden_img").hide()
    });
})
