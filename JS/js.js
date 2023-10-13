// definition des constantes utilisé dans la partie
let scoreHumain = 0
let scoreMachine = 0
const affichageScoreHumain = document.querySelector(".affichageScoreHumain")
const affichageScoreMachine = document.querySelector(".affichageScoreMachine")


pierre.addEventListener("click", () => {

    function choixMachine(){
        let choixPierre = 0
        let choixFeuille = 1
        let choixCiseaux = 2
        let aleachiffre = Math.floor(Math.random() * 3)
        if(aleachiffre == choixPierre){
            document.querySelector(".choixMachine").innerHTML = `<p>Choix de la machine : </p> <img src="./UI_version/pierre.png" alt="">`
        }
        else if(aleachiffre == choixFeuille){
            document.querySelector(".choixMachine").innerHTML = `<p> Choix de la machine :</p><img src="./UI_version/feuille.png" alt="">` 
        }
        else if(aleachiffre == choixCiseaux){
            document.querySelector(".choixMachine").innerHTML = `<p>choix de la machine :</p><img src="./UI_version/ciseaux.png" alt="">` 
        }
        return aleachiffre
    }

    let choix = choixMachine()

    if(choix == 0){
        document.querySelector(".gagnantManche").textContent = `EGALITE`
        document.querySelector(".choixMachine").innerHTML = ` <p> Choix de la machine :</p><img src="./UI_version/pierre.png" alt="">`

    }
    else if(choix == 1){
        scoreMachine++
        affichageScoreMachine.textContent = scoreMachine
        if(scoreMachine !== 5){
            document.querySelector(".gagnantManche").textContent = `Victoire de la machine`
        }
        else {
            document.querySelector(".gagnantManche").textContent = `LES MACHINES ONT GAGNE...`
            scoreMachine = 0
            scoreHumain = 0
            setTimeout(() => {
                location.reload()
               }, 1500)
        }

        document.querySelector(".choixMachine").innerHTML = `<p> Choix de la machine :</p><img src="./UI_version/feuille.png" alt="">` 
    }
    else if(choix == 2){
        scoreHumain++
        affichageScoreHumain.textContent = scoreHumain
        if(scoreHumain !== 5){
            document.querySelector(".gagnantManche").textContent = `Victoire de l'homme`
        }
        else {
            document.querySelector(".gagnantManche").textContent = `LES HUMAINS ONT GAGNE :)`
            scoreMachine = 0
            scoreHumain = 0
            setTimeout(() => {
                location.reload()
               }, 1500)
        }

        document.querySelector(".choixMachine").innerHTML = `<p>Choix de la machine :</p><img src="./UI_version/ciseaux.png" alt="">` 
    } 

   setTimeout(() => {
    document.querySelector(".choixMachine").innerHTML = `<p>Choix de la machine :</p><img src="./UI_version/question_mark.png" width="80" alt="">`
   }, 1500)



})

feuille.addEventListener("click", () => {

    function choixMachine(){
        let choixPierre = 0
        let choixFeuille = 1
        let choixCiseaux = 2
        let aleachiffre = Math.floor(Math.random() * 3)
        if(aleachiffre == choixPierre){
            document.querySelector(".choixMachine").innerHTML = `<p>Choix de la machine :</p> <img src="./UI_version/pierre.png" alt="">`
        }
        else if(aleachiffre == choixFeuille){
            document.querySelector(".choixMachine").innerHTML = `<p>Choix de la machine :</p><img src="./UI_version/feuille.png" alt="">` 
        }
        else if(aleachiffre == choixCiseaux){
            document.querySelector(".choixMachine").innerHTML = `<p>Choix de la machine :</p><img src="./UI_version/ciseaux.png"  alt="">` 
        }
        return aleachiffre
    }

    let choix = choixMachine()

    if(choix == 0){
        scoreHumain++
        affichageScoreHumain.textContent = scoreHumain
        if(scoreHumain !== 5){
            document.querySelector(".gagnantManche").textContent = `Victoire de l'homme`
        }
        else {
            document.querySelector(".gagnantManche").textContent = `LES HUMAINS ONT GAGNE :)`
            scoreMachine = 0
            scoreHumain = 0
            setTimeout(() => {
                location.reload()
               }, 1500)
        }

        document.querySelector(".choixMachine").innerHTML = `<p>Choix de la machine :</p><img src="./UI_version/pierre.png" alt="">` 
    }
    else if(choix == 1){
        document.querySelector(".gagnantManche").textContent = `EGALITE`
        document.querySelector(".choixMachine").innerHTML = `<p>Choix de la machine :</p><img src="./UI_version/feuille.png" alt="">` 
    }
    else if(choix == 2){
        scoreMachine++
        affichageScoreMachine.textContent = scoreMachine
        if(scoreMachine !== 5){
            document.querySelector(".gagnantManche").textContent = `Victoire de la machine`
        }
        else {
            document.querySelector(".gagnantManche").textContent = `LES MACHINES ONT GAGNE...`
            scoreMachine = 0
            scoreHumain = 0
            setTimeout(() => {
                location.reload()
               }, 1500)
        }

        document.querySelector(".choixMachine").innerHTML = `<p> Choix de la machine :</p><img src="./UI_version/ciseaux.png" alt="">` 
    }

    setTimeout(() => {
        document.querySelector(".choixMachine").innerHTML = `<p>Choix de la machine :</p><img src="./UI_version/question_mark.png" width="80" alt="">`
       }, 1500)
})



ciseaux.addEventListener("click", () => {

    function choixMachine(){
        let choixPierre = 0
        let choixFeuille = 1
        let choixCiseaux = 2
        let aleachiffre = Math.floor(Math.random() * 3)
        if(aleachiffre == choixPierre){
            document.querySelector(".choixMachine").innerHTML = `<p>Choix de la machine : </p> <img src="./UI_version/pierre.png" alt="">`
        }
        else if(aleachiffre == choixFeuille){
            document.querySelector(".choixMachine").innerHTML = `<p>Choix de la machine :</p><img src="./UI_version/feuille.png" alt="">` 
        }
        else if(aleachiffre == choixCiseaux){
            document.querySelector(".choixMachine").innerHTML = `<p>Choix de la machine :</p><img src="./UI_version/ciseaux.png" alt="">` 
        }
        return aleachiffre
    }

    let choix = choixMachine()
    
    if(choix == 0){
        scoreMachine++
        affichageScoreMachine.textContent = scoreMachine
        if(scoreMachine !== 5){
            document.querySelector(".gagnantManche").textContent = `Victoire de la machine`
        }
        else {
            document.querySelector(".gagnantManche").textContent = `LES MACHINES ONT GAGNE...`
            scoreMachine = 0
            scoreHumain = 0
            setTimeout(() => {
                location.reload()
               }, 1500)
        }

        document.querySelector(".choixMachine").innerHTML = `<p> Choix de la machine :</p><img src="./UI_version/pierre.png" alt="">` 
    }
    else if(choix == 1){
        scoreHumain++
        affichageScoreHumain.textContent = scoreHumain
        if(scoreHumain !== 5){
            document.querySelector(".gagnantManche").textContent = `Victoire de l'homme`
        }
        else {
            document.querySelector(".gagnantManche").textContent = `LES HUMAINS ONT GAGNE :)`
            scoreMachine = 0
            scoreHumain = 0
            setTimeout(() => {
                location.reload()
               }, 1500)
        }

        document.querySelector(".choixMachine").innerHTML = `<p>Choix de la machine :</p><img src="./UI_version/feuille.png" alt="">` 
    }
    else if(choix == 2){
        document.querySelector(".gagnantManche").textContent = `EGALITE`
        document.querySelector(".choixMachine").innerHTML = `<p>Choix de la machine :</p><img src="./UI_version/ciseaux.png" alt="">` 
    }

    setTimeout(() => {
        document.querySelector(".choixMachine").innerHTML = `<p>Choix de la machine :</p><img src="./UI_version/question_mark.png" width="80" alt="">`
       }, 1500)

})


