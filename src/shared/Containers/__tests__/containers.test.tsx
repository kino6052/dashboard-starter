import React, { Component } from "react";
import { Utils } from "../../utils";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { withState } from "..";
import { UIState } from "../../../Services/UIState/UIState";

Enzyme.configure({ adapter: new Adapter() });

class DummyComponent extends Component<{}, {}> {
    constructor(props: {}){
        super(props);
    }
    render() {
        return <div { ...this.props }>Test</div>;
    }
}

describe('Containers', () => {
    it('should correctly create HOC withState', () => { 
        const state = UIState.MenuState;
        // @ts-ignore
        const Test = withState<{}, {}, {}>(state, DummyComponent);
        // @ts-ignore
        const t = mount(<Test/>);
        // expect(t.getDOMNode()).toEqual('');
        const c = t.children().getElements()[0];
        expect(c.props.state).toEqual({ drawer: { open: false } });
        expect(c.props.updateState).toBeTruthy();
    })
})