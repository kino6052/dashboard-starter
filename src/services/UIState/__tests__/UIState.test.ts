import { BehaviorSubject } from 'rxjs';
import { Utils } from '../../../shared/utils';

interface IMenuState {
    drawer: {
        open: boolean
    }
}

const DEFAULT_STATE: IMenuState = {
    drawer: {
        open: false
    }
}

class UIState {
    static MenuStateSubject: BehaviorSubject<IMenuState> = new BehaviorSubject(DEFAULT_STATE);
    static SetMenuState = (state: { [K in keyof IMenuState]?: IMenuState[K] }): void => Utils.pushNewStateToBehaviorState<IMenuState>(UIState.MenuStateSubject, state);
}

describe('UIState', () => {
    it('should correctly set UIState',() => {
        expect(UIState.MenuStateSubject.getValue()).toEqual(DEFAULT_STATE);
        UIState.SetMenuState({ drawer: { open: true } });
        expect(UIState.MenuStateSubject.getValue()).toEqual({ drawer: { open: true } })
    });
})