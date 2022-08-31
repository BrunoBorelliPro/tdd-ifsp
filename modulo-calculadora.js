function somar(a,b){
    validarParametros(a,b)
    return a + b
}

function subtracao(a,b){
    validarParametros(a,b)
    return a-b
}

function multiplicacao(a,b){
    validarParametros(a,b)
    return a*b
}

function divisao(a,b){
    validarParametros(a,b)
    let resultado = a/b
    if(resultado === Infinity || resultado === -Infinity){
       throw new Error("Erro: divisão por zero.")
    }
    return resultado
}



function validarParametros(a,b){
    if(typeof(a)!='number' || typeof(b)!='number'){
        throw new Error("Erro: formato de dados inválidos")
    }
}
module.exports = {
    somar,
    subtracao,
    divisao,
    multiplicacao
}