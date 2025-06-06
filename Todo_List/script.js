let form = document.querySelector("form")
let zoneSaisie = document.querySelector(".zoneSaisie")
let ul = document.getElementById("listes")
let erreur = document.querySelector(".erreur")


form.addEventListener("submit", (event) => {
    event.preventDefault()
    if(zoneSaisie.value !== ""){
        let li = document.createElement("li")
        li.textContent = zoneSaisie.value
        ul.appendChild(li)
        zoneSaisie.value = "" // Vide le champ après ajout
    }else{
        erreur.style.display = "block"
        zoneSaisie.style.border = "1px solid red"
    }
})

zoneSaisie.addEventListener("input", () => {
    erreur.style.display = "none"
    zoneSaisie.style.border = ""
})