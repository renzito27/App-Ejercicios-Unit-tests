import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
//import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';


describe ('Pruebas en componente <primeraApp/>', () => {

   /*  test ('debe de mostrar el mensaje "Hola soy Goku"',() => {

       const saludo = "Hola, soy Goku" ;
       const {getByText} = render(<PrimeraApp saludo = { saludo }/>);
       expect(getByText(saludo)).toBeInTheDocument();
    }); */

    test('debe de mostrar <PrimeraApp/> correctamente', () => {
        const saludo = "Hola, soy Goku";
        const wrapper = shallow(<PrimeraApp saludo ={ saludo}/>)
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo = "Hola, soy Goku";
        const subTitulo = 'Soy un subtitulo';
        const wrapper = shallow(
            <PrimeraApp 
                saludo ={ saludo}
                subtitulo = { subTitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
        
        
    });


});