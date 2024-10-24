
/* Ocultar elementos a partir de una etiqueta */
/* $(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    })
}); */

// Ocultar elementos a partir 
// de un identificador (id) de elemento
$(document).ready(function(){
    $("#elimina-hulk").click(function(){
        $("#hulk").hide();
    })
})

$(document).ready(function(){
    $("#mostrar-ocultar").click(function(){
        $(".avenger").toggle();
    })
})