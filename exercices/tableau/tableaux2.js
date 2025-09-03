// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function takeTab1(tableau){
    console.log(tableau[tableau.length-1])
}

takeTab1(tab1);


// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function takeTab2(tableau){
return tableau[tableau.length-1];
}

console.log(takeTab2(tab1));




// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
console.log(tab1);
function takeTheSmall(tableau){
    let theSmall = tab1[0];
    for( let i = 1; i < tableau.length; i++){
        if(tableau[i] < theSmall){
            theSmall = tableau[i];
        }
    }
   return theSmall;
}
console.log(takeTheSmall(tab1));



// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function takeTheBig(tableau){
    let theBig = tableau[0];
    for( let i = 1; i < tableau.length; i++){
        if(tableau[i] > theBig){
            theBig = tableau[i];
        }
    }
   return theBig;
}
console.log(takeTheBig(tab1));



// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function takeTheEqual(tableau){
    let theEqual = tableau[0];
    for(let i = 0; i < tableau.length; i++){
        if(tableau[i] < theEqual && tableau[i] > theEqual ){
            theEqual  = tableau[i];
        }
    }
    return theEqual
}
console.log(takeTheEqual(tab1));
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].

// Créer un tableau qui contient [10,20,30,...,77770].

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]

