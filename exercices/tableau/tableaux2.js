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
console.log("******************");




// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
console.log(tab1);
function takeTheEqual(tableau, n){
    let count = 0;
    for(let i = 0; i < tableau.length; i++){
        if(tableau[i] === n){
            count++;
        }
    }
    return count;
}
console.log(takeTheEqual(tab1,108));




// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
console.log("******");
function takeTheEqualB(tableau, n){
    for(let i = 0; i < tableau.length; i++){
        if(tableau[i] === n){
            return true;
        }
    }
    return false;
}
console.log(takeTheEqualB(tab1,5));




// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?


// Créer un tableau qui contient [1,2,3,...,7777].
let bestTab = [];
for(let i = 1; i <= 7777; i++){
    bestTab.push(i);
}
console.log(bestTab);





// Créer un tableau qui contient [10,20,30,...,77770]
// 
let bestTabB = [];
for(let i = 10; i <= 77770; i+=10){
    bestTabB.push(i);
}
console.log(bestTabB);




// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let bestTabC = [];
for(let i = 5; i <= 38885; i+=5){
    bestTabC.push(i);
}
console.log(bestTabC);



// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
let tabDestroy = ["boom",1,12,22,32,41];
let bigDestroy = [1,45,88,54,23,-100,12];
function destroy(tableau){
while(tableau[tableau.length-1] < 50){
    tabDestroy.pop();
    }
    return tableau
}
// console.log(destroy(tabDestroy));
console.log(destroy(bigDestroy));





// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]


