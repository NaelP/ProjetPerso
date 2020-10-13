var numbMonsters = Math.ceil(Math.random() * 4);


function btnAcceuil(type) {
    if($('.' + type).css('display') == 'none') {
        $('.' + type).css('display', 'flex')
    } else {
        $('.' + type).css('display', 'none');
    }
}

$(document).ready(function () {
    for (i = 0; i < numbMonsters; i++) {
        $("#monsters").append(`<div class='row mb-5'><div class= 'col' ><div class='row d-flex justify-content-center'><p> Image Monstre </p></div><div class='row d-flex justify-content-center'><p> Nom Monstre </p></div><div class='row d-flex justify-content-center'><p> Pv Monstre </p></div><div class='row d-flex justify-content-center'><button class='btn btn-success mt-3 btn_game' onclick=''> Attaquer </button></div></div ></div >`);
    }
});