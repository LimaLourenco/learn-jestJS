// Curso de JestJS - Módulo I - Asserção toEqual

const Person = require("../index01");
const { expect, test, describe } = require('@jest/globals');

// Instanciando a classe, ou seja criando um novo objeto Pessoa;
let paulo = new Person("Paulo Reis", "pauloreis@email.com", new Date(1990, 5, 12)); 

let obj_testePaulo = new Person("Paulo Reis", "pauloreis@email.com", new Date(1990, 5, 12));

describe("Should checking", () => {
    test("Should check if the properties of object paulo equal the properties of object obj_testePaulo", () => {
        // Está comparando, cada uma das propriedades de todo o objeto de forma recursiva, então tem que usar o toEqual.
        expect(paulo).toEqual(obj_testePaulo); 
    })
})

// Observação: Se for apenas por propriedade do objeto, posso usar tanto toBe ou toEqual não tem problema.
