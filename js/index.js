$(function(){
    $(".video-img-box img").on("click",function(){
        $(this).hide();
        $(this).next().attr("src","https://www.youtube.com/embed/u1OVbU4EdwI?autoplay=1&mute=1").show();
        $(".playbtn").hide();
    });
    $(".playbtn").on("click",function(){
        $(this).hide;
        $(".video-img-box img").hide();
        $(this).prev().attr("src","https://www.youtube.com/embed/u1OVbU4EdwI?autoplay=1&mute=1").show();
    });

    $(".second-call-book-title li").click(function(){
        var num=$(this).index();
        // var num1=$(this).addClass("click");

        $(this).addClass("click");
        $(this).siblings().removeClass("click");
        $(".book-click").eq(num).fadeIn();
        $(".book-click").eq(num).siblings().fadeOut();

    });
    $(".second-call-book-title li:eq(0)").trigger("click");
});