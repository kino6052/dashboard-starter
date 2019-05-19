import { IStateObject, Utils } from "../../Shared/utils";

export interface IMenuState {
    drawer: {
        open: boolean
    }
}

export const DEFAULT_STATE: IMenuState = {
    drawer: {
        open: false
    }
}

export const DRAWER_WIDTH = 240;

export class UIState {
    static MenuState: IStateObject<IMenuState> = Utils.generateState(DEFAULT_STATE);
}