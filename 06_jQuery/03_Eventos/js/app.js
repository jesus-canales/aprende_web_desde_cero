
$(document).ready(function(){
    $("#texto").hover(
        function(){
            $(this).css("color", "red");
        },
        function(){
            $(this).css("color", "black");
        }
    )
})