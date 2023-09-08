// Curso de JestJS - Módulo II - Asserção toBeInstanceOf

// Vai verificar se por acaso, existe uma referencia, que seja da instancia Cliente (Que cria um novo objeto).
// Ou caso, contrário uma instancia de Funcionário.
// Se passou na palavra client retorna o objeto isClient, e se passar na palavra employee retorna o objeto funcionário -> isEmployee.

const {isClient, isEmployee} = require('../files/personIndex03');

const PersonFactory = require('../index03');

const { describe, test, expect } = require('@jest/globals');

// Tendo acesso ao Objeto principal, para crição de outros objetos:
let factory = new PersonFactory();

// Descrevendo o que a gente pretende fazer: 
describe("Factory of Persons", () => {
    // Se a primeira referencia retornada vai ser um cliente e a segunda um funcionário,
    // caso contrário não for um objeto dessas classes, eu vou retornar que não passou no teste.
    test("passed a string with the client value, it should return a new client object", () => {
        expect(factory.getPerson("client")).toBeInstanceOf(isClient);
        // O Client que é um objeto que foi importado. Ou seja, tem que ser uma instancia deste tipo de classe Client.
    })
    test("passed a string with the employee value, it should return a new employee object", () => {
        expect(factory.getPerson("employee")).toBeInstanceOf(isEmployee);
    })
})

// Observação 1: Só vai passar esses testes, caso as duas instancias (Para criar um novo objeto) estejam corretas,
// por exemplo, se eu passar um string "employee", eu quero que seja uma instancia (toBeInstanceOf) de um objeto Employee.

// Observação 2: Se eu precisa, por algum motivo validar alguma referencia de objeto, uma instancia de objeto,
// para verificar se está instancia foi criada apartir de uma classe determinada, eu posso usar o toBeInstanceOf para verificar a origem deste objeto, e que instancia ele é, (Ou seja, quem está criando um novo objeto).