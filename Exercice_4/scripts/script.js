let i_MagicNumber = parseInt(Math.random()*100);

// console.log(i_MagicNumber); // Triche pour voir le i_MagicNumber dans la console

let verifBtn = document.getElementById("verifBtn");
let retryBtn = document.getElementById("retryBtn");
let inputNumber = document.getElementById("inputNumber");

verifBtn.addEventListener("click",function() {
    if (inputNumber.value < i_MagicNumber) { // Indique que le nombre aléatoire est plus grand si le nombre saisis est plus petit
        alert("Plus grand");
    } else if (inputNumber.value > i_MagicNumber) { // Indique que le nombre aléatoire est plus petit si le nombre saisis est plus grand
        alert("Plus petit");
    } else if (inputNumber.value == i_MagicNumber) { // Condition victoire si la valeur de l'input est égal au nombre magique
        alert("Bien joué!");
    }
})

retryBtn.addEventListener("click",function() {
    i_MagicNumber = parseInt(Math.random()*100);
})