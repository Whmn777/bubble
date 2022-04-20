let counter = 0;

const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);
    //Obtenir des tailles aléatoires des bulles.
    const size = Math.random()* 200 + 100 + "px";
    bubble.style.width = size;
    bubble.style.height = size;
    //Obtenir un nombre aléatoire pour les position top et left
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";
    //Obtenir un nombre aléatoire positif ou négatif
    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

    //Dès que l'on clique sur une bulle elle disparaît
    bubble.addEventListener("click", () => {
        //On incrémente la valeur du counter à chaque clique
        counter ++;
        //On injecte la valeur du counter dans l'affichage
        document.querySelector("h3").textContent = counter;
        bubble.remove();
    });
    //Détruire les bulles au bout de 8 secondes :
    setTimeout(() => {
        bubble.remove();
    }, 8000);
}
//Créer une bulle toutes les 3 secondes
setInterval(bubbleMaker, 1000);
