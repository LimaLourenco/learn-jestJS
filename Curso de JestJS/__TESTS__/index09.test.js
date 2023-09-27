// Curso de JestJS - Módulo III - Asserção toHaveLength

const users = require('../index09');

const { describe, test, expect } = require('@jest/globals');

describe("Checking length of items of array", () => {
    test("should check if array has 3 items", () => {
        // Caso possua um número X de elementos do array, sendo verdade passou no teste:
        expect(users).toHaveLength(3)
    })

    test("should ckeck if index item 2 is 4 characters wide", () => {
        // Caso possua um numero X de caracteres, sendo verdade passou no teste: 
        expect(users[2]).toHaveLength(4)
    })
})

