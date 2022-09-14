/* Test 6 - Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o 
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for 
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de 
entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".*/

function inverso(valor) {
    const parametro = typeof valor
    if( parametro == "boolean")
    return console.log(!valor)
    else if( parametro == "number")
    return console.log(-valor)
    else
    return console.log('booleano ou número esperados, mas o parâmetro é do tipo', parametro)
}

inverso(true)
inverso("6")
inverso(-2000)
inverso("programação") 

function inverso2(valor2) {
    const tipo = typeof valor2
    if (tipo == "boolean") return !valor2
    else if (tipo == "number") return -valor2
    else
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
}

console.log(inverso2(true)) // retornará false
console.log(inverso2("6")) // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
console.log(inverso2(-2000)) // retornará 2000
console.log(inverso2("programação")) // retornará "booleano ou números, mas o parâmetro é do tipo string"