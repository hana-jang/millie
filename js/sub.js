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
        $(".bookcard-list").animate({marginLeft:"0"},800);
    });
    $(".next").click(function(){
        
        $(".bookcard-list").animate({marginLeft:"-50%"},800, function(){
            $(".bookcard-list li:first").appendTo(".bookcard-list");
            $(".bookcard-list").css("margin-left","0");
        });
    });

    $.get("../textbox/text.txt",function(data){
        $(".book-intro").html(data);
    });

    $.get("../textbox/text1.txt", function(data){
        $(".book-intro1").html(data);
    });

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
    


