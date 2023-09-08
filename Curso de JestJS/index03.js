// Curso de JestJS - Módulo II - Asserção toBeInstanceOf

const {isEmployee, isClient} = require('../Curso de JestJS/files/personIndex03');

module.exports = class PersonFactory {
    getPerson(type) {
      if (type == null) {
        return null;
      }
  
      switch (type.toLowerCase()) {
        case "employee":
          return new isEmployee();
        case "client":
          return new isClient();
        default:
          return null;
      }
    }
  };
