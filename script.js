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
//Objetos em javascript
let pessoa = {
    nome: 'Jefferson',
    sobrenome: 'Batista',
    idade: 31,
    sexo: 'masculino',
};
console.log(pessoa);
//Arrays
let familia = ['Jefferson', 'Priscila', 'Helena'];
console.log(familia);
console.log(familia[2])
console.log('Quantidade de membros: ' + familia.length);
//Functions (Verbo + substantivo)
let corSite = 'Azul';
function resetaCor(){//Função simples
    corSite = 'null';
};
function modificaCor(cor){//Função com parâmetro de entrada
    corSite = cor;
};
console.log(corSite);
resetaCor();
console.log(corSite);
modificaCor('Verde');
console.log(corSite);
let nomeDoColega = ['Jeremias', 29, 'masculino'];