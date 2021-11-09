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