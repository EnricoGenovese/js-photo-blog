/*
*Milestone 1*
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
*Milestone 2*
Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
*Milestone 3*
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
*Bonus*
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata
*/


const myAlbum = document.getElementById("myAlbum");


const baseURL = "https://jsonplaceholder.typicode.com/";
const type = "photos";

const needed = 6; // from i input

axios.get(baseURL + type,
    {
        params: {
            '_limit': needed,
        }
    }
).then((res) => {
    let template = "";
    //
    res.data.forEach((obj) => {
        console.log(obj)
        template += `
        <figure class="card">
            <div class="pin"><img src="./img/pin.svg"></div>
            <img src="${obj.url}" alt="${obj.albumId}-${obj.id}">
            <figcaption class="caption">${obj.title}</figcaption>
        </figure> `
    })
    myAlbum.innerHTML = template;
});