//Exibir uma mensagem ao carregar a minha página
alert('Bem vindo a minha página!');

function exibirMensagem() {
    alert('Você clicou no botão');
    console.log('A página executou o método: exibirMensagem');
}


//Exercício 3 - Calculadora
function realizarCalculos() {
    let numero1 = parseInt(prompt('informe o primeiro valor'));
    let numero2 = parseInt(prompt('informe o segundo valor'));
    somar(numero1,numero2);
    subtrair(numero1,numero2);
    dividir(numero1,numero2);
    multiplicar(numero1,numero2);
}

function somar(valor1, valor2) {
    let resultado = valor1 + valor2;
    console.log('O resultado da soma entre '+valor1+' e '+valor2+' é: '+resultado);
}

function subtrair(valor1, valor2) {
    let resultado = valor1 - valor2;
    console.log('O resultado da subtração entre '+valor1+' e '+valor2+' é: '+resultado);
}

function dividir(valor1, valor2) {
    let resultado = valor1 / valor2;
    console.log('O resultado da divisão entre '+valor1+' e '+valor2+' é: '+resultado);
}

function multiplicar(valor1, valor2) {
    let resultado = valor1 * valor2;
    console.log('O resultado da multiplicação entre '+valor1+' e '+valor2+' é: '+resultado);
}

//Calculadora "Funcional"
function guardarNumero() {
    
}