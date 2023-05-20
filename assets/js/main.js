// jquery

$(document).ready(function(){
    $(".portfolio .actions li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        if($(this).data("class")==="all")
        {
            $(".portfolio .images-folder .box").css("opacity",1); //by default
        }
        else
        {

            $(".portfolio .images-folder .box").css("opacity",".3") ;
            $($(this).data("class")).parent().css("opacity",1);//parent is data-class
        }
    });
});

 