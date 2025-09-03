// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1(){
    console.log(17);
}

// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();


// --------------------------------------------



// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
function f2(){
    return 17;
}

// Utiliser la fonction f2 pour afficher 17 dans la console.

console.log(f2());

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?

// *****************f2 peut être réutilisé*****************




// ----------------------------------------------------------------





// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(n){
    console.log(n*2);
}
// Utiliser la fonction f3 pour écrire dans la console le double de 99.
f3(99);



// -----------------------------------------------------------------------




// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(nb){
    return nb*2;
}
// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(99));

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a = f4(99);



// ------------------------------------------------------------




// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(a,b){
    console.log(a + b);
}
// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
f5(42,77);



// -------------------------------------------------------------------------------





// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(a,b){
    return a+b;
}
// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log(f6(42,77));
// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
let b = f6(42,77);




// ---------------------------------------------------------------------------------------





// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(c,d){
    if(c<d){
        return d;
    }else{
        return c;
    }
}



// ---------------------------------------------------------------------------------------------------------





// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).

// function f8(e,f,g){
//     if(e<f && f<g){
//         return g;
//     }else if(e<g && g<f){
//         return f;
//     }
//     else{
//         return e;
//     }
// }

function f8(c,d,e){
    return f7(f7(c,d),e);
}



console.log(f8(7,2,4));





// ------------------------------------------------------------------------------------------------------






// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function f9(nbr, mot){
    for(let i = 0; i < nbr; i++){
        console.log(mot)
    }
}

f9(5, "bobo")





// ----------------------------------------------------------------------------------------------------






/*
Écrire une fonction syracuse qui prend un nombre en entrée, et qui retourne :
- le triple du nombre + 1 si le nombre est impair
- la moitié du nombre sinon
*/
function syracuse(nmbr){
    if(nmbr%2 == 0){
        return nmbr*3+1;
    }else{
        return nmbr/2;
    }
}

console.log(syracuse(8))




// -------------------------------------------------------------------------------------




/*
Écrire une fonction countdown qui reçoit un nombre positif en entrée, et qui affiche dans la console le compte à rebours jusqu'à 0 en partant de ce nombre.
Par exemple, l'appel à `countdown(3)` devra afficher
3
2
1
0
*/
function countdown(time){
    for(let i = time; i>= 0; i--){
        console.log(i)
    }
}
countdown(10);




// -------------------------------------------------------------------------------------





/*
Écrire une fonction fastCountdown qui reçoit un nombre en entrée et qui affiche un compte à rebours en partant de cette valeur. La valeur sera divisée par 2 à chaque fois, et le compte à rebours s'arrête quand la valeur devient inférieur à 0.1.
Par exemple, l'appel à `fastCountdown(3)` devra afficher
3
1.5
0.75
0.375
0.1875
*/
function fastcountdown(nombreu){
    while(nombreu > 0.11){
        console.log(nombreu);
        nombreu = nombreu / 2;
    }
}
fastcountdown(3);



/*
Écrire une fonction evenNumbers qui reçoit deux nombres en entrées et qui affiche tous les nombres pairs entre ces deux nombres.
Par exemple, l'appel à `evenNumbers(5,14)` devra afficher
6
8
10
12
*/
function evenNumbers(a,b){
    while(a<i && i<b){
        for(let i = a; i < b; i+2){
            console.log(i);
        }
    }
}
evenNumbers(5,14);
/*
Sur la page wikipedia du PGCD (pas besoin de savoir ce que c'est), on peut trouver l'algorithme récursif suivant :
```
fonction euclide(a, b)
    si b = 0 alors retourner a
    sinon retourner euclide(b, a modulo b)
```
Écrire cette fonction.
*/

/*
À la main, calculer `euclide(6,10)`.
*/