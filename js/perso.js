// Randomize the number of monsters that appear
var numbOfMonstersCreated = Math.ceil(Math.random() * 3);
var numbOfMonstersLeft = numbOfMonstersCreated;
var VtempaHp = [];
var aPercentAction = [];
aPercentAction = [2, 1.1, 1.1, 0.9, 0.9];
var attackPerso;
var vTempHp;
var vTempHpMax;
var vTempNameMonsters;
var soin;

class persos {


    constructor() {

        this.name;

        this.hp;

        this.image;

        this.attack;

        this.hpMax;

        this.xp;

        this.level;

        this.heal;

    }

    persoAttackMonsters(numMonsters) {
        attackPerso = (Math.floor(perso.attack * aPercentAction[(Math.floor(Math.random() * 5))]))
        this.hp = this.hp - attackPerso;
        if(this.hp <= 0) {
            numbOfMonstersLeft = numbOfMonstersLeft - 1;
            this.animateDamage(numMonsters, attackPerso);
            vTempNameMonsters = this.name;
            setTimeout(function () {
                $("#monsters" + numMonsters).html('Vous avez vaincu : ' + vTempNameMonsters) + ' !';
            }, 1000);
            setTimeout(function() {
                $("#monstersCol" + numMonsters).css('visibility', 'hidden');
            }, 2000);
            cancel('Attack', 'Magie', 'Soin');
            perso.xp = perso.xp + this.xp;
            this.levelUp();
            $("#xpPerso").html("<strong>" + perso.xp + "/" + xpMax + " XP</strong>");
            // Check if at least 1 monsters is still alive
            if (numbOfMonstersLeft > 0) {
                unclickButton();
                for(i = numMonsters; i < aMonsters['attack'].length; i++) {
                    aMonsters['attack'][i] = aMonsters['attack'][i + 1];
                }
                setTimeout(function () {
                    monstersAttackPerso();
                }, 2000);
            } else {

            }
        } else {
            this.animateDamage(numMonsters, attackPerso)
            cancel('Attack', 'Magie', 'Soin');
            monstersAttackPerso();
        }
    }

    // Method that show the level up of your hero
    levelUp() {
        if (perso.xp > xpMax) {
            while(perso.xp >= xpMax) {
                console.log(perso.xp);
                perso.level++;
                perso.xp = perso.xp - xpMax;
                xpMax = perso.level * 5;
            }
            $("#levelPerso").html("<strong>Level " + perso.level + "</strong>");
            $("#levelUp").html(perso.level);
            $("#showLevel").css("animation", "bright 3s");
            setTimeout(function () {
                $("#showLevel").css("animation", "");
            }, 3000);
        }
    }

     // Method that animate the damages that take the monster focus
    animateDamage(numMonsters, attackPerso) {
        $("#monsters" + numMonsters).html(" - " + attackPerso + "HP !</strong>");
        $("#monsters" + numMonsters).css("color", "red");
        $("#monsters" + numMonsters).css("font-weight", "800");
        $("#monsters" + numMonsters).addClass("animationAttackedText");
        vTempHp = this.hp;
        vTempHpMax = this.hpMax;
        if(this.hp > 0) {
            setTimeout(function () {
                $("#monsters" + numMonsters).html(vTempHp + '/' + vTempHpMax);
                $("#monsters" + numMonsters).css("color", "black");
                $("#monsters" + numMonsters).css("font-weight", "400");
                $("#monsters" + numMonsters).removeClass("animationAttackedText");
            }, 1000);
        } else {
            setTimeout(function () {
                $("#monsters" + numMonsters).css("color", "black");
                $("#monsters" + numMonsters).css("font-weight", "400");
                $("#monsters" + numMonsters).removeClass("animationAttackedText");
            }, 1000);
        }
    }

    //Method to heal the hero and animate the HP then launch the monsters attack turn
    soin() {
        soin = (Math.floor(this.heal * aPercentAction[(Math.floor(Math.random() * 5))]))
        this.hp = (this.hp + soin);
        if(this.hp > this.hpMax) {
            this.hp = this.hpMax;
        }
        $("#hpPerso").removeClass("animationAttackedText");

        setTimeout(function () {
            $("#hpPerso").addClass("animationHealPerso");
        }, 50);

        $("#hpPerso").html("<strong>" + perso.hp + "/" + perso.hpMax + " HP</strong>");
        setTimeout(function () {
            $("#hpPerso").removeClass("animationHealPerso");
        }, 1000);
        monstersAttackPerso();
    }
    

}

//Object that obtain the functions and attributes of the class persos
var perso = new persos();

var monsters1 = new persos();
var monsters2 = new persos();
var monsters3 = new persos();
var monsters4 = new persos();


perso.name = "Eren";
perso.hp = 150;
perso.hpMax = 150;
perso.attack = 12;
perso.xp = 0;
perso.level = 15;
perso.heal = 19;

monsters1.name = 'Titan (8 mètres)'
monsters1.hp = 15;
monsters1.hpMax = 15;
monsters1.attack = 5;
monsters1.level = 7;
monsters1.xp = 70;
monsters1.image = 'reiner2';

monsters2.name = 'Titan (10 mètres)'
monsters2.hpMax = 17;
monsters2.hp = 17;
monsters2.attack = 10;
monsters2.level = 10;
monsters2.xp = 80;
monsters2.image = 'reiner2'; ;

monsters3.name = 'Titan (13 mètres)'
monsters3.hp = 18;
monsters3.hpMax = 18;
monsters3.attack = 15;
monsters3.level = 14;
monsters3.xp = 160;
monsters3.image = 'reiner2'; ;

monsters4.name = 'Titan Feminin'
monsters4.hp = 19;
monsters4.hpMax = 19;
monsters4.attack = 20;
monsters4.level = 25;
monsters4.xp = 270;
monsters4.image = 'reiner2'; ;


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

aMonsters['image'] = [
    monsters1.image,
    monsters2.image,
    monsters3.image,
    monsters4.image
]

$(document).ready(function () {
    for (i = 0; i < numbOfMonstersCreated; i++) {
        $("#monsters").append(`
        <div class='monstersRow row mb-5'>
            <div class= 'col monstersColDimension d-flex justify-content-center' id='monstersCol` + i + `' >
                <div class="borderMonstersCss borderMonsters` + i + `">
                    <div class='row d-flex justify-content-center'>
                        <img class='imgMonsters' src='img/` + aMonsters['image'][i] + `.png' </p>
                    </div>
                    <div class='row d-flex justify-content-center'>
                        <p> ` + aMonsters['name'][i] + ` </p>
                    </div>
                    <div class='row d-flex justify-content-center'>
                        <p id='monsters`+ i +`'> `+ aMonsters['hp'][i] +` </p>
                        <p id=degat` + i + `> </p>
                    </div>
                    <div class='row d-flex justify-content-center'>
                        <button class='btnMonsterAttack btn btn-warning mt-3 btn_game' onclick='monsters` + (i + 1) + `.persoAttackMonsters(` + i + `)'> Attaquer </button>
                    </div>
                </div >
            </div>
        </div>`);
    }
    $(".btnMonsterAttack").css("display", "none");
});

var xpMax = perso.level * 5;

$("#namePerso").html("<strong>" + perso.name + "</strong>");
$("#hpPerso").html("<strong>" + perso.hp + "/" + perso.hpMax + " HP</strong>");
$("#imagePerso").html(`<img class="imgPerso" src='img/` + perso.name + `.png' />`);
$("#levelPerso").html("<strong>Level " + perso.level + "</strong>");
$("#xpPerso").html("<strong>" + perso.xp + "/" + xpMax + " XP</strong>");




function attack(actionAttack, none1Attack, none2Attack) {
    $(".btnMonsterAttack").css("display", "block");
    $("#" + actionAttack + "Cancel").css("visibility", "hidden");
    $("#" + none1Attack + "Cancel").css("visibility", "hidden");
    $("#" + none2Attack + "Cancel").css("visibility", "hidden");
    $("#CancelButton").css("visibility", "visible");
    $("#CancelButton").css("height", "38px");
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

function unclickButton() {
    $(".persoSoin").prop("disabled", true);
    $(".persoMagie").prop("disabled", true);
    $(".persoAttack").prop("disabled", true);
    $(".persoSoin").css("visibility", "hidden");
    $(".persoMagie").css("visibility", "hidden");
    $(".persoAttack").css("visibility", "hidden");
}

function reValidButton() {
    $(".persoSoin").prop("disabled", false);
    $(".persoMagie").prop("disabled", false);
    $(".persoAttack").prop("disabled", false);
    setTimeout(function () {
        $(".persoSoin").css("visibility", "visible");
        $(".persoMagie").css("visibility", "visible");
        $(".persoAttack").css("visibility", "visible");
    }, 900);
}

function monstersAttackPerso() {
    VtempaHp = [];
    for (i = 0; i < numbOfMonstersCreated; i++) {
        $(".borderMonsters" + i).removeClass("animationAttackMonster");
    }
    
    unclickButton();
    
    // VtempaHp is an array that contains all the variation of HP from the character in 1 round of monsters attack
    for (i = 0; i < numbOfMonstersLeft; i++) {
        perso.hp = perso.hp - aMonsters['attack'][i];
        VtempaHp[i] = perso.hp;
        if(perso.hp < (perso.hpMax * 0.3)) {
            setTimeout(function () {
                $("#hpPerso").css("color", "red");
            }, ((numbOfMonstersCreated * (900)) + 900));
        }
        console.log(VtempaHp);
    }

    var indexOfMonsters = -1;
    var indexOfPersoHp = -1;
    
    var inter = setInterval(function () {
        if (indexOfMonsters < numbOfMonstersCreated) {
            indexOfMonsters++;
            indexOfPersoHp++;
            if ($(".borderMonsters" + indexOfMonsters).css("visibility") == "visible") {
                $("#hpPerso").html("<strong>" + VtempaHp[indexOfPersoHp] + "/" + perso.hpMax + " HP</strong>");
                console.log(indexOfMonsters + " visible");
                $("#border").removeClass("animationAttacked");
                $("#hpPerso").removeClass("animationAttackedText");
                $("#hpPerso").removeClass("animationHealPerso");
                setTimeout(function () {
                    $("#hpPerso").addClass("animationAttackedText");
                    $("#border").addClass("animationAttacked");
                }, (50));
                $(".borderMonsters" + indexOfMonsters).addClass("animationAttackMonster");
            } else if (($(".borderMonsters" + indexOfMonsters).css("visibility") == "hidden") && indexOfMonsters < (numbOfMonstersCreated - 1)) {
                $("#hpPerso").html("<strong>" + VtempaHp[indexOfPersoHp] + "/" + perso.hpMax + " HP</strong>");
                indexOfMonsters++;
                console.log(indexOfMonsters + " hidden");
                $("#border").removeClass("animationAttacked");
                $("#hpPerso").removeClass("animationAttackedText");
                $("#hpPerso").removeClass("animationHealPerso");
                setTimeout(function () {
                    $("#hpPerso").addClass("animationAttackedText");
                    $("#border").addClass("animationAttacked");
                }, (50));
                $(".borderMonsters" + indexOfMonsters).addClass("animationAttackMonster");
            }
        }
    }, 950);

    // var needed to clear the function after with the function clearInterval

    // Clear setInterval after all the monsters attacked
    setTimeout(function () {
        clearInterval(inter);
        reValidButton();
    }, ((numbOfMonstersCreated * (900)) + 900));

};