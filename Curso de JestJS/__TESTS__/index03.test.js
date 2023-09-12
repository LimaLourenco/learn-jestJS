// Curso de JestJS - Módulo II - Asserção toBeInstanceOf

// Irá verificar se por acaso, existe uma referencia, que seja da instancia isCliente (Cria um novo objeto sendo cliente).

// Ou caso, contrário uma instancia de isEmployee.

// Se passar na palavra client retorna o objeto isClient, e se passar na palavra employee retorna o objeto funcionário => isEmployee.

const {isClient, isEmployee} = require('../files/personIndex03'); // Importando os dois Objetos.

const PersonFactory = require('../index03'); 

const { describe, test, expect } = require('@jest/globals');

// Tendo acesso ao Objeto principal, para criação de outros objetos:
let factory = new PersonFactory();

// Descrevendo o que a gente pretende fazer: 
describe("Factory of Persons", () => {
    // Se a primeira referencia/objeto retornada vai ser um cliente, e a segunda vai ser um funcionário,
    // caso o contrário não for um objeto dessas classes, eu vou retornar que não passou no teste.
    test("passed a string with the client value, it should return a new client object", () => {
        expect(factory.getPerson("client")).toBeInstanceOf(isClient);
        // *Passou na palavra client, ele é o objeto isClient. E tem que ser uma instancia da classe isClient.
    })
    test("passed a string with the employee value, it should return a new employee object", () => {
        expect(factory.getPerson("employee")).toBeInstanceOf(isEmployee);
    })
})

// Observação 1: Só vai passar esses testes, caso as duas instancias (cria um novo objeto) estejam corretas,
// então por exemplo, se eu passar um string "employee", eu quero que seja uma instancia -> (toBeInstanceOf) de um objeto Employee.

// Observação 2: Se eu preciso, por algum motivo validar alguma uma instancia de objeto,
// preciso verificar, se está instancia foi criada a partir de uma classe determinada, 
// e assim eu posso usar o toBeInstanceOf para verificar a origem deste objeto,
// e que instancia ele é, (Ou seja, quem será que está criando o novo objeto).