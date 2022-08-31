const {somar, subtracao, divisao, multiplicacao} = require("./modulo-calculadora")
const readline = require('readline');

const metodos = {
    "+": somar,
    '-': subtracao,
    '*':multiplicacao,
    '/':divisao
}

function createRL(){
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
}


async function calculadora(){
    let n1
    let n2
    let operacao
    rl = createRL()
    rl.question("Digite o primeiro numero:",(n1)=>{
        console.log(n1)
        this.n1 = n1
        rl.close()
    })
    rl = createRL()
    rl.question("Digite o segundo numero:",(n2)=>{
        console.log(n2)
        this.n2 = n2
        rl.close()

    })
    // rl.question("Digite a operação:",(operacao)=>{
    //     this.operacao = operacao
    // })

    // metodos[operacao](n1, n2)
}

calculadora()