var botonCont = document.getElementById("btn");
var numero = document.getElementById("num");
var entrada = document.getElementById("inp");
var Interface = document.getElementById("inter");

var valor; //contiene el valor aleatorio
var unidades;
var decenas;
var centenas;
window.onload = function() {
    botonCont.disabled = true;
    mostrarNumero();
    ponerBarras();
    calculos();

}
function mostrarNumero(){
    valor = numAleatorio();
    var texto = document.createTextNode(valor);
    numero.appendChild(texto);
    
}


function ponerBarras() {
    entrada.innerHTML += "<input class='unidades' id='uni'oninput='userInput()' placeholder='  #' type='number' min='0' max='9'>";
    entrada.innerHTML +="<input class='decenas' id='deci' oninput='userInput()' placeholder='  #' type='number' min='0' max='9'>";
    entrada.innerHTML +="<input class='centenas' id='centi' oninput='userInput()' placeholder='  #' type='number' min='0' max='9'>";
}

function numAleatorio(){
   return Math.floor(Math.random() * (1000 - 100+1) + 100);
}

function userInput(){
        if(checkearRespuesta()){
            alert(true);
            botonCont.disabled = false;
       }
     
}

function checkearRespuesta() {
    if(recuperarUnidad() == unidades && recuperarDecena() == decenas && recuperarCentena() == centenas){
        return true;
    } else return false;
}

function ganaste() {
    alert("Ganaste!");
    location.reload();
}
///Herramientas
function calculos() {
    
    unidades = valor;
    unidades %= 10;
    decenas = valor;
    decenas /= 10;
    decenas %= 10;
    decenas = Math.floor(decenas);
    centenas = valor; 
    centenas = centenas / 100;
    centenas = Math.floor(centenas);
}
function recuperarUnidad(){
    var unidad = document.getElementById("uni");
    return unidad.value;
}
function recuperarDecena(){
    var decena = document.getElementById("deci");
    return decena.value;
}
function recuperarCentena(){
    var centena = document.getElementById("centi");
    return centena.value;
}
