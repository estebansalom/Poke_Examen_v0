'use strict';
// Utilizando jquery, hago que el menu cambie si display al presionar el boton
$("#headerRegistrar").click(function(){
    showMenu();
});

$("#menuRegistrar").mouseleave(function(){
    hideMenu();
});

function showMenu(){
    if ($("#menuRegistrar").css("display") === 'none') {
        $("#menuRegistrar").fadeIn("slow");
    }
};
function hideMenu(){
    $("#menuRegistrar").fadeOut("slow");
};
