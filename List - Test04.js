/* Test 4 - Crie uma função que recebe um número (de 1 a 12 e retorne o mês 
correspondente como uma string. Por exemplo, se a entrada for 2, a função 
deverá retornar "fevereiro", pois este é o 2° mês.*/

//DevAngelis Resolution
function nomeDoMes(numero){
    const meses =[
    'janeiro', 
    'fevereiro', 
    'março', 
    'abril', 
    'maio', 
    'junho', 
    'julho', 
    'agosto', 
    'setembro', 
    'outubro', 
    'novembro', 
    'dezembro']
    return meses[--numero]
}

console.log(nomeDoMes(5))

//Cod3r(teacher) Resolution
//1
function receberNomeDoMes1(numero) {
    switch(numero){
    case 1:
    return "janeiro";
    case 2:
    return "fevereiro";
    case 3:
    return "março";
    case 4:
    return "abril";
    case 5:
    return "maio";
    case 6:
    return "junho";
    case 7:
    return "julho";
    case 8:
    return "agosto";
    case 9:
    return "setembro";
    case 10:
    return "outubro";
    case 11:
    return "novembro";
    case 12:
    return "dezembro";
    }
}

console.log(receberNomeDoMes1(5))
//2
function receberNomeDoMes2(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mapeamento[--numero];
    }
console.log(receberNomeDoMes2(5))