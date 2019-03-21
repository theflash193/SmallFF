class Entity {
    constructor(name, hp, mp, att, def, vit, mag, psy, statut) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.att = att;
        this.def = def;
        this.vit = vit;
        this.mag = mag;
        this.psy = psy;
        this.statut = statut;
    }

    DegatAttaque() {
        console.log(this.att ^ 3);
        return ((( Math.pow(this.att, 3) / 32) + 32) | 0);
    }

    getName() {
        return (this.name);
    }

    DefNum() {
        return (((Math.pow((this.def - 280.4), 2)) / 110) + 16 | 0);
    }

    seFaireAttaquer(attaquant) {
        let dommage = ((attaquant.DegatAttaque() * this.DefNum()) / 730) | 0;
        this.hp = this.hp - dommage;
        console.log(attaquant.DegatAttaque());
        // console.log(this.DefNum());
        console.log("HP: " + this.hp +" " + this.name + " is attacking by " + attaquant.getName() + " and take " + dommage);
    }

}  

function ConditionalTurnBased() {
    var charactere = [16, 16, 18];
    var Vcharactere = [[100, 16], [100, 16]];

    console.log("Combat !");
    while (1) {
        Vcharactere[0] = Vcharactere.map((counter, tickspeed) => {
            return (counter - tickspeed);
        });

        if (Vcharactere[0] == 0) {
            // "%cI am red %cI am green", "color: red", "color: green"
            console.log("tour du personnage");
            Vcharactere[0] = charactere;
        }
    }
}

let a = new Entity("tidus", 520, 12, 15, 5, 5, 10, 1, "normal");
let b = new Entity("auron", 1030, 33, 20, 15, 5, 5, 1, "normal");
a.seFaireAttaquer(b);
// ConditionalTurnBased();