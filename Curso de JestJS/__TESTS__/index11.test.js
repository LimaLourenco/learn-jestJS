// Curso de JestJS - Módulo IV - Asserção arraycontaining

const users = require('../index11');

const { describe, test, expect } = require('@jest/globals');

describe("Checking items of array", () => {
    test("should check if the array contains all the items in another array", () => {
        // Caso contenha, todos elementos de um determinado array, que estão contidos em um outro array, sendo verdade passou no teste:

        let expectArray = ["José", "Maria", "Ana"]

        // Ou seja, Verificando se os dados, fazem parte daquele determinado conjunto de array. 
        expect(users).toEqual((expect.arrayContaining(expectArray)));
    })
})

