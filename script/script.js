/* Paete 1
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

/* Parte 2
*CONSEGNA*
*Milestone 1*
Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.
*Milestone 2*
Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
Cliccando invece il button di chiusura, l’overlay scompare nuovamente.
*Milestone 3*
Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
*/
const myAlbum = document.getElementById("myAlbum");

const baseURL = "https://jsonplaceholder.typicode.com/";
const type = "photos";

let needed = 6;

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
        //
        template += `
        <figure class="card">
            <div class="pin"><img src="./img/pin.svg"></div>
            <img src="${obj.url}" alt="${obj.title} id="${obj.id}">
            <figcaption class="caption">${obj.title}</figcaption>
        </figure> `
    })
    myAlbum.innerHTML = template;
    photoEvent(myAlbum)
}).catch((error) => {
    console.log(error);
});

const overlay = document.getElementById("overlay");
const close = document.querySelector("#overlay button")



close.addEventListener("click", function () {
    overlay.classList.add("d-none");
})


function photoEvent() {
    const images = document.querySelectorAll("figure");
    // console.log(images)
    //
    images.forEach((image) => {
        image.addEventListener("click", function () {
            overlay.classList.remove("d-none");
            const img = image.querySelector("img:nth-child(2)");
            const overlayImg = document.querySelector("#overlay img");

            overlayImg.src = img.src;
        })
    })
}