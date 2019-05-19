import { UIState, DEFAULT_STATE } from '../UIState';

describe('UIState', () => {
    it('should correctly set UIState',() => {
        expect(UIState.MenuState.getState()).toEqual(DEFAULT_STATE);
        UIState.MenuState.setState({ drawer: { open: true } });
        expect(UIState.MenuState.getState()).toEqual({ drawer: { open: true } })
    });
})