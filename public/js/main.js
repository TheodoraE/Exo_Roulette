
// condition = true;
let argent = 0;
let roulette;
let couleurs = ["Vert", "Rouge", "Noir", "Rouge", "Noir", "Rouge", "Noir", "Rouge", "Noir", "Rouge", "Noir", "Noir", "Rouge", "Noir", "Rouge", "Noir", "Rouge", "Noir", "Rouge", "Rouge", "Noir", "Rouge", "Noir","Rouge", "Noir", "Rouge", "Noir", "Rouge", "Noir", "Noir", "Rouge", "Noir", "Rouge", "Noir", "Rouge", "Noir", "Rouge"];
let ranC;

alert(`   ~~~ Bonjour et bienvenue au jeu de la roulette ! ~~~`);

alert(`Voici les règles du jeu : Choisissez une couleur sur laquelle vous souhaitez miser.
À chaque bon tirage, vous recevez 2 points et vous pourrez continuer la partie jusqu'à ce que vous n'ayez plus de points. Par contre, lorsque votre mise n'est pas bonne, vous perdez 2 points.
ATTENTION: Vous risquez de tomber sur le chiffre vert 0. Dans ce cas, vous perdez tous vos gains.`);


do {
    roulette = prompt(`Sur quelle couleur misez-vous?
    Veuillez entre une valeur entre Rouge et Noir ?`).toLowerCase();
    ranC = Math.round(Math.random() * (couleurs.length +1));
            console.log(ranC); // CHEAT
    if ((roulette.charAt(0).toUpperCase() + roulette.substr(1)) == couleurs[ranC]){
        alert("Bravo, c'est votre jour de chance ! 2 points ont été crédités à votre compte");
        argent+=2;
    } else if (("vert" || "Vert") == couleurs[ranC]) {
        alert("Vous êtes tombé sur le chiffre vert 0. Vous avez tout perdu... T.T");
        argent == 0;
    } else {
        alert("Ah c'est dommage... 2 points ont été débités de votre compte");
        argent-=2;
    };
    alert(`Votre solde est de ${argent} points`);
} while (argent > 0) {
    alert("Tu n'as plus de points, le jeu est FINI");
};



// roulette.charAt(0).toUpperCase() + roulette.substr(1) 

// 36 chiffres 
    // 18 rouge
    // 18 noir
    // 1 vert
// 3 couleurs : rouge, noir et vert