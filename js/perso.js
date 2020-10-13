class persos {


    constructor() {

        this.name;

        this.hp;

        this.image;

        this.attack;

        this.hpMax

    }

    attack(name) {

        this.hp = this.hp - this.attack;

    }

    magie(name) {

    }

    soigner(name) {

    }

}

var perso = new persos();

perso.name = "jean";
perso.hp = 120;
perso.hpMax = 150;


$("#namePerso").html(perso.name);
$("#hpPerso").html(perso.hp + "/" + perso.hpMax);