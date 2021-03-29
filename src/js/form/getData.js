export default async function getData(userLink){
    const apiUrl = `https://api.shrtco.de/v2/shorten?url=${userLink}`
    const data = await fetch(apiUrl);
    return data.json();
}
