import React from 'react';
import { SearchAppBarComponent as StateAppBarComponent, StateAppBar } from "../AppBar";
import { mount } from "enzyme";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('AppBar', () => {
    it('should correctly set parameters on Toolbar', () => {
        let wrapper;
        wrapper = mount(<StateAppBarComponent/>);
        expect(wrapper.find("Toolbar").length).toEqual(1);
        expect(wrapper.find("Toolbar").prop("disableGutters")).toEqual(true);
        wrapper.find("IconButton").simulate("click");
        expect(wrapper.find("Toolbar").prop("disableGutters")).toEqual(true);
        wrapper = mount(<StateAppBar/>);
        expect(wrapper.find("Toolbar").length).toEqual(1);
        expect(wrapper.find("Toolbar").prop("disableGutters")).toEqual(true);
        wrapper.find("IconButton").simulate('click');
        expect(wrapper.find("Toolbar").length).toEqual(1);
        expect(wrapper.find("Toolbar").prop("disableGutters")).toEqual(false);
        wrapper.find("IconButton").simulate('click');
        expect(wrapper.find("Toolbar").length).toEqual(1);
        expect(wrapper.find("Toolbar").prop("disableGutters")).toEqual(true);
    });
});