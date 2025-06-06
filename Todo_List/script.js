let form = document.querySelector("form")
let zoneSaisie = document.querySelector(".zoneSaisie")
let ul = document.getElementById("listes")
let erreur = document.querySelector(".erreur")


form.addEventListener("submit", (event) => {
    event.preventDefault()
    if(zoneSaisie.value !== ""){
        //création d'élémént
        let li = document.createElement("li")
        let btnSupprimer = document.createElement("button")
        let btnModifier = document.createElement("button")
        let span = document.createElement("span")
        let inputEdit = document.createElement("input")

        //ajout de contenue
        btnSupprimer.textContent = "Delete"
        btnModifier.textContent = "Edit"
        span.textContent = zoneSaisie.value
        span.style.fontSize = " 0.8rem"
        span.style.flexWrap = "no-wrap"

        //style des boutons
        btnSupprimer.style.margin = "5px"
        btnSupprimer.style.backgroundColor = "red"
        btnSupprimer.style.border = "none"
        btnSupprimer.style.borderRadius = "5px"
        btnSupprimer.style.padding = "6px"
        btnSupprimer.style.fontWeight = "bold"
        btnSupprimer.style.color = "white"

       

        btnModifier.style.margin = "5px"
        btnModifier.style.backgroundColor = "green"
        btnModifier.style.border = "none"
        btnModifier.style.borderRadius = "5px"
        btnModifier.style.padding = "6px"
        btnModifier.style.fontWeight = "bold"
        btnModifier.style.color = "white"
     


        //lorsqu'on clique sur le bouton de suppression
        btnSupprimer.addEventListener("click", () =>{
            li.remove()
        })

        //effet hover au survoler
        btnSupprimer.addEventListener('mouseover', () =>{
        btnSupprimer.style.backgroundColor = "#ff6666"; // Couleur de fond au survol
        btnSupprimer.style.transform = "scale(1.1)"; // Légère animation de zoom
        btnSupprimer.style.transition = "all 0.3s ease"; // Transition fluide
        btnSupprimer.style.cursor = "pointer"; // Change le curseur en main (pointeur)

        });
        //quand on survole plus
        btnSupprimer.addEventListener('mouseout', () =>{
        btnSupprimer.style.backgroundColor = "red"; // Revenir à la couleur d'origine
        btnSupprimer.style.transform = "scale(1)"; // Retour à la taille normale
        });

        //lorsqu'on clique sur le bouton de modification
        btnModifier.addEventListener("click", () => {
            inputEdit.value = "text"
            inputEdit.value = span.textContent
            //remplace span par inputEdit
            li.replaceChild(inputEdit, span)
            //mets le curseur dans le champs de saisie
            inputEdit.focus()
            // quand on sort du champ
            inputEdit.addEventListener("blur", () => {
                if (inputEdit.value.trim() !== "") {
                    span.textContent = inputEdit.value
                }
                li.replaceChild(span, inputEdit)
            })//uand on valide avec entrer
            inputEdit.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    inputEdit.blur()
                }
            })
            })

        //effet hover au survoler
        btnModifier.addEventListener('mouseover', () =>{
        btnModifier.style.backgroundColor = "#588157"; // Couleur de fond au survol
        btnModifier.style.transform = "scale(1.1)"; // Légère animation de zoom
        btnModifier.style.transition = "all 0.3s ease"; // Transition fluide
        btnModifier.style.cursor = "pointer"; // Change le curseur en main (pointeur)

        });
        //quand on survole plus
        btnModifier.addEventListener('mouseout', () =>{
        btnModifier.style.backgroundColor = "green"; // Revenir à la couleur d'origine
        btnModifier.style.transform = "scale(1)"; // Retour à la taille normale
        });


        //ajout aux parents
        li.appendChild(span)
        li.appendChild(btnSupprimer)
        li.appendChild(btnModifier)
        ul.appendChild(li)
        zoneSaisie.value = "" // Vide le champ après ajout
    }else if(zoneSaisie.value === ""){
        erreur.style.display = "block"
        zoneSaisie.style.border = "1px solid red"
    }
})

zoneSaisie.addEventListener("click", () => {
        erreur.style.display = "none"
        zoneSaisie.style.border = ""
})