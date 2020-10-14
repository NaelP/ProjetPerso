class persos {


    constructor() {

        this.name;

        this.hp;

        this.image;

        this.attack;

        this.hpMax;

        this.image;

    }

    attack(name) {

        this.hp = this.hp - this.attack;

    }

    magie(name) {

    }

    soigner(name) {

    }

}

//Object that obtain the functions and attributes of the class persos
var perso = new persos();

// Randomize the number of monsters that appear
var numbMonsters = Math.ceil(Math.random() * 3);

perso.name = "eren";
perso.hp = 120;
perso.hpMax = 150;


$("#namePerso").html((perso.name).charAt(0).toUpperCase() + perso.name.slice(1));
$("#hpPerso").html(perso.hp + "/" + perso.hpMax);
$("#imagePerso").html(`<img class="imgPerso" src='img/` + perso.name + `.png' />`);


$(document).ready(function () {
    for (i = 0; i < numbMonsters; i++) {
        $("#monsters").append(`<div class='row mb-5'><div class= 'col' ><div class='row d-flex justify-content-center'><p> Image Monstre </p></div><div class='row d-flex justify-content-center'><p> Nom Monstre </p></div><div class='row d-flex justify-content-center'><p> Pv Monstre </p></div><div class='row d-flex justify-content-center'><button class='btnMonsterAttack btn btn-success mt-3 btn_game' onclick=''> Attaquer </button></div></div ></div >`);
    }
    $(".btnMonsterAttack").css("display", "none");
});