const calcular_btn = document.getElementById("calcular")
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const operacao = document.getElementById("operacao")
const result = document.getElementById("resultado")
let resultado;
calcular_btn.addEventListener("click",(e)=>{
    let body = {
        num1: num1.value,
        num2: num2.value,
        operacao: operacao.value,
    }
    if(body.num1 === "" || body.num2 === ""){
        return
    }
    console.log(body)
    fetch("/", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
    })
    .then((res)=>res.json())
    .then((body_json)=>{
        resultado = body_json["resultado"]
        console.log(resultado)
        result.value = resultado
    })
    .catch((e)=>{
        console.error(e)
    })
})