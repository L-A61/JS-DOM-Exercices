let f_Input;
let t_Tab = [];
let f_Sum = 0;
let i_InputCount = 0;

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
    document.write("Aucune saisie, rien à afficher.")
} else {
    document.write("Tableau saisie: ["+t_Tab+"]");
    document.write("<br>");
    document.write("La somme du tableau est: "+f_Sum);
    document.write("<br>");
    document.write("La moyenne du tableau est: "+f_Av);
}

