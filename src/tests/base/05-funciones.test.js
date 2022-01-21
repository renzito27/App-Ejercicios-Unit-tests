import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe ('pruebas en archivo funciones', () =>{

    test('pruebas en archivo funciones debe retornar un objeto', () =>{
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);

    });

    test('get usuario debe retornar un objeto', ()=>{

        const nombre = 'son Goku'
           
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });

    });


});