function maiorNumero(){
    let a = 10;
    let b = 30;
    if(a > b){
        console.log(`O maior valor é o valor de A: ${a}`);
    }else{
        console.log(`O maior valor é o valor de B: ${b}`);
    }
}
maiorNumero();
/* Outra maneira de resolver
let valorMaior = max(10,20);
console.log(valorMaior);

function max(number1, number2){
    if (number1 > number 2)
        return number1;
    return number2;
}*/
//Ou ainda utilizando o operador ternário:
//return number1 > number 2 ? number1 : number2;
