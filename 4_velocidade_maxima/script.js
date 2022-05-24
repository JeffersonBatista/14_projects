//Velocidade máxima 70km/h
//Velocidade entre 70 e 80 - multa leve
//Velocidade entre 80 e 90 - multa grave
//Velocidade entre 90 e 100 - multa gravíssima
//Velocidade ácima de 100 - multa pesada

/* verificarVelocidade(80);

function verificarVelocidade(velocidade){
    switch(velocidade){
        case velocidade <=70:
            console.log(`Velocidade ${velocidade} km/h dentro do limite máximo.`);
            break;
        case velocidade >70 && velocidade <=80:
            console.log(`Velocidade ${velocidade} km/h, multa leve - 3 pontos!`);
            break;
        case velocidade >80 && velocidade <=90:
            console.log(`Velocidade ${velocidade} km/h, multa grave - 5 pontos!`);
            break;
        case velocidade >90 && velocidade <=100:
            console.log(`Velocidade ${velocidade} km/h, multa gravíssima - 7 pontos!`);
            break;
        case velocidade >100:
            console.log(`Velocidade ${velocidade} km/h, multa pesada - CNH Suspensa!`);
            break;
    };
} */
verificarVelocidade(120);
function verificarVelocidade(velocidade){
    const velMaxima = 70;
    const kmPonto = 5;
    if(velocidade <= velMaxima){
        console.log(`Velocidade ${velocidade}km/h dentro do limite de velocidade`);
    } else {
        const pontos = ((velocidade - velMaxima)/kmPonto).toFixed(0);
        if(pontos >= 12)
            console.log(`Velocidade ${velocidade}km/h - Multa gravíssima - Suspensão da CNH`);
        else
            console.log(`Velocidade ${velocidade}km/h - Multa grave - ${pontos} pontos.`);
    }
}