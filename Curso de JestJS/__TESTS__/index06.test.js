// Curso de JestJS - Módulo III - Asserções toBeGreaterThan e toBeGreaterThanOrEqual

const average = require('../index06');

const { describe, test, expect } = require('@jest/globals');

describe("Checking student grades", () => {
    test("should ckeck if the a average of the grades 7, 8 and 7 is greater than 6", () => {
        expect(average(7, 8, 7)).toBeGreaterThan(6)
    })
    
    test("should ckeck if the average of the grades 6, 6 and 6 is greater then or equal to 6", () => {
        // Caso a média seja maior ou igual a 6:
        expect(average(6, 6, 6)).toBeGreaterThanOrEqual(6)
    })
})

