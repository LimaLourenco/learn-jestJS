// Curso de JestJS - Módulo V - Asserção throw

const division = require('../index12');

const { describe, test, expect } = require('@jest/globals');

describe("Checking exceptions", () => {
    test("should throw an exception", () => {
        // Vai verificar se foi lançado uma exceção, sendo verdade passou no teste:
        // Precisará de uma função anonima, para verificar se a função vai gera uma exceção ou não.
        // Gera uma execeção:
        expect(() => {
            division(25,0)
        }).toThrow()
    })

    test("should not throw an exception", () => {
         // Não gera uma execeção:
        expect(() => {
            division(25,2)
        }).not.toThrow()
    })
})

