somar(10);
function somar(limite){
    let s = 0;
    for(let i = 0; i <= limite;i++)
        if(i % 3 === 0 || i % 5 === 0){
            s+=i;
        };
    console.log(s);
}
