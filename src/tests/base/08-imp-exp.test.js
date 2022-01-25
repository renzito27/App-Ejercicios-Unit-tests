import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe ('pruebas en funciones de héroes', ()=>{

    test('debe de retornar un heroe por id', ()=>{

        const id = 1;
        const heroe = getHeroeById( id);

        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);
    });
    
    test('debe de retornar undefined si el héroe no existe', () =>{
    const id = 10;
    const heroe = getHeroeById( id);

    expect(heroe).toBe(undefined);

    });

 /*    test('debe de retornar un erreglo con los héroes de DC', ()=>{

        const owner = 'DC';
        const hoeres = getHeroesByOwner(owner);
        
        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(heroesData);

    }); */

test('debe de retornar un arreglo con los héroes de de marvel', () =>{
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
});

});