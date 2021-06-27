import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import  AddCategory  from '../../components/AddCategory';

describe("Pruebas de AddCatergory", () => {


    const setCategories = jest.fn();
    let wrapper;
    
    
    beforeEach( ()=>{
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test("Debe mostrar el componente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Debe cambiar la caja de texto", ()=>{
        const input = wrapper.find('input');

        input.simulate('change', {target:{value: "Hola mundo"}} );
    });

    test("No deben poster la informacion onSubmit", ()=>{
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });

    test("debe llamar Setcategory y limpiar la caja de texto", ()=>{
        // simular el inputchange
        const value = "Hola mundo";
        wrapper.find('input').simulate('change', {target: {value}});
        // simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        // se debe hacer llamado una vez el setCategory
        expect(setCategories).toHaveBeenCalled();

        // el valor del input debe estar vacio

        expect(wrapper.find('input').prop('value') ).toBe('');

    })

});