$(function(){
    $(".video-img-box img").on("click",function(){
        $(this).hide();
        $(this).next().show();
        $(".playbtn").hide();
    });
    $(".playbtn").on("click",function(){
        $(this).hide;
        $(".video-img-box img").hide();
        $(this).prev().show();
    });

    $(".second-call-book-title li").click(function(){
        var num=$(this).index();

        $(this).children().addClass("click");
        $(this).siblings().children().removeClass("click");
        $(".book-click").eq(num).fadeIn();
        $(".book-click").eq(num).siblings().fadeOut();

    });
    $(".second-call-book-title li:eq(0)").trigger("click");


    $(".audiobook-list ul li").click(function(){
        var clicknum=$(this).index();

        $(this).addClass("audiobook-list-click");
        $(this).siblings().removeClass("audiobook-list-click");
        $(".audiobook-main-wrap").eq(clicknum).show();
        $(".audiobook-main-wrap").eq(clicknum).siblings().hide();

    });

    $(".review-wrap img").on("click",function(){
        $(this).hide();
        $(this).next().show();
        $(".playbtn1").hide();
    });
    $(".playbtn1").click(function(){
        $(this).hide();
        $(".review-img-box img").hide();
        $(this).prev().show()
    });

    $(".qna-list li").click(function(){
        $(this).children(".answer").slideToggle(250);
        $(this).children().children(".openbtn").toggleClass("openbtn-rotate");
    });

});
