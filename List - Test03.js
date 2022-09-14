/* Test 3 - Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas 
por um funcionário num mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido 
mensal do funcionário, que é da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua 
hora. Desse valor, deve ser subtraído 30%, relativo a impostos.O retorno da função deve ser a string 
"Salário líquido é igual a R$ X", em que X é o salário líquido do funcionário no mês.*/

//DevAngelis Resolution

function calcularSalarioBruto(horasT, valorH) {
    return horasT * valorH
}

console.log('Sálario Bruto 1 igual a R$ '.concat(calcularSalarioBruto(150, 40.5)))
console.log('Sálario Bruto 2 igual a R$ '.concat(calcularSalarioBruto(180, 60)))

// 2


function calcularSalarioLiquid(horasT, valorH) {
    var salario = horasT * valorH
    var percentual = 0.30
    var calImposto = salario * percentual
    liquido = salario - calImposto
    return
}
calcularSalarioLiquid(150, 40.5)
console.log('Sálario liquido 1 igual a R$ '.concat(liquido))
calcularSalarioLiquid(180, 60)
console.log('Sálario liquido 2 igual a R$ '.concat(liquido))

//Cod3r(teacher) Resolution

function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {
    const salarioBruto = horasTrabalhadas * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30/100
    return `Salário igual a R$ ${salarioLiquido}`
    }