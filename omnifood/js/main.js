const openNav = document.querySelector("#open-nav");

const closeNav = document.querySelector("#close-nav");

const nav = document.querySelector("nav");

openNav.addEventListener("click", function () {
	nav.classList.toggle("hide");

});

closeNav.addEventListener("click", function(){
	nav.classList.toggle("hide");
});
