$(function(){
    var bw=$(".box").width();
    //$(".box>a").css("left",bw);
    $(".box>div").hide();
    $(".box>div:eq(0)").css("left",0).show();
    touch.on($(".box>div"),"swipeleft",$(".box>div:eq(0)"), function(){

        $(".box>div:eq(0)").animate({left:-bw},500)
    })

})