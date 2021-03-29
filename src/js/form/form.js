import getData from './getData';
import { renderUserLink, renderOkRequestElement, 
        renderRejectRequestElement, renderProblemWithServer } from "./view"
import { clearInput, checkTargetLinkLength } from "./helpers"
import {shakeThisElement} from "../animation/shakeElement"

const form = document.querySelector('.form');
const formInput = form.querySelector('.form__input');
const formError = form.querySelector('.form__error');
const linkBoxContainer = document.querySelector('.response-wrapper');

form.addEventListener("submit", handleForm);
form.setAttribute("novalidate", true);

function handleForm(event){
    event.preventDefault();

    if(checkValidation()){
        sendRequest(formInput.value);
        clearInput(formInput);
    }
}

function checkValidation(){
    formError.style.display = "none";
    
    if (!formInput.checkValidity() || formInput.value === "") {
        formError.style.display = "block";
        return false;
    } 
    else
        return true;
}

function sendRequest(){
    const linkDiv = createNewLinkDiv();
    getData(formInput.value).then((data)=>{
        handleResponse(data, linkDiv);
     }).catch(error => {
         linkDiv.innerHTML = renderProblemWithServer(linkDiv.targetLink);
         console.error(error);
     })
}

function handleResponse(data, linkDiv){
    if(data.ok){
        linkDiv.innerHTML = renderOkRequestElement(data, linkDiv.targetLink)
        createCopyButton(data, linkDiv);
    }
    else
        linkDiv.innerHTML = renderRejectRequestElement(linkDiv.targetLink)
}

function createCopyButton(dataToCopy, element){
    element.querySelector(".button--response").addEventListener("click", function() {
        handleCopyButton(this, dataToCopy);
        shakeThisElement(element)
    })
}

function handleCopyButton(button, data){
     navigator.clipboard.writeText(data.result.short_link)
     button.disabled = true;
     button.textContent = "Copied!";
}

function createNewLinkDiv(){
    const linkDiv = document.createElement('div')
    linkDiv.classList.add("response");
    linkDiv.targetLink = checkTargetLinkLength(formInput.value);
    linkDiv.innerHTML = renderUserLink(linkDiv.targetLink);
    linkBoxContainer.append(linkDiv);
    return linkDiv;
}


