let totalDeDias = 30;

let qtdAnos, qtdMeses;

qtdAnos = parseInt(totalDeDias/365);
qtdMeses= parseInt((totalDeDias-(365*qtdAnos))/30);
totalDeDias= parseInt((totalDeDias-(365*qtdAnos))-(qtdMeses*30));

console.log(qtdAnos);
console.log(qtdMeses);
console.log(totalDeDias);