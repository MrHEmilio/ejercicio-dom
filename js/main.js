let encabezado1 = document.getElementById("encabezado1");
encabezado1.innerText = "Ejercicio hhhhh";
console.log(encabezado1.innerText);


let encabezado2 = document.getElementById("encabezado2");
encabezado2.innerText = "DOM Exercise";
console.log(encabezado2.innerText);


let listas = document.getElementsByTagName("ul");
console.log(listas.length);

let elementos = document.getElementsByClassName("list-group-item");
console.log(elementos.item(7).innerText);

let otroElementos = document.querySelectorAll("ul>li"); //todos
console.log("otroElemento: ", otroElementos)
let otroElemento = document.querySelector("ul>li"); // solo el primero
console.log("otroElemento: ", otroElemento)



let btnMostrar = document.getElementById("btnMostrar");

btnMostrar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("botón btnModificar presionado")
});