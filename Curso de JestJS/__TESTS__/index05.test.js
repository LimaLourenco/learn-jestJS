// Curso de JestJS - Módulo II - Asserções toBeTruthy e toBeFalsy 

const average = require('../index05');

const { describe, test, expect } = require('@jest/globals');

// Testando as notas dos estudantes:
describe("Checking student grades", () => {
    // Quero verificar, se é verdade que o estudante foi aprovado:
    test("should return true for grades: 6, 7 and 5", () => {
        // Passou essas notas, o resultado deve ser verdadeiro: Aprovado.
        expect(average(6, 7, 5)).toBeTruthy()
    })
    test("should return false for grade: 3, 5, 4", () => {
        // Passou essas notas, o resultado deve ser falso: Reprovado.
        expect(average(3, 5, 4)).toBeFalsy()
    })

})
