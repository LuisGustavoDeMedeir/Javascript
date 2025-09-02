const funcoesMatematicas = require('./funcoes_matematicas');
const calculadora_idade = require('./calcudara_idade');
const resultadoSoma = funcoesMatematicas.somar(5,3);
console.log('Resultado da soma: ${resultadoSoma}');

const resultadoSubtracao = funcoesMatematicas.suntrair(10,4);
console.log('Resultado da soma: ${resultadoSubtracao}');

const resultadoMultiplicacao = funcoesMatematicas.multiplicar(7,7);
console.log('Resultado da soma: ${resultadoMultiplicacao}');

const resultadodividir = funcoesMatematicas.dividir(7,7);
console.log('Resultado da soma: ${resultadodividir}');
console.log(calculadora_idade.idade("joão",2004,2050))