//1
function somarEntradas (num1, num2){
    console.log(num1 + num2)
}

somarEntradas(3, 9)
//2
function imprimirBooleano (primeiroNum, segundoNum){
    console.log(primeiroNum > segundoNum)
}

imprimirBooleano (5, 9)

//3
function verificarPar (numero){
    if(numero%2 === 0){
        console.log("O número é par")
    } else {
        console.log("O número é ímpar")
    }
}

verificarPar(20)

//4

function receberString (minhaFrase){
    console.log(`${minhaFrase.toUpperCase()}`)
    console.log(`${minhaFrase.length}`)
    
}

receberString("teste")