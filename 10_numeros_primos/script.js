numerosPrimos(15);

/* Primeira tentativa
function numerosPrimos(limite){
    for(let i=1; i<=limite; i++){
        if(i%2 === 0){
        }else{
            console.log(i);
        }
    }
}
*/

/* Segunda tentativa - Funcionou perfeitamente
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
 */  

/* Otimização e reutilização do código */
function numerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        if(ehPrimo(numero)) console.log(numero);
    }
}

function ehPrimo(numero){
    for(let divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0){
                return false;
            }
        }
        return true;
}
//Cada função fica responsável por resolver um problema