import React from 'react';
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { StateContent } from "../Content";
import { UIState, AppRoute } from "../../../Services/UIState/UIState";

Enzyme.configure({ adapter: new Adapter() });

describe('Content', () => {
    it('should correctly render content', () => {
        const wrapper = mount(<StateContent/>);
        UIState.RouterState.setState({ location: AppRoute.Home });
        expect(wrapper.find('Route').at(0)).toMatchSnapshot();
        UIState.RouterState.setState({ location: AppRoute.Calendar });
        expect(wrapper.find("Route").at(0)).toMatchSnapshot();
    })
});