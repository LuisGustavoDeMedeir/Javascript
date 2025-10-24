//const funcoesMatematicas = require('./funcoes_matematicas.js');
//const calculadoraIdade = require('./calculadora_idade.js');

import {somar, subtrair, dividir, multiplicar} from './modulos/funcoes_matematicas.js';
import * as calculadoraIdade from './modulos/calculadora_idade.js';

// Exemplo de uso:
//const resultadoSoma = funcoesMatematicas.somar(5, 3);
//console.log(`Resultado da soma: ${resultadoSoma}`);

//const resultadoSubtracao = funcoesMatematicas.subtrair(10, 4);
//console.log(`Resultado da subtração: ${resultadoSubtracao}`);

//const resultadoDivisao = funcoesMatematicas.dividir(7, 7);
//console.log(`Resultado da divisão: ${resultadoDivisao}`);

//const resultadoMultiplicacao = funcoesMatematicas.multiplicar(3, 23);
//console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);

console.log("Soma: " + somar(5, 3));
console.log("Subtração: " + subtrair(10, 4));
console.log("Divisão: " + dividir(7, 7));
console.log("Multiplicação: " + multiplicar(3, 23));



console.log(calculadoraIdade.idade('Kitty', 2009));

console.log(calculadoraIdade.idade_var('Álvaro', 2004, 2050));