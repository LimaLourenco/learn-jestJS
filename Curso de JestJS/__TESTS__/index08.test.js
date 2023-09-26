// Curso de JestJS - Módulo III - Asserção toBeCloseTo

const average = require('../index08');

const { describe, test, expect } = require('@jest/globals');

describe("Checking student grades", () => {
    test("should ckeck if the average of the grades 4, 3 and 6 is 4.3", () => {
        // Caso a média seja 4.33 em decimal, sendo verdade passou no teste:
        expect(average(4, 3, 6)).toBeCloseTo(4.33) 
    })

    test("should ckeck if the average of the grades 5, 5 and 6 is 5.33", () => {
        // Caso a média seja 5.3 em decimal, sendo verdade passou no teste, 
        // e precisão vai ser de uma (1) casa decimal, já por padrão é duas (2) casas decimais:
        expect(average(5, 5, 6)).toBeCloseTo(5.3, 1) 
    })
})

