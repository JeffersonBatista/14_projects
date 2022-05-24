let number = 30;
verificaParOuImpar(number);
function verificaParOuImpar(number){
    for (let i=0; i<=number; i++){
        if(i % 2 === 0){
            console.log(`O número ${i} é par`);
        }else{
            console.log(`O número ${i} é ímpar`);
        }
    }
}