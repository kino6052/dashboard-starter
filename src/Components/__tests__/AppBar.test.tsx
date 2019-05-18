import React from 'react';
import { SearchAppBarComponent } from "../AppBar/AppBar";
import { mount } from "enzyme";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('AppBar', () => {
    it('should correctly set parameters on Toolbar', () => {
        let wrapper;
        wrapper = mount(<SearchAppBarComponent classes={{}} isDrawerOpen={false} onClick={() => {}}/>);
        expect(wrapper.find("Toolbar").length).toEqual(1);
        expect(wrapper.find("Toolbar").prop("disableGutters")).toEqual(true);
        wrapper = mount(<SearchAppBarComponent classes={{}} isDrawerOpen={true} onClick={() => {}}/>);
        expect(wrapper.find("Toolbar").length).toEqual(1);
        expect(wrapper.find("Toolbar").prop("disableGutters")).toEqual(false);
    });
});