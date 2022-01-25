import { retornaArreglo } from "../../base/07-deses-arr";

describe ('pruebas en archivo deses.arr', () =>{

    test('pruebas en archivo funciones debe retornar un string y un numero', () =>{
        
       const arr = retornaArreglo();
            //['ABC',123];
       // const [letras, numeros] = retornaArreglo();   

       expect(arr).toEqual(['ABC',123]);
       // expect (letras).toBE('ABC);
       //expect(typeof letras).toBe('string');
       //expect(numero).toBe(123);
       //expect(typeof numeros).toBE('number')

        });

    });
