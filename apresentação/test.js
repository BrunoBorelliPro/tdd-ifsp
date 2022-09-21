const {soma, subtracao, multiplicacao, divisao} = require("./caulculadora_module/calculadora")

describe('Função de soma', () => {
    test("Soma 1 + 1 deve ser igual a 2",()=>{
        expect(soma(1,1)).toBe(2);
    })
    test("Soma 10 + 5 deve ser igual a 15",()=>{
        expect(soma(10,5)).toBe(15);
    })

})
