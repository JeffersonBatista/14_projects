//FizzBuzz, retorna um dado, baseado na divisão do número por 3 e/ou 5
//Se o número for divísivel por 3 => Fizz
//Se o número for divísivel por 5 => Buzz
//Se o número for divísivel por 3 e 5 => FizzBuzz
//Se o número não for divísivel por 3 ou 5 => o próprio número
//Se não for do tipo number => NaN
const resultado = fizzBuzz(11);
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