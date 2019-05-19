import React from 'react';
import { StateDrawer, StateDrawerComponent } from "../Drawer";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { UIState, AppRoute } from '../../../Services/UIState/UIState';

Enzyme.configure({ adapter: new Adapter() });

describe('Drawer', () => {
    it('should correctly render drawer', () => {
        UIState.MenuState.setState({ drawer: { open: true } })
        const wrapper = mount(<StateDrawerComponent/>);
        // expect(wrapper.find('StateDrawerComponent').prop('state')).toEqual({ drawer: { open: true } })
        expect(wrapper.find('Drawer').prop('open')).toEqual(false);
        wrapper.find("IconButton").simulate('click');
        // expect(wrapper.find('StateDrawerComponent').prop('state')).toEqual({ drawer: { open: false } })
        expect(wrapper.find('Drawer').prop('open')).toEqual(false);
        wrapper.find('ListItem').at(0).simulate('click');
        expect(UIState.RouterState.getState()).toEqual({ location: AppRoute.Home });
        wrapper.find('ListItem').at(1).simulate('click');
        expect(UIState.RouterState.getState()).toEqual({ location: AppRoute.Calendar });
    })
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