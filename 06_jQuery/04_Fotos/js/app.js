
$(document).ready(function(){
    $(".mueble").hover(
        function(){
            $(this).css("transform", "scale(1.15)");
        },
        function(){
            $(this).css("transform", "scale(1)");
        }
    )
})