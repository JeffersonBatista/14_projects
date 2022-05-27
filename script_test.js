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