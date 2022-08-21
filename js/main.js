var elBurger = document.querySelector(".header__burger");
var elHeader = document.querySelector(".header");

elBurger.addEventListener("click", function(){
    elHeader.classList.toggle("active");
})