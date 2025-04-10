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
    let element = document.createElement("li");
    element.innerText = "Another item";
    element.classList.add("list-group-item");

    let element2 = element.cloneNode(true);
    element2.innerText = "Another item 2";
    
    
    // listas.item(0).before(element);
    // listas.item(0).prepend(element);
    // listas.item(0).append(element2);
    // listas.item(0).after(element);

    listas.item(1).insertAdjacentHTML("beforebegin", 
        `<li class="list-group-item">Before begin item</li>`
    );
    listas.item(1).insertAdjacentHTML("afterend",
        `<li class="list-group-item">
                After end item
        </li>`
    );
    listas.item(1).insertAdjacentHTML("afterbegin", 
        `<li class="list-group-item">After begin item</li>`
    );
    listas.item(1).insertAdjacentHTML("beforeend",
        `<li class="list-group-item">Before end item</li>`
    );
});

let txtRFC = document.getElementById("txtRFC");
let txtCURP = document.getElementById("txtCURP")
let txtTelefono = document.getElementById("txtTelefono");

window.addEventListener("load", function(event){
    console.log("Se terminó de cargar la página");
});

function txtToUpper(event){
    event.preventDefault();
    event.target.value = event.target.value.trim().toUpperCase();

}


txtRFC.addEventListener("blur", txtToUpper);
txtCURP.addEventListener("blur", txtToUpper);


txtTelefono.addEventListener("blur", function(event){
    // event.preventDefault();
    txtTelefono.value = txtTelefono.value.trim().slice(0, 10);
    }
);

