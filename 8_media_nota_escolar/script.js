const array = [100,100,100,90];

console.log(mediaAluno(array));

function mediaAluno(notas){
    let total = 0;
    for(let nota of notas){
        total+=nota;
    }    
    let media = (total/array.length);
    console.log(`A média do aluno foi ${media} pontos.`);
    if(media >= 90 && media <=100){
        console.log(`A - Excelente - Aluno Aprovado!`)
    }else if(media >= 80 && media <90){
        console.log(`B - Ótimo - Aluno Aprovado!`)
    }else if(media >= 70 && media <80){
        console.log(`C - Muito bom - Aluno Aprovado!`)
    }else if(media >= 60 && media <70){
        console.log(`D - Bom - Aluno Aprovado!`)
    }else if(media >= 50 && media <60){
        console.log(`E - Ruim - Aluno Reprovado!`)
    }else if(media >= 40 && media <50){
        console.log(`F - Péssimo - Aluno Reprovado!`)
    }else{
        console.log(`Aluno abaixo da expectativa, deve regredir um semestre!`)
    }
}

//Jeito mais limpo de fazer a sequência de if
/* if (media < 39) return `Aluno abaixo da expectativa, deve regredir um semestre!`;
    if (media < 49) return `F - Péssimo - Aluno Reprovado!`;
    if (media < 59) return `E - Ruim - Aluno Reprovado!`;
    if (media < 69) return `D - Bom - Aluno Aprovado!`;
    if (media < 79) return `C - Muito bom - Aluno Aprovado!`;
    if (media < 89) return `B - Ótimo - Aluno Aprovado!`;
    return `A - Excelente - Aluno Aprovado!`
    */