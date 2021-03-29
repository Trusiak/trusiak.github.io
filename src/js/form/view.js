export function renderUserLink(targetLink){
    return  `
        <p class="response__input-link">${targetLink}</p>
        <div class="response__awaiting">
            <div class="response__ring"></div>
        </div>
    `
}

export function renderOkRequestElement(data, targetLink){
    return `
        <p class="response__input-link">${targetLink}</p>
        <p class="response__output-link">${data.result.short_link}</p>
        <button class="button button--response button--full">Copy</button>
    `
}

export function renderRejectRequestElement(targetLink){
   return `
        <p class="response__input-link">${targetLink}</p>
        <div class="response__error">
            <p class="response__error-text">Ups, something goes wrong with your link</p>
            <img src="assets/images/warn.svg" width="20" height ="20" alt="" class="response__error-icon">
        </div>
    `
}

export function renderProblemWithServer(targetLink){
    return `
         <p class="response__input-link">${targetLink}</p>
         <div class="response__error">
             <p class="response__error-text">ERROR: Failed to connect, server not responding</p>
             <img src="assets/images/warn.svg" width="20" height ="20" alt="" class="response__error-icon">
         </div>
     `
 }


