// Exercice divers_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.
// Exemple : positionBiggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1
let sTab = [4,7,5,5,6,-10];
let pos = 0; 

function positionBiggest(tableau){
    for(let i = 1; i < tableau.length; i++){
        if(tableau[i] > tableau[pos]){
            pos = i;
        }
    }
    return pos
}

console.log(positionBiggest(sTab));




// Exercice divers_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.
let somme = 0;
function cuntTab(tableau){
    for(let i = 0; i < tableau.length; i++){
        somme += tableau[i];
    }
    return somme;
}

console.log(cuntTab(sTab));

// Exercice divers_3 : écrire une fonction qui retourne la somme des valeurs positives d'un tableau.
let som = 0;
function positiveVal(tableau){
    for(let i = 0; i < tableau.length; i++){
        if(tableau[i] >= 0){
            som += tableau[i];
        }
    }
    return som;
}
console.log(positiveVal(sTab));



// Exercice divers_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'un tableau.
let sommmm = 0;
function negativeVal(tableau){
    for(let i = 0; i < tableau.length; i++){
        if(tableau[i] < 0){
            sommmm += tableau[i];
        }
    }
    return sommmm;
}
console.log(negativeVal(sTab));