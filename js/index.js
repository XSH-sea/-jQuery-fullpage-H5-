$(function () {

    //初始化fullpage组件，并设置每一个屏幕颜色
    $(".container").fullpage({
        //参数配置
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation:true,//显示指示器
        afterLoad:function (link,index) {

            $(".section").eq(index-1).addClass("now");


        },
        onLeave:function(index,nextIndex,direction){
            if(index==2&&nextIndex==3){
                $(".section").eq(index-1).addClass("leaved");
            }else if(index==3&&nextIndex==4){
                $(".section").eq(index-1).addClass("leaved");
            }else if (index==5&&nextIndex==6){
                $(".section").eq(index-1).addClass("leaved");
                $(".screen06 .box").addClass("show");
            }else if (index==6&&nextIndex==7){
                $(".screen07 .star img").each(function (i,item) {
                    $(this).delay(i*0.5*1000).fadeIn();
                });
            }
        },

        afterRender: function () {
            //点击切换下一页
            $(".more").on("click",function () {
               $.fn.fullpage.moveSectionDown();
            });
            //第四页购物车动画结束之后执行收获地址的动画
            $(".screen04 .cart").on("transitionend",function () {
                $(".screen04 .address").fadeIn(300).children().eq(1).fadeIn(1000);
                $(".screen04 .text").addClass("show");
            })

            //第八屏幕功能
            //1、手跟着鼠标动
            $(".screen08").on("mousemove",function (e) {
                $(this).find(".hand").css({
                    left:e.clientX-170,
                    top:e.clientY-30
                })
            });

            //2、点击再来一次回到第一页重新开始
            $(".screen08 .again").on("click",function () {
                $(".show,.now,.leaved").removeClass("show").removeClass("now").removeClass("leaved")
                $.fn.fullpage.moveTo(1);
            });

        },

        //页面切换时间
        scrollingSpeed: 1000,


    });
});

