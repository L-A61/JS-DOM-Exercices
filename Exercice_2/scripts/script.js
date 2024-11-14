let f_Input;
let t_Tab = [];
let f_Sum = 0;
let i_InputCount = 0;

let a = document.getElementById("idTableau")
let b = document.createElement("p")

while(true) {
    f_Input = parseFloat(prompt("Saisir la valeur n°"+(i_InputCount+1)+" du tableau (0 pour finir)"));

    if (f_Input == 0) {
        break;
    }

    f_Sum = f_Sum + f_Input;

    t_Tab.push(f_Input);
    i_InputCount++;
}

let f_Av = f_Sum / i_InputCount;

if (t_Tab.length == 0) {
    b.innerHTML="<p>Aucune saisie, rien à afficher</p>"
    a.appendChild(b)
} else {
    b.innerHTML="<p>Tableau saisie: ["+t_Tab+"] <br> Le nombre de valeur saisie est: "+i_InputCount+"<br> La somme du tableau est: "+f_Sum+"<br> La moyenne du tableau est: "+f_Av;
    a.appendChild(b)
}

