const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Justman',
    principal: 'Homem de Ferro',
    duracao:2
}

exibirPropriedades(filme);

function exibirPropriedades(obj){
    for (let indice in obj){
        if(typeof obj[indice] === 'string')
           console.log(`${indice}: ${obj[indice]}`)
    }
}