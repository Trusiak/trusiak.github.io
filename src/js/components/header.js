const header = document.querySelector('.header');
const headerPos = header.offsetTop;

window.onscroll = function (){
    if (window.pageYOffset > headerPos)
      header.classList.add("header--sticky");
    else 
      header.classList.remove("header--sticky");
}