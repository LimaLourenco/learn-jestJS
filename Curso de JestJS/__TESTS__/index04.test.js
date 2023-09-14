// Curso de JestJS - Módulo II - Asserções toBeUndefined e toBeDefined

const Product = require('../index04');


const { describe, test, expect } = require('@jest/globals');

describe("Test on product information", () => {
    // Se as informações, estão ou não dentro de Product;
    // Vendo se existe, está propriedade de dentro de Product;
    
    let product = new Product();
    product.description = "Bolsa";

    
    test("Should return that the stock property is undefined", () => {
        // Não pode existir está propriedade;
        // Quero garantir que está propriedade stock, não exista mais;

        // É esperado que o meu Product.stock não exista, então está propriedade tem que ser toBeUndefined():
        expect(product.stock).toBeUndefined();
    })

    test("Should return that the description is defined", () => {
        // A propriedade, que quero ver se existe é a description;
        // A propriedade tem que ser definida, para passar neste teste;

        // É esperado que Product.description, então está propriedade tem que ser toBeDefined():
        // Tinha falhado o teste, porque a propriedade não tinha um valor definido.
        expect(product.description).toBeDefined(); 
    })
        
})

// Observação: Ou seja, tem uma diferença, de que existe ou não a propriedade. 