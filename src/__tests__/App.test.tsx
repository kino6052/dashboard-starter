import React from 'react';
import { App } from "../App";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App.ts', () => {
    it('Should correctly render app', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    })
})