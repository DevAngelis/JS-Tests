// Test 1 - Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.

//DevAngelis Resolution
//1
nome = "Leonardo"

console.log('Olá, '.concat(nome.concat("!")))

//2
function comprimento(nome) {
    return 'Olá, '.concat(nome.concat("!"))
}
console.log(comprimento('Catarina'))

//Cod3r(teacher) Resolution

// Resolução 1
function cumprimentar1(nome) {
const saudacao = "Olá"
return [saudacao, nome].join(', ').concat("!")
}

console.log(cumprimentar1('Zelda'))

// Resolução 2
function cumprimentar2(nome) {
return "Olá, " + nome + "!"
}

console.log(cumprimentar2('Jeanne'))
// Resolução 3
function cumprimentar3(nome) {
return `Olá, ${nome}!`
}

console.log(cumprimentar3('Maria'))
