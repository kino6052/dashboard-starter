import React from 'react';
import { StateDrawer } from "../Drawer";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { UIState } from '../../../Services/UIState/UIState';

Enzyme.configure({ adapter: new Adapter() });

describe('Drawer', () => {
    it('should correctly render drawer', () => {
        UIState.MenuState.setState({ drawer: { open: true } })
        const wrapper = mount(<StateDrawer/>);
        expect(wrapper.find('StateDrawerComponent').prop('state')).toEqual({ drawer: { open: true } })
        expect(wrapper.find('Drawer').prop('open')).toEqual(true);
        wrapper.find("IconButton").simulate('click');
        expect(wrapper.find('StateDrawerComponent').prop('state')).toEqual({ drawer: { open: false } })
        expect(wrapper.find('Drawer').prop('open')).toEqual(false);
        wrapper.find("IconButton").simulate('click');
        expect(wrapper.find('StateDrawerComponent').prop('state')).toEqual({ drawer: { open: false } })
        expect(wrapper.find('Drawer').prop('open')).toEqual(false);
    })
})