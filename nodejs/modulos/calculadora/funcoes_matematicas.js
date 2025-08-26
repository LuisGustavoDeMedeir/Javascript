function somar(a,b){
 returm a + b;
}
function suntrair(a,b){
 returm a - b;
}
 function multiplicar(a,b){
 returm a * b;
}
function dividir (a,b) {
    if (b === 0) throw new Error('Divisão por zero');
    return a / b;
}
module.exports = {
    somar
    suntrair
    multiplicar
    dividir
};