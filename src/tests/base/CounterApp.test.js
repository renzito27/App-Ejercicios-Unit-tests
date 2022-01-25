import React from 'react';
import {shallow} from 'enzyme';
//import '@testing-library/jest-dom';
import CounterApp from '../../CounterApp';



describe('pruebas en CounterApp',()=>{

    let wrapper = shallow(<CounterApp/>);
    beforeEach( () =>{

        wrapper = shallow( <CounterApp/> );

    });

    test('Debe mostrar CounterApp correctamente',()=>{
         
        
        expect(wrapper).toMatchSnapshot();

    });

    test ('debe mostrar el valor por defecto de 100',()=>{

        const wrapper = shallow(<CounterApp value={ 100 } />);
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('100');

    });

    test ('debe de incrementar con el boton de +1',()=>{

        wrapper.find('button').at(0).simulate('click'); 
        const counterText = wrapper.find('h2').text().trim();
        
        expect(counterText).toBe('11');
    })

    test ('debe de decrementar con el boton de -1',()=>{

        wrapper.find('button').at(2).simulate('click'); 
        const counterText = wrapper.find('h2').text().trim();
        
        expect(counterText).toBe('9');
    })

    test ('debe colocar el valor por defecto de el btn de reser',()=>{

        const wrapper = shallow(<CounterApp value={ 105 } />);
        
        wrapper.find('button').at(0).simulate('click'); 
        wrapper.find('button').at(0).simulate('click'); 
        wrapper.find('button').at(1).simulate('click'); 

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('105');
    })


});