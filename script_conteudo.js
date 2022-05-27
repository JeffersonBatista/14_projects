console.log('Bem vindo ao curso de javascript');
let nome = 'Jefferson'; //String
console.log(nome);
let sobrenome = undefined; //indefinido
let corFavorita = null; //Nulo
let idade = 31; //Number
console.log('você tem ' + idade + ' anos');
let estaAprovado = true; //Boolean
console.log('Esta aprovado no processo? ');
if (estaAprovado == true){
    console.log('SIM');
}else{
    console.log('NÃO');
}
let tipagemDinamica = 38.8;
console.log(typeof(tipagemDinamica));
console.log(typeof(nome));
//Objetos em javascript - cria um objeto com variáveis internas (propriedades), podendo ter funções internas
let pessoa = {
    nome: 'Jefferson', // Key value (chave, seguida de um valor)
    sobrenome: 'Batista',
    idade: 31,
    sexo: 'masculino',
};
console.log(pessoa);
//Arrays - é um conjunto de dados que podeser acessado por um índice []
let familia = ['Jefferson', 'Priscila', 'Helena'];
console.log(familia);
console.log(familia[2])
console.log('Quantidade de membros: ' + familia.length);
//Functions (Verbo + substantivo)
//tipos:
//1- Realiza uma tarefa e não retorna nada
//2- Realiza uma tarefa e retorna algum valor, podendo ser atribuido á uma variável
let corSite = 'Azul';
function resetaCor(){//Função simples
    corSite = 'null';
};
function modificaCor(cor){//Função com parâmetro de entrada
    return cor;
};
console.log(corSite);
resetaCor();
console.log(corSite);
modificaCor('Verde');
console.log(corSite);
let nomeDoColega = ['Jeremias', 29, 'masculino'];

//No Js temos os seguintes tipos de operadores: aritméticos, atribuição, de comparação, lógicos e bitwise
//Aritméticos:
let salario = 3200.00;
console.log(salario + 600.00);
console.log(salario - 200.00);
console.log(salario * 2);
console.log((salario / 3).toFixed(2));
console.log(5**5);
//Incrementa e Decrementa
let idade = 32;
console.log(idade++);
console.log(idade);
console.log(--idade);//Escrevendo antes da função ele executa a operação antes de mostrar na tela
console.log(--idade);
//Atribuição: o operador = faz com que uma variável receba algum valor, podendo ser acrescido de um + ou -
// Operadores de igualdade
//Estrita
console.log(1 === 1); //Compara o valor e o tipo do dado, a mais indicada para evitar conversões indesejadas
//Solta
console.log('1' == 1); //Compara somente os valores, sem se importar com o tipo
// Operador ternário, funciona como um if else simples
let pontos = 100;
let tipo = pontos >= 100 ? 'premium' : 'comum';
console.log(tipo);
//Operadores lógicos: são utilizados quando é necessário tomar decisões em condições multiplas, retorna um booleano
let maior = false;
let habilitacao = true;
console.log(maior && habilitacao);//os dois tem que ser true
console.log(maior || habilitacao);//só um precisa ser true
console.log(!maior);//verifica o oposto da condição
/*Operador bitwise: faz comparações com valores não booleanos, atribuindo o primeiro valor que nao esteja na list 
Falsy, atribuindo o valor ao Truethy*/
/*Falsy List:
- undefined
- NaN
- null
- false
- ''
- 0
*/
// Tudo que nao está na lista Falsy faz parte do Truthy
let nome = 'Jefferson';
let nasc = 1990;
let menor = (2022-nasc) < 18 ? true : false;
console.log(false || menor || nome || idade);/*Irá retornar 'Jefferson', pois é o primeiro valor que se 
enquadra na lista Truthy*/
//Estruturas condicionais
//if else (simples e composta)
//Se a hora estiver entre 06:00 e 12:00 = Bom dia
//Se a hora estiver entre 12:00 e 18:00 = Boa tarde
//Se não = Boa noite
let hora = 5;
if (hora > 6 && hora < 12){
    console.log('Bom dia!');
}else if(hora >= 12 && hora < 18){
    console.log('Boa tarde...');
}else{
    console.log('Boa noite!');
};
//Switch case
let permission;
permission = 'ajudante';

switch(permission){
    case 'comum':
    console.log('Usuário Comum!');
    break;
    case 'gerente':
    console.log('Gerente!');
    break;
    case 'Diretor':
    console.log('Diretor!');
    break;
    default:
    console.log('Tipo de usuário não reconhecido...');
};
//Estruturas de repetição
//For
for(let i = 0; i < 5; i++){
    console.log(`Estou aprendendo rápido... ${i+1}`);
};
//While
let i = 0;
while(i < 5){
    console.log(`contando... ${i+1}`)
    i++;
};
//Do While
i = 0;
do{
    console.log(`digitando... ${i+1}`);
    i++;
}while(i < 10)
//For in
const pessoa ={
    nome: 'Jefferson',
    idade: 32
};

for(let chave in pessoa){
    console.log(chave, pessoa.nome);
};
const cores = ['Preto', 'Rosa', 'Verde', 'Azul'];
for(let indice in cores){
    console.log(indice, cores[indice]);
};
//For of - muito parecido com o for in, mas é simples e mostra o que esta dentro de cada íncice
const cores = ['Preto', 'Rosa', 'Verde', 'Azul'];
for(let cor of cores){
    console.log(cor);
}
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

//Factory Functions(Funções de fábrica)
const celular = {
    marcaCelular : 'Samsung',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria : 5000,
    ligar : function(){
        console.log('Fazendo uma ligação...')
    }
}
console.log(celular);
/*Caso eu precisasse criar vários modelos de celular, este código seria improdutivo, pois eu teria que criar varias
cópias do mesmo objeto, tornaria o código muito extenso...
Uma Factory Function encapsula toda a informação e transforma em um padrão de objeto*/
//camelCase - primeira letra minuscula
function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return {//Quando algo é criado, é necessário retornar um valor
        marcaCelular : marcaCelular,//Quando uma declaração tem Key e value com o mesmo nome, podemos deixar só o Key(conforme o tamanhoTela e capacidadeBateria)
        tamanhoTela,
        capacidadeBateria,
        ligar(){//Ligar pode ser uma função direta, ao invés de receber o resultado de uma função
            console.log('Fazendo uma ligação...')
        }
    }
}//Uma função limpa, otimizada, que pode ser usada em qualquer lugar do código, passando somente os parâmetros, facilitando a manutenção
const celular1 = criarCelular('Motorola',7.6,6000);
console.log(celular1);
//Function Constructor
//PascalCase - todas as letras iniciais maiúsculas
function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,//o this. serve para referenciar o objeto atual
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria
    this.ligar = function(){
        console.log('Fazendo ligação...');
    }
}

const celular2 = new Celular('Apple', 5.5, 6200);
console.log(celular2);

/* Tanto a factory function quanto a constructor function executam a mesma função, sendo apenas diferenciadas
pela sintaxe, sendo de livre escolha e gosto de cada desenvolvedor */

/*Os objetos em Js são dinâmicos, ou seja, é possível adicionar ou excluir 
parâmetros e funções durante todo o código, */
const mouse = {
    marca : 'Logitech',
    cor : 'Cinza e preto'
}
console.log(mouse);
//Acrescentando um atributo e uma função
mouse.velocidade = 600;
mouse.trocarDPI = function(){
    console.log('Trocando DPI...');
}
console.log(mouse);
//Excluindo a função
delete mouse.trocarDPI;
console.log(mouse);

//Clonando objetos em Js e adicionando propriedades
const celular = {
    marcaCelular : 'Samsung',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria : 5000,
    ligar : function(){
        console.log('Fazendo uma ligação...')
    }
}
console.log(celular);
//Clonagem simples
const celular2 = {...celular};//técnica spread
console.log(celular2);

//Clonagem composta
const celular3 = Object.assign({
    tipoFone : 'bluetoth'
},celular);
console.log(celular3);//Vai herdar todas as propriedades do objeto principal + a que foi criada no clone
//Funções matemáticas
console.log(Math.random());//Gera um número aleatório de 0 á 1
console.log(Math.max(3,6,9,12,15,18,21));//Mostra o maior número dentro dos números de parâmetro
console.log(Math.min(3,6,9,12,15,18,21));//Mostra o menor número dentro dos números de parâmetro
console.log(Math.pow(3,2))//Retorna o primeiro elevado a quantidade de vezes do segundo
console.log(Math.toSource(32));//Retorna uma string do valor