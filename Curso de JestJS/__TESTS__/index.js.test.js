// Curso de JestJS - 1. Módulo I - Asserção toBe

const areaOfSquare = require('../index')
const { expect, test, describe } = require('@jest/globals');

// describe -> Descrição da minha bateria de testes;
describe('Calculate area of square', () => {
    // test ou it-> É o teste unitário
    test('passed the value 3, it should return 9', () => {
        // expect -> É o valor esperado, quando a função recebe um parametro.
        expect(areaOfSquare(3)).toBe(9)
    })
    test('passed the value 17, it should return 289', () => {
        expect(areaOfSquare(17)).toBe(289) 
    })
    test('passed the value 4, it should return 16', () => {
        expect(areaOfSquare(4)).toBe(16)
    })
}) 
