
// condition = true;
let argent = 0;
let roulette;
let couleurs = ["Noir", "Noir", "Noir", "Noir", "Noir", "Noir", "Noir", "Noir", "Noir", "Noir", "Noir","Noir", "Noir", "Noir", "Noir", "Noir", "Noir", "Noir", "Rouge", "Rouge", "Rouge", "Rouge", "Rouge", "Rouge", "Rouge", "Rouge","Rouge", "Rouge", "Rouge","Rouge", "Rouge", "Rouge","Rouge","Rouge", "Rouge", "Rouge", "Vert"];
let ranC;


do {
    roulette = prompt(`Sur quelle couleur misez-vous :
            Rouge ou Noir ?`).toLowerCase();
    ranC = Math.round(Math.random() * (couleurs.length -1));
            console.log(ranC);
    if ((roulette.charAt(0).toUpperCase() + roulette.substr(1)) == couleurs[ranC]){
        console.log("Bravo, c'est votre jour de chance ! 2 points ont été crédités à votre compte");
        argent+=2;
    } else {
        console.log("Ah c'est dommage, peut-être la prochaine fois...");
        argent-=2;
    };
    console.log(`Votre solde est de ${argent} points`)
} while (argent > 0) {
    console.log("Tu n'as plus de points, t'es dans la merte...");
};





// roulette.charAt(0).toUpperCase() + roulette.substr(1) 

// 36 chiffres 
    // 18 rouge
    // 18 noir
    // 1 vert
// 3 couleurs : rouge, noir et vert