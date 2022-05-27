//Strings
//Tipo Primitivo
const mensagem = ' Olá eu me chamo Jefferson';
//Tipo objeto
const mensagem2 = new String('Nasci em 1990');
console.log(mensagem);
console.log(typeof mensagem);//Tipo
console.log(mensagem2);
console.log(typeof mensagem2);
console.log(mensagem.length);//Tamanho da String
console.log(mensagem2.length);
console.log(mensagem[1]);//O que está na posição do index
console.log(mensagem2[0]);
console.log(mensagem.includes('Olá'));//Se a string contém
console.log(mensagem.includes('Nascido'));
console.log(mensagem.startsWith('Olá'));//Se a string inicia com ''
console.log(mensagem.endsWith('nome'));//Se a string finaliza com ''
console.log(mensagem.indexOf('J'));//Informa o index de onde se encontra a letra
console.log(mensagem.trim());//Remove os espaços excedentes no início ou fim da String
console.log(mensagem.replace('Jefferson', 'Priscila'));//Troca uma palavra pela outra
console.log(mensagem.split(' '));//Separa a string pelo valor informado, no caso espaços