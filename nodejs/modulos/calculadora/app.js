
import {somar,suntrair,multiplicar,dividir} from './modulos/funcoes_matematicas.js';
import calculadora_idade from 'calcudara_idade.js';


console.log ("soma:" + somar(3,6,9));
console.log ("subtração:" + suntrair(5,3));
console.log ("multiplicação:" + multiplicar(5,3));
console.log ("divisão:" + dividir(6,3));

console.log(calculadora_idade.idade("joão",1979,2050));