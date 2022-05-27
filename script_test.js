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