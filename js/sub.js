$(function(){
    // 당일배송 날짜 매일 변경되게 하기
    var today=new Date();
    var month=today.getMonth()+1;
    var date=today.getDate();
    var day=today.getDay();
    
    var today_day=day;
    
    switch(today_day){
        case 0 : day="일요일";
        break;
        case 1 : day="월요일";
        break;
        case 2: day="화요일";
        break;
        case 3: day="수요일";
        break;
        case 4: day="목요일";
        break;
        case 5: day="금요일";
        break;
        case 6: day="토요일";
        break;
    }
    $(".sec1-3-1 span").eq(1).html("<u>오늘(" +month+"/"+date+", "+day+")</u> 도착예정")

    // 수량 버튼 누르면 숫자 변경
    var input=document.getElementById("result");
    var result=Number(input.value);

    document.getElementById("minus").onclick=function(){
        result--;
        input.value=result;
        console.log(result);
        if(result<=0){
            alert("최소 1권 이상부터 구매 가능합니다");
            input.value=1;
            result=1;
        }
    }

    document.getElementById("plus").onclick=function(){
        result++;
        input.value=result;
    }


    // 많이 구매한 부분
    
    $(".manybuy-list ul li").click(function(){
        var mb_num=$(this).index();

        $(".with-buy ul").eq(mb_num).show();
        $(".with-buy ul").eq(mb_num).show().css("display","flex");
        $(".with-buy ul").eq(mb_num).siblings().hide();
        $(this).addClass("mb-click");
        $(this).siblings().removeClass("mb-click");
    });


    // 도서정보 탭 클릭 이벤트
    $(".choice-nav-wrap ul:nth-of-type(1) li").click(function(){
        $(this).children().addClass("cho-nav-font");
        $(this).siblings().children().removeClass("cho-nav-font");
        $(this).addClass("cho-nav-bg");
        $(this).siblings().removeClass("cho-nav-bg");
    });

    $(".bookcard-wrap").hover(function(){
        $(".prev").fadeIn();
        $(".next").fadeIn();
    }, function(){
        $(".prev").fadeOut();
        $(".next").fadeOut();
    });

    $(".prev").click(function(){
        $(".bookcard-list li:last").prependTo(".bookcard-list");
        // $(".bookcard-list").css("margin-left","calc(30px - 50%)");
        $(".bookcard-list").css("margin-left","-50%");
        $(".bookcard-list").animate({marginLeft:"0"},550);
    });
    $(".next").click(function(){
        
        $(".bookcard-list").animate({marginLeft:"-50%"},550, function(){
            $(".bookcard-list li:first").appendTo(".bookcard-list");
            $(".bookcard-list").css("margin-left","0");
        });
    });

    var count=0;
    $(".read-more").click(function(){
        count++;
        if(count%2==1){
            $(this).html('<span>접어두기 </span>');
        } else if(count%2==0){
            $(this).html('<span>펼쳐보기 </span>');
        }
        $(".hidebox").toggle();
        $(".authors-btn").toggleClass("authors-btn-rotate");
    });

    $(".authors-btn").click(function(){
        count++;
        if(count%2==1){
            $(this).prev().html('<span>접어두기 </span>');
        } else if(count%2==0){
            $(this).prev().html('<span>펼쳐보기 </span>');
        }
        $(".hidebox").toggle();
        $(this).toggleClass("authors-btn-rotate");
    });

    $(".com-review-textbox").click(function(){
        count++;
        if(count%2==1){
            $(this).next().children("button").html(`<span>접어두기 </span>`);
        } else if(count%2==0){
            $(this).next().children("button").html(`<span>펼쳐보기 </span>`);
        }
        $(".com-review-hidebox").toggle();
        $(".review-btn").toggleClass("review-btn-rotate");
        $(this).toggleClass("com-review-pointer");
    });
    $(".read-more1").click(function(){
        count++;
        if(count%2==1){
            $(this).html(`<span>접어두기 </span>`);
        } else if(count%2==0){
            $(this).html(`<span>펼쳐보기 </span>`);
        }
        $(".com-review-hidebox").toggle();
        $(".review-btn").toggleClass("review-btn-rotate");
        $(this).parent().prev().toggleClass("com-review-pointer");
    });
    $(".review-btn").click(function(){
        count++;
        if(count%2==1){
            $(this).prev().html(`<span>접어두기 </span>`);
        } else if(count%2==0){
            $(this).prev().html(`<span>펼쳐보기 </span>`);
        }
        $(".com-review-hidebox").toggle();
        $(this).toggleClass("review-btn-rotate");
        $(this).parent().prev().toggleClass("com-review-pointer");
    });


    $(".small-star1").click(function(){
        count++;
        if(count%2==1){
            $(this).attr("src","img1/sbluestar1.png");
            $(this).siblings().hide();
        } else if(count%2==0){
            $(this).attr("src","img1/graystar1.png");
            $(this).siblings().show();
        }
    });

    $(".small-star2").click(function(){
        count++;
        if(count%2==1){
            $(this).attr("src","img1/sbluestar2.png");
            $(this).siblings().hide();
        } else if(count%2==0){
            $(this).attr("src","img1/graystar1.png");
            $(this).siblings().show();
        }
    });
    $(".small-star3").click(function(){
        count++;
        if(count%2==1){
            $(this).attr("src","img1/sbluestar3.png");
            $(this).siblings().hide();
        } else if(count%2==0){
            $(this).attr("src","img1/graystar1.png");
            $(this).siblings().show();
        }
    });
    $(".small-star4").click(function(){
        count++;
        if(count%2==1){
            $(this).attr("src","img1/sbluestar4.png");
            $(this).siblings().hide();
        } else if(count%2==0){
            $(this).attr("src","img1/graystar1.png");
            $(this).siblings().show();
        }
    });
    $(".small-star5").click(function(){
        count++;
        if(count%2==1){
            $(this).attr("src","img1/sbluestar5.png");
            $(this).siblings().hide();
        } else if(count%2==0){
            $(this).attr("src","img1/graystar1.png");
            $(this).siblings().show();
        }
    });




    $(".korean").keyup(function(e){
        var text=$(this).val();
        $(this).next().html(`<b>${text.length}</b> / 50`);
    });

    $(".send").click(function(){
        confirm("로그인이 필요합니다. \n로그인 하시겠습니까?");
    })






    // footer
    var count = 0;
    $(".imformation p").click(function () {
        count++;
        if (count % 2 == 1) {
            $(this).children().html("<b>사업자 정보 닫기</b>");
        } else if (count % 2 == 0) {
            $(this).children().html("<b>사업자 정보 펼쳐보기</b>");
        }
        $(this).next().toggleClass("openbtn-rotate");
        $(".imfor-list").toggle();
    });
    $(".openbtn1").click(function () {
        count++;
        if (count % 2 == 1) {
            $(this).prev().html("<b>사업자 정보 닫기</b>");
        } else if (count % 2 == 0) {
            $(this).prev().html("<b>사업자 정보 펼쳐보기</b>");
        }
        $(this).toggleClass("openbtn-rotate");
        $(".imfor-list").toggle();
    });
})
    


