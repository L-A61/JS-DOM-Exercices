let company = document.getElementById("company");
let represent = document.getElementById("represent");
let zipCode = document.getElementById("zipCode");
let city = document.getElementById("city");
let email = document.getElementById("email");

let obligCompany = document.getElementById("obligCompany");
let obligRepresent = document.getElementById("obligRepresent");
let obligZipCode = document.getElementById("obligZipCode");
let obligCity = document.getElementById("obligCity");
let obligEmail = document.getElementById("obligEmail");

let projEnv = document.getElementById("projEnv");

let sendBtn = document.getElementById("sendBtn");
let delBtn = document.getElementById("delBtn");

projEnv.addEventListener("change", function() {
    let selectedValue = this.value;
    document.getElementById("selectedProjEnv").innerHTML = selectedValue;
})

sendBtn.addEventListener("click",function() {
    
    if (company.value.length < 1) {
        obligCompany.innerHTML="<strong>* Doit contenir au moins 1 caractère</strong>"

    } else {
        obligCompany.innerHTML="<strong>* </strong>"
    }
    if (represent.value.length < 1) {
        alert("Entrez le nom de la personne à contact s.v.p !")
        obligRepresent.innerHTML="<strong>* Doit contenir au moins 1 caractère</strong>"
        
    } else {
        obligRepresent.innerHTML="<strong>* </strong>"
    }

    if (zipCode.value.length < 5 || zipCode.value.length > 5 || !/^\d+$/.test(zipCode.value)) {
        alert("entrez le code postal sur 5 chiffres s.v.p !")
        obligZipCode.innerHTML = "<strong>* Doit contenir 5 caractères numériques</strong>";
        
    } else {
        obligZipCode.innerHTML="<strong>* </strong>"
    }

    if (city.value.length < 1) {
        obligCity.innerHTML="<strong>* Doit contenir au moins 1 caractère</strong>"

    } else {
        obligCity.innerHTML="<strong>* </strong>"
    }

    if (!email.value.includes("@")) {
        obligEmail.innerHTML="<strong>* Doit contenir un @</strong>"
    } else {
        obligEmail.innerHTML="<strong>* </strong>"
    }

    
})

delBtn.addEventListener("click",function() {
    location.reload()
})