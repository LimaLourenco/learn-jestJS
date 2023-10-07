// Curso de JestJS - Módulo VI - Globais do Jest

const average = require('../index13');

const { describe, test, expect, beforeAll, afterEach, afterAll } = require('@jest/globals');

let gradeOne;

let gradeTwo; 

let gradeTree; 

// Antes de tudo, vou executar está/uma ação:
beforeAll(() => {
    console.log("Antes dos testes")
    gradeOne = 4;
    gradeTwo = 8;
    gradeTree = 7;
})

// Após cada um dos testes, vou executar está/uma ação:
afterEach(() => {
    console.log("Após cada um dos testes, vou executar uma ação")
    gradeOne = 3;
    gradeTwo = 5;
    gradeTree = 4;
})

// Depois de tudo, vou colocar nulo(Não existe), em todas as variavéis, 
// fazendo com que o JavaScript acabe matando, essas variaveis. 
afterAll(() => {
    console.log("Depois dos testes")
    gradeOne = null;
    gradeTwo = null;
    gradeTree = null;
})


describe("Checking student grades", () => {
    test("should check if the average of the grades 4, 8 end 7 is greater or equal than 6", () => {
        expect(average(gradeOne, gradeTwo, gradeTree)).toBeGreaterThanOrEqual(6)
    })

    test("should check if the average of the grades 3, 5 end 4 is less or equal than 6", () => {
        expect(average(gradeOne, gradeTwo, gradeTree)).toBeLessThanOrEqual(6)
    })
})

