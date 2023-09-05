// Curso de JestJS - Módulo II - Asserção toBeNull

const {Employee, Client} = require('../Curso de JestJS/files/person');

// Está minha classe vai ter um método, que vai retorna uma pessoa.

module.exports = class PersonFactory {
    getPerson(type) {
      if (type == null) {
        return null;
      }
  
      switch (type.toLowerCase()) {
        case "employee":
          return new Employee();
        case "client":
          return new Client();
        default:
          return null;
      }
    }
  };