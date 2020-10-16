// Randomize the number of monsters that appear
var numbMonsters = Math.ceil(Math.random() * 4);
var VtempaHp = [];
var indexAttack = 0;

class persos {


    constructor() {

        this.name;

        this.hp;

        this.image;

        this.attack;

        this.hpMax;

    }

    persoAttackMonsters(numMonsters) {
        this.hp = this.hp - perso.attack;
        if(this.hp <= 0) {
            $("#monsters" + numMonsters).html('Vous avez vaincu : ' + this.name) + ' !';
            setTimeout(function() {
                $("#monstersCol" + numMonsters).css('visibility', 'hidden');
                cancel('Attack', 'Magie', 'Soin');
            }, 3000);
            indexAttack++;
            cancel('Attack', 'Magie', 'Soin');
            numbMonsters = numbMonsters - 1;
            // Check if at least 1 monsters is still alive
            if (numbMonsters > 0) {
                for(i = numMonsters; i < aMonsters['attack'].length; i++) {
                    aMonsters['attack'][i] = aMonsters['attack'][i + 1];
                    console.log(aMonsters['attack'][i + 1]);
                }
                this.monstersAttackPerso();
            } else {

            }
        } else {
            $("#monsters" + numMonsters).html(this.hp + '/' + this.hpMax);
            cancel('Attack', 'Magie', 'Soin');
            this.monstersAttackPerso();
        }
    }

    monstersAttackPerso() {
        // VtempaHp is an array that contains all the variation of HP from the character in 1 round of monsters attack
        for (i = 0; i < numbMonsters; i++) {
            perso.hp = perso.hp - aMonsters['attack'][i];
            VtempaHp[i] = perso.hp;
        }
        i = -1;
        // var needed to clear the function after with the function clearInterval
        var inter = setInterval(function () {
            i++;
            $("#hpPerso").html("<strong>" + VtempaHp[i] + "/" + perso.hpMax + " HP</strong>");
        }, 1000);
        // Launch the interval
        inter;
        // Clear setInterval after all the monsters attacked
        setTimeout(function () {
            clearInterval(inter);
        }, (numbMonsters * 1000));
    }

}

//Object that obtain the functions and attributes of the class persos
var perso = new persos();

var monsters1 = new persos();
var monsters2 = new persos();
var monsters3 = new persos();
var monsters4 = new persos();


perso.name = "Eren";
perso.hp = 120;
perso.hpMax = 150;
perso.attack = 12;

monsters1.name = 'Titan (8 mètres)'
monsters1.hp = 15;
monsters1.hpMax = 15;
monsters1.attack = 5;

monsters2.name = 'Titan (10 mètres)'
monsters2.hpMax = 17;
monsters2.hp = 17;
monsters2.attack = 10;

monsters3.name = 'Titan (13 mètres)'
monsters3.hp = 18;
monsters3.hpMax = 18;
monsters3.attack = 15;

monsters4.name = 'Titan Feminin'
monsters4.hp = 19;
monsters4.hpMax = 19;
monsters4.attack = 20;


var aMonsters = [];

aMonsters['hp'] = [
    
    monsters1.hp + '/' + monsters1.hpMax,
    monsters2.hp + '/' + monsters2.hpMax,
    monsters3.hp + '/' + monsters3.hpMax,
    monsters4.hp + '/' + monsters4.hpMax
    
]

aMonsters['name'] = [

    monsters1.name,
    monsters2.name,
    monsters3.name,
    monsters4.name
]

aMonsters['attack'] = [
    monsters1.attack,
    monsters2.attack,
    monsters3.attack,
    monsters4.attack
]

$(document).ready(function () {
    for (i = 0; i < numbMonsters; i++) {
        $("#monsters").append(`<div class='row mb-5'><div class= 'col monstersColDimension' id='monstersCol` + i + `' ><div class='row d-flex justify-content-center'><p> Image Monstre </p></div><div class='row d-flex justify-content-center'><p> ` + aMonsters['name'][i] + ` </p></div><div class='row d-flex justify-content-center'><p id='monsters`+ i +`'> `+ aMonsters['hp'][i] +` </p></div><div class='row d-flex justify-content-center'><button class='btnMonsterAttack btn btn-warning mt-3 btn_game' onclick='monsters` + (i + 1) + `.persoAttackMonsters(` + i + `)'> Attaquer </button></div></div ></div >`);
    }
    $(".btnMonsterAttack").css("display", "none");
});



$("#namePerso").html("<strong>" + perso.name + "</strong>");
$("#hpPerso").html("<strong>" + perso.hp + "/" + perso.hpMax + " HP</strong>");
$("#imagePerso").html(`<img class="imgPerso" src='img/` + perso.name + `.png' />`);



function attack(actionAttack, none1Attack, none2Attack) {
    $(".btnMonsterAttack").css("display", "block");
    $("#" + actionAttack + "Cancel").css("visibility", "hidden");
    $("#" + none1Attack + "Cancel").css("visibility", "hidden");
    $("#" + none2Attack + "Cancel").css("visibility", "hidden");
    $("#CancelButton").css("visibility", "visible");
    $("#CancelButton").css("height", "0px");
    $("#CancelButton").css("margin-top", "0px");
}

function cancel(action, none1, none2) {
    $(".btnMonsterAttack").css("display", "none");
    $("#" + action + "Cancel").css("visibility", "visible");
    $("#" + none1 + "Cancel").css("visibility", "visible");
    $("#" + none2 + "Cancel").css("visibility", "visible");
    $("#CancelButton").css("visibility", "hidden");
    $("#CancelButton").css("height", "0px");
    $("#CancelButton").css("margin-top", "0px");
}