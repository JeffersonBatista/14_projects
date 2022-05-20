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
