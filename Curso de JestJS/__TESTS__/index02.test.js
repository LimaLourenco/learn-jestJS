const PersonFactory = require('../index02');

let factory = new PersonFactory(); // Criando um novo objeto, apartir da minha PersonFactory.

const { expect, test, describe } = require('@jest/globals');

describe("Factory of Person", () => {
    // Definindo, quais serão os testes que vou colocar aqui:
    test("Not passing the parameter should return null", () => { // Se eu não passar um parametro, espero retornar null.

        expect(factory.getPerson()).toBeNull(); // Não passando nunhum parametro, o resultado/returno tem que ser null/nulo.
    })

    // Se eu passar um parametro inválido, tem que ser resultado/retorno null.
    test("passed the invalid parameter admin should return null", () => {  
        expect(factory.getPerson("admin")).toBeNull();
    })

})

// Observação 1: Para este teste passar, os dois resultados tem que ser null/nulo. 

// Observação 2: Sendo assim, vai ter que receber no final das contas: o Objeto ou Null.
