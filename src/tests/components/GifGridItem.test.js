import React from 'react'; 
import { shallow } from "enzyme"
import { GifGridItem } from '../../components/GifGridItem';

describe ("Pruebas en GriGridItem", () => {

    const title = "Un titulo";
    const url = "https://localhost/logo.png";
    const wrapper = shallow( <GifGridItem title={title} url={url} /> )



    test('de hacer match con el snaptshot', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test("Debe tener un párrafo con el title", ()=>{
        const p = wrapper.find('p');
        
        expect(p.text().trim()).toBe(title);
    });

    test("Debe tener la imagen igual a la url y alt igual al title", ()=>{
        const img = wrapper.find('img');
        expect(img.prop('src') ).toBe(url);
        expect(img.prop('alt')).toBe(title);
        
    });

    test("debe tener la clase facein", ()=>{
        const div = wrapper.find('div');
        const classname = div.prop('className');

        expect( classname.includes("animate__fadeIn") ).toBe(true);
    });
} )