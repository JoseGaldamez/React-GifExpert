import React from "react";
import { shallow } from "enzyme"

import '@testing-library/jest-dom';

import {GifGrid} from '../../components/GifGrid';
import useFetchGifs from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs")

describe("Probando GifGrid", ()=> {
    
    
    test("Analizando Snapshot", ()=> {
        const gifs =  [{
            id: "ABC",
            url: "https://cualquiercos.com/algo.png",
            title: "Cualquier cosa"
        }];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true,
        });
        const wrapper = shallow(<GifGrid category="Hola" />);

        expect(wrapper).toMatchSnapshot();
    });




    
    test("Debe mostrar items cuando se cargan imagenes", () => {
        const gifs =  [{
            id: "ABC",
            url: "https://cualquiercos.com/algo.png",
            title: "Cualquier cosa"
        }, {
            id: "ABCD",
            url: "https://cualquiercos.com/algo.png",
            title: "Cualquier cosa"
        }];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        
        const wrapper = shallow(<GifGrid category="Hola" />);

        expect( wrapper.find('#loading').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);

    });
})