$(function () {
    
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

});

