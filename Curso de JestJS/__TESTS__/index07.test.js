// Curso de JestJS - Módulo III - Asserções toBeLessThan e toBeLessThanOrEqual

const average = require('../index07');

const { describe, test, expect } = require('@jest/globals');

describe("Checking student grades", () => {
    test("should ckeck if the a average of the grades 4, 3 and 8 is less than 6", () => {
        // Caso a média seja menor que 6, sendo verdade passou no teste:
        expect(average(4, 3, 8)).toBeLessThan(6) 
    })
    
    test("should ckeck if the average of the grades 6, 6 and 6 is less than or equal to 6", () => {
        // Caso a média seja menor ou igual a 6:
        expect(average(6, 6, 6)).toBeLessThanOrEqual(6)
    })
})

