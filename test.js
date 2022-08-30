const {somar, subtracao, divisao} = require("./index")

describe('Parâmetros de entrada', () => {
    test("Deve-se lançar um erro caso os parâmetros de entrada não sejam números",()=>{
        expect(()=>somar("a",1)).toThrow("Erro: formato de dados inválidos");
        expect(()=>subtracao(1,"b")).toThrow("Erro: formato de dados inválidos");
        expect(()=>divisao("a","b")).toThrow("Erro: formato de dados inválidos");

    })
})


describe('Função de soma', () => {
    test("Soma 1 + 1 deve ser igual a 2",()=>{
        expect(somar(1,1)).toBe(2);
    })
    test("Soma 10 + 5 deve ser igual a 15",()=>{
        expect(somar(10,5)).toBe(15);
    })

})


describe('Função de subtração', () => {
    test("Subtração 1 - 1 deve ser igual a 0",()=>{
        expect(subtracao(1,1)).toBe(0);
    })

    test("Subtração 10 - 15 deve ser igual a -5",()=>{
        expect(subtracao(10,15)).toBe(-5);
    })
})

describe('Função de divisão', () => {

    test("Divisão 50 / 2 deve ser igual a 25",()=>{
        expect(divisao(50,2)).toBe(25);
    })

    test("Divisão 80 / 4 deve ser igual a 20",()=>{
        expect(divisao(80,4)).toBe(20);
    })

    test("Divisão 1 / 3 deve ser igual a 0.3333333333333333",()=>{
        expect(divisao(1,3)).toBe(0.3333333333333333);
    })

    test("Divisão 1 / 0 lançar um erro com a mensagem: 'Erro: divisão por zero.'",()=>{
        expect(()=>divisao(1,0)).toThrow()
        expect(()=>divisao(1,0)).toThrow('Erro: divisão por zero.')
    })

    test("Divisão -1 / 0 lançar um erro com a mensagem: 'Erro: divisão por zero.'",()=>{
        expect(()=>divisao(-1,0)).toThrow()
        expect(()=>divisao(-1,0)).toThrow('Erro: divisão por zero.')
    })
})
