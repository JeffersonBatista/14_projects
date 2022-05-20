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