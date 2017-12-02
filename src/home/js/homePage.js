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
/*讲师团队图片滚动*/
$(".picbox").kxbdMarquee();
/*底部办公环境图片滚动*/
$(".o_e_img_box").kxbdMarquee();
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

/*导师团队展示轮播图jS开始，按钮切换模式*/
/*var _tutorIndex=0;
function tutorSlide(index){
    $(".mainlist").animate({"left":-index*242+"px"});/!*-index*（li的宽度+右边距）*!/
}

$(".mainlist").css("width",242*27+"px");/!*li的数量*!/
$(".og_prev").on("click",function(){
    _tutorIndex--;
    if(_tutorIndex<0){
        _tutorIndex=22;
        $(".mainlist").css("left",-23*242+"px");
    }
    tutorSlide(_tutorIndex);
})

$(".og_next").on("click",function(){
    _tutorIndex++;
    if(_tutorIndex>23){
        _tutorIndex=1;
        $(".mainlist").css("left",0+"px");
    }
    tutorSlide(_tutorIndex);
    console.log(_tutorIndex);
    console.log($(".mainlist").width());
})*!/*/
/*导师团队展示轮播图jS结束*/

/*学员心声jS*/
var timer;
autoPlay();
$('.student_voice_item').hover(function(){
    clearInterval(timer);
});
$('.student_voice_item').mouseout(function(){
    autoPlay();
});
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
});
/*滚动播放方法*/
$.fn.kxbdMarquee=function(options){
    var opts=$.extend({},$.fn.kxbdMarquee.defaults, options);

    return this.each(function(){
        var $marquee=$(this);				//滚动元素容器
        var _scrollObj=$marquee.get(0);		//滚动元素容器DOM
        var scrollW=$marquee.width();		//滚动元素容器的宽度
        var scrollH=$marquee.height();		//滚动元素容器的高度
        var $element=$marquee.children();	//滚动元素
        var $kids=$element.children();		//滚动子元素
        var scrollSize=0;					//滚动元素尺寸

        //滚动类型，1左右，0上下
        var _type=(opts.direction=="left"||opts.direction=="right") ? 1:0;

        //防止滚动子元素比滚动元素宽而取不到实际滚动子元素宽度
        $element.css(_type?"width":"height",10000);

        //获取滚动元素的尺寸
        if(opts.isEqual){
            scrollSize=$kids[_type?"outerWidth":"outerHeight"]()*$kids.length;
        }else{
            $kids.each(function(){
                scrollSize+=$(this)[_type?"outerWidth":"outerHeight"]();
            });
        };

        //滚动元素总尺寸小于容器尺寸，不滚动
        if(scrollSize<(_type?scrollW:scrollH)){return;};

        //克隆滚动子元素将其插入到滚动元素后，并设定滚动元素宽度
        $element.append($kids.clone()).css(_type?"width":"height",scrollSize*2);

        var numMoved=0;
        function scrollFunc(){
            var _dir=(opts.direction=="left"||opts.direction=="right") ? "scrollLeft":"scrollTop";
            if (opts.loop>0) {
                numMoved+=opts.scrollAmount;
                if(numMoved>scrollSize*opts.loop){
                    _scrollObj[_dir]=0;
                    return clearInterval(moveId);
                };
            };

            if(opts.direction=="left"||opts.direction=="up"){
                var newPos=_scrollObj[_dir]+opts.scrollAmount;
                if(newPos>=scrollSize){
                    newPos-=scrollSize;
                }
                _scrollObj[_dir]=newPos;
            }else{
                var newPos=_scrollObj[_dir]-opts.scrollAmount;
                if(newPos<=0){
                    newPos += scrollSize;
                };
                _scrollObj[_dir]=newPos;
            };
        };

        //滚动开始
        var moveId=setInterval(scrollFunc, opts.scrollDelay);

        //鼠标划过停止滚动
        $marquee.hover(function(){
            clearInterval(moveId);
        },function(){
            clearInterval(moveId);
            moveId=setInterval(scrollFunc, opts.scrollDelay);
        });
    });
};

$.fn.kxbdMarquee.defaults={
    isEqual:true,		//所有滚动的元素长宽是否相等,true,false
    loop: 0,			//循环滚动次数，0时无限
    direction: "left",	//滚动方向，"left","right","up","down"
    scrollAmount:1,		//步长
    scrollDelay:20		//时长

};

$.fn.kxbdMarquee.setDefaults=function(settings) {
    $.extend( $.fn.kxbdMarquee.defaults, settings );
};
