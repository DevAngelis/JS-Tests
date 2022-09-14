/* Test 7 - Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o parâmetro numero (o primeiro) 
está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre" como inlusivo, ou seja, considerando se numero é igual a 
minimo ou a maximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não 
considerando se numero é igual a minimo ou a maximo.*/

// DevAngelis Resolution
function receba(minimo, maximo, numero, inclusivo) {
    if (minimo < numero && numero > maximo || inclusivo == true){
    return trues
    } else {
        return false
    }
}

console.log(receba(10, 100, 50))
console.log(receba(16, 100, 160))
console.log(receba(3, 3, 150))
console.log(receba(3, 3, 150, true))
console.log(receba(0, 3, 150, true))

// Cod3r(teacher) Resolution

function estaEntre(numero,minimo, maximo, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
    }

console.log(estaEntre(10, 100, 50))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 3, 150))
console.log(estaEntre(3, 3, 150, true))