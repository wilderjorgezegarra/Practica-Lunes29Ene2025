//  file:///D:/Alura/Logica/Curso02/04/index.html
//
//Wilder Hoy, 29/01/2025
/*
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/   
prompt("Miercoles 29Enero2025 Wilder y Yalu");
let numeroCuadrado = [1, 2, 3, 4, 5];
function cuadrado(lista) {
    let numeroCuadrado = [];
    for (contador = 0; contador < lista.length; contador++) {
        numeroCuadrado.push(lista[contador] * lista[contador]);
    }
    return numeroCuadrado;
}
console.log(`El cuadrado de lista ${numeroCuadrado} es ${cuadrado(numeroCuadrado)}`);


/*
function imc(altura, peso){
    indice = peso / (altura * altura);
    return indice;
}
s
let h =parseFloat("Ingrese su altura en metros:");
let w =parseFloat("Ingrese su peso en Kg.:");

let indiceMasaCorporal=imc(2,3);
console.log(indiceMasaCorporal);
*/

/*
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            //Colocar-Almacenar numeroGenerado
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`xIndica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
*/

