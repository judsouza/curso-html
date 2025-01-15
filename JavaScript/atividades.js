alert ('Bem vindo a minha página!');

function exibirMensagem () {
    alert('Você clicou no botão');
    console.log('A página executou o metado');
}

//Exercício 3 - Calculadora
let numero1 = 10 , numero2 = 5;
function realizarCalculos() {
    somar(valor1, valor2);
    subtratir(valor1, valor2);
    dividir(valor1, valor2);
    multiplicar(valor1, valor2);
}

function somar(valor1, valor2) {
    let resultado = valor1 + valor2;
    console.log('O resultado da soma entre '+valor1+' e '+valor2+' é: '+resultado);
}

function subtratir(valor1, valor2) {
    valor1 - valor2;
    console.log('O resultado da subtração entre '+valor1+' e '+valor2+' é: '+resultado);
}

function dividir(valor1, valor2) {
    valor1 / valor2;
    console.log('O resultado da divisão entre '+valor1+' e '+valor2+' é: '+resultado);
}

function multiplicar(valor1, valor2) {
    valor1 * valor2;
    console.log('O resultado da multiplicação entre '+valor1+' e '+valor2+' é: '+resultado);
}