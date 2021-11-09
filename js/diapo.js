let compteur =  0;
let timer, elements, slides;

window.onload = () => {
    const diapo = document.querySelector(".diapo");

    elements = document.querySelector(".elements");

    let firstimage = elements.firstElementChild.cloneNode(true);

    elements.appendChild(firstimage);

    slides = Array.from(elements.children);

    slideWidth = diapo.getBoundingClientRect().width;

    let next = document.querySelector("#nav-droite");
    let prev = document.querySelector("#nav-gauche");
    
    next.addEventListener("click", slideNext);
    prev.addEventListener("click", slidePrev);

    timer = setInterval(slideNext, 5000);

    function slideNext(){
        compteur++;
        elements.style.transition = "0.7s linear";

        let decal = -slideWidth * compteur;
        elements.style.transform = `translateX(${decal}px)`

        setTimeout(function(){
            if(compteur >= slides.length - 1){
                compteur = 0;
                elements.style.transition = "unset";
                elements.style.transform = "translateX(0)";
            }
        }, 1000);
    }
}

function slidePrev(){
    compteur--;
    elements.style.transition = "1s linear";

 
    if(compteur < 0){
        compteur = slides.length - 1;
        let decal = -slideWidth * compteur;
        elements.style.transition = "unset";
        elements.style.transform = `translateX(${decal}px)`
        setTimeout(slidePrev, 1);
    }

    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`
}

document.querySelector(".burger").addEventListener(
    "click", bonjour
)
document.querySelector("nav svg").addEventListener(
    "click", bye
)

function bonjour(){
    document.querySelector("nav").classList.toggle("apparait")
}
function bye(){
    document.querySelector("nav").classList.toggle("apparait")
}

document.querySelector(".elements").children[0].addEventListener("click", une);
document.querySelector(".elements").children[1].addEventListener("click", deux);
document.querySelector(".elements").children[2].addEventListener("click", trois);
document.querySelector(".elements").children[3].addEventListener("click", quatre);
document.querySelector(".elements").children[4].addEventListener("click", cinq);

function une(){
    document.querySelector(".explication").innerHTML = `
   Ca doit être relou d'avoir des bras aussi long`;
}
function deux(){
    document.querySelector(".explication").innerHTML = `
   Best prof mon gars !!!`;
}
function trois(){
    document.querySelector(".explication").innerHTML = `
   On vogue sur l'océan Indien, on cherche les embrouilles, on lacque franquouille
, on est pirate Somaliiiiieeeen`;
}
function quatre(){
    document.querySelector(".explication").innerHTML = `
   G@MERZ MARIO`;
}
function cinq(){
    document.querySelector(".explication").innerHTML = `
   MAIS QUE'EST CE QUE CA FOUS LA CA ?!`;
}