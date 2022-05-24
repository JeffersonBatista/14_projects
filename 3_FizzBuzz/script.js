const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
        return 'NaN';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    return entrada;    
}