let number = 50;
verificaParOuImpar(number);
function verificaParOuImpar(number){
    if(number % 2 === 0){
        console.log(`O número ${number} é par...`);
    }else{
        console.log(`O número ${number} é ímpar...`);
    };
}