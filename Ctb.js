class Entity {
    constructor(att, def, vit, mag, psy, statut) {
        this.att = att;
        this.def = def;
        this.vit = vit;
        this.mag = mag;
        this.psy = psy;
        this.statut = status;
    }
}

function ConditionalTurnBased() {
    var charactere = [{16, }16, 18];
    var Vcharactere = [100, 100];

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

ConditionalTurnBased();