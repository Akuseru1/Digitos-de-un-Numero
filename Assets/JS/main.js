var botonCont = document.getElementById("btn");
botonCont.style.visibility = "hidden";
var numero = document.getElementById("num");
var entrada = document.getElementById("inp");
var Interfaces = document.getElementById("inter");

var valor; //contiene el valor aleatorio
var unidades;
var decenas;
var centenas;
var unidadesTomadas = false;
var decenasTomadas = false;
var centenasTomadas = false;
window.onload = function() {
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
    entrada.innerHTML += "<input class='unidades' id='uni'oninput='userInputU()' placeholder='  #' type='number' min='0' max='9'>";
    entrada.innerHTML +="<input class='decenas' id='deci' oninput='userInputD()' placeholder='  #' type='number' min='0' max='9'>";
    entrada.innerHTML +="<input class='centenas' id='centi' oninput='userInputC()' placeholder='  #' type='number' min='0' max='9'>";
}

function numAleatorio(){
   return Math.floor(Math.random() * (1000 - 100+1) + 100);
}

function userInputU(){
    recuperarUnidad();
        if(unidadesTomadas && decenasTomadas && centenasTomadas) {
            if(checkearRespuesta()){
                botonCont.style.visibility = "visible";
            } else return alert("puntaje: 0");
        }   
}
function userInputD(){
    recuperarDecena();
        if(unidadesTomadas && decenasTomadas && centenasTomadas) {
            if(checkearRespuesta()){
                botonCont.style.visibility = "visible";
            } else return alert("puntaje: 0");
        }   
}
function userInputC(){
    recuperarCentena();
        if(unidadesTomadas && decenasTomadas && centenasTomadas) {
            if(checkearRespuesta()){
                botonCont.style.visibility = "visible";
            } else return alert("puntaje: 0");
        }   
}

function checkearRespuesta() {
    if(recuperarUnidad() == unidades && recuperarDecena() == decenas && recuperarCentena() == centenas){
        return true;
    } else return false;
}

function ganaste() {
    alert("puntaje: 1");
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
    unidadesTomadas = true;
    var unidad = document.getElementById("uni");
    return unidad.value;
}
function recuperarDecena(){
    decenasTomadas = true;
    var decena = document.getElementById("deci");
    return decena.value;
}
function recuperarCentena(){
    centenasTomadas = true;
    var centena = document.getElementById("centi");
    return centena.value;
}
