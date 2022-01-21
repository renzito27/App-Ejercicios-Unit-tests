import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe ('pruebas en el archivo template string',  ()=>{

    test(' getSaludo debe retornar hola Renzo', () =>{
        const nombre = 'Renzo';

        const saludo =  getSaludo(nombre);

        expect(saludo).toBe('Hola'+nombre);
    });

    test(' getSaludo debe retornar Hola Renzito si no hay argumento', () =>{

        const saludo = getSaludo();
        expect(saludo).toBe('HolaRenzito');
    });
});