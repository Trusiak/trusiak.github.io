const hamburger = document.querySelector(".hamburger__button");
const hamburgerContainer = document.querySelector(".menu__wrapper");

hamburger.addEventListener("click", handleClick)

function handleClick(event){
    this.classList.toggle('opened')
    hamburgerContainer.classList.toggle('menu__wrapper--active');
}