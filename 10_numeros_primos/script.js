numerosPrimos(15);

function numerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        let ehPrimo = true;
        
        for(let divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0){
                ehPrimo = false;
                break;
            }
        }
        if(ehPrimo) console.log(numero);
    }
}
   
/* 
function numerosPrimos(limite){
    for(let i=1; i<=limite; i++){
        if(i%2 === 0){
        }else{
            console.log(i);
        }
    }
}
*/