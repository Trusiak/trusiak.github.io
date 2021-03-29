export function clearInput(input){
    input.value = "";
}

export function checkTargetLinkLength(link){
    if(isUserLinkLengthToLong(link))
        return cutUserLinkLength(link);
    else
        return link;
}

function cutUserLinkLength(userLink){
    let shortlyLink = '';
    let maxLengthOfLink = window.innerWidth < 500 ? 30 : 40; 
    for(let i = 0; i<maxLengthOfLink; i++){
        shortlyLink += userLink[i];
    }
    return shortlyLink+="...";
}

function isUserLinkLengthToLong(userLink){
    return userLink.length >= 40;
}