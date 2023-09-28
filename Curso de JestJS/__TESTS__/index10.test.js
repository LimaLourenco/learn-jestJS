// Curso de JestJS - Módulo IV - Asserções toContain e .not

const users = require('../index10');

const { describe, test, expect } = require('@jest/globals');

describe("Checking items of array", () => {
    test("should check if the array contains the user Maria", () => {
        // Caso contêm aquele elemento no array, sendo verdade passou no teste:
        expect(users).toContain("Maria")
    })

    test("should ckeck if the array does not contain user Júlio", () => {
        // Caso não contenha aquele elemento no array, sendo verdade passou no teste: 
        expect(users).not.toContain()
    })
})

