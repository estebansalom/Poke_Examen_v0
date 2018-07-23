'use strict'
$("#headerListar").click(function(){
    showMenu();
});

$("#menuListar").mouseleave(function(){
    hideMenu();
});

function showMenu(){
    if ($("#menuListar").css("display") === 'none') {
        $("#menuListar").fadeIn("slow");
    }
};
function hideMenu(){
    $("#menuListar").fadeOut("slow");
};
