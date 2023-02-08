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
});