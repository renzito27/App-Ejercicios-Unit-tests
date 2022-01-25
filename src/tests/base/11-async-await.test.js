import { getImagen } from "../../base/11-async-await"


describe ('pruebas en async y await', () => {

    test('debe retornar el url de la imagen', async() => {

        const url = await getImagen();

        expect (url.includes('https://')).toBe(true);
    })
})