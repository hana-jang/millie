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
    


