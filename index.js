const {somar, subtracao, divisao, multiplicacao} = require("./modulo-calculadora")
const readline = require('readline');

const metodos = {
    "+": somar,
    '-': subtracao,
    '*': multiplicacao,
    '/': divisao
}
var rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
 });

function makeQuestion(msg) {
    return new Promise(resolve => rl.question(msg, res => resolve(res)))
}
async function calculadora(){
    let n1 = parseFloat(await makeQuestion("Digite o primeiro número: "))
    let operacao = await makeQuestion("Digite a operação: [+, -, *, /]")
    let n2 = parseFloat( await makeQuestion("Digite o segundo número: "))
    rl.close()
    console.log(metodos[operacao](n1, n2))
}

calculadora()