import React from "react";

import { shallow } from "enzyme";
import GifExpert from "../GifExpert";

describe("Revisando GifexpertApp", () => {

    test("Debe mostrarse correctamente", ()=>{
        const wrapper = shallow(<GifExpert />);
        expect(wrapper).toMatchSnapshot();
    });

    test("Debe mostrar una lista de categorias", ()=>{
        const categories = ['One punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpert defaultCategory={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
});