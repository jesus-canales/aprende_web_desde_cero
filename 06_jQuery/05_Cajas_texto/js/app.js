
$(document).ready(function(){
    $("#nombres").focus(function(){
        $(this).css("color", "blue");
    }).blur(function(){
        $(this).css("color", "black");
    })    
})