'use strict';
// Utilizando jquery, hago que el menu cambie si display al presionar el boton
$("#headerOpciones").click(function(){
    showMenu();
});

$("#menuOpciones").mouseleave(function(){
    hideMenu();
});

function showMenu(){
    if ($("#menuOpciones").css("display") === 'none') {
        $("#menuOpciones").fadeIn("slow");
    }
};
function hideMenu(){
    $("#menuOpciones").fadeOut("slow");
};
