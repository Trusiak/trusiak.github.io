const getStartedButtons = document.querySelectorAll(".button--started")
const form = document.querySelector(".form")

getStartedButtons.forEach(el=> el.addEventListener("click", handleClick));

function handleClick(){
    form.scrollIntoView({
        behavior: 'smooth',
        block: "center"
    });
}