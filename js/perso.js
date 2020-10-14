class persos {


    constructor() {

        this.name;

        this.hp;

        this.image;

        this.attack;

        this.hpMax;

        this.image;

    }

    attackMonsters(numMonsters) {
        this.hp = this.hp - perso.attack;
        $("#monsters" + numMonsters).html(this.hp + '/' + this.hpMax);
    }

}

//Object that obtain the functions and attributes of the class persos
var perso = new persos();

var monsters1 = new persos();
var monsters2 = new persos();
var monsters3 = new persos();
var monsters4 = new persos();


perso.name = "eren";
perso.hp = 120;
perso.hpMax = 150;
perso.attack = 12;

monsters1.hp = 15;
monsters2.hp = 17;
monsters3.hp = 18;
monsters4.hp = 19;
monsters1.hpMax = 15;
monsters2.hpMax = 17;
monsters3.hpMax = 18;
monsters4.hpMax = 19;

var aMonsters = [
    monsters1.hp + '/' + monsters1.hpMax, 
    monsters2.hp + '/' + monsters2.hpMax, 
    monsters3.hp + '/' + monsters3.hpMax, 
    monsters4.hp + '/' + monsters4.hpMax
]

// Randomize the number of monsters that appear
var numbMonsters = Math.ceil(Math.random() * 3);
$(document).ready(function () {
    for (i = 0; i < numbMonsters; i++) {
        var concat = 'monsters' + i;
        console.log(concat);
        $("#monsters").append(`<div class='row mb-5'><div class= 'col' ><div class='row d-flex justify-content-center'><p> Image Monstre </p></div><div class='row d-flex justify-content-center'><p> Nom Monstre </p></div><div class='row d-flex justify-content-center'><p id='monsters`+ i +`'> `+ aMonsters[i] +` </p></div><div class='row d-flex justify-content-center'><button class='btnMonsterAttack btn btn-success mt-3 btn_game' onclick='monsters` + (i + 1) + `.attackMonsters(` + i + ', ' + `)'> Attaquer </button></div></div ></div >`);
    }
    $(".btnMonsterAttack").css("display", "none");
});



$("#namePerso").html((perso.name).charAt(0).toUpperCase() + perso.name.slice(1));
$("#hpPerso").html(perso.hp + "/" + perso.hpMax);
$("#imagePerso").html(`<img class="imgPerso" src='img/` + perso.name + `.png' />`);



function attack(actionAttack, none1Attack, none2Attack) {
    $(".btnMonsterAttack").css("display", "block");
    $(".perso" + actionAttack).css("display", "none");
    $(".perso" + none1Attack).css("display", "none");
    $(".perso" + none2Attack).css("display", "none");
    $(".cancel" + actionAttack).css("display", "block");
}

function cancel(action, none1, none2) {
    $(".btnMonsterAttack").css("display", "none");
    $(".perso" + action).css("display", "block");
    $(".perso" + none1).css("display", "block");
    $(".perso" + none2).css("display", "block");
    $(".cancel" + action).css("display", "none");
}