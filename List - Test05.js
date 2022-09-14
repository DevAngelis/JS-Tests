// Test 5 - Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar números de strings.

//DevAngelis Resolution
function maiorOuIgual(numero1, numero2) {
    if(numero1 >= numero2 && typeof numero1 === typeof numero2) {
        console.log(true)
    } else{ 
        console.log(false)
    }
}
maiorOuIgual(0, 0)
maiorOuIgual(0, "0")
maiorOuIgual(5, 1)

//Cod3r(teacher) Resolution

function maiorOuIgual2(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
}
console.log(maiorOuIgual2(0, 0))
console.log(maiorOuIgual2(0, "0"))
console.log(maiorOuIgual2(5, 1))