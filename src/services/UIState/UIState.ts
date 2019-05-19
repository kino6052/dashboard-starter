import { IStateObject, Utils } from "../../Shared/utils";
import { createBrowserHistory } from "history";

export interface IMenuState {
    drawer: {
        open: boolean
    }
}

export interface IRouterState {
    location: AppRoute
}

export const DEFAULT_MENU_STATE: IMenuState = {
    drawer: {
        open: false
    }
}

export enum AppRoute {
    Home = '/',
    Calendar = '/calendar'
}

export const DEFAULT_ROUTER_STATE: IRouterState = {
    location: AppRoute.Home
}

export const DRAWER_WIDTH = 240;

export class UIState {
    static MenuState: IStateObject<IMenuState> = Utils.generateState(DEFAULT_MENU_STATE);
    static RouterState: IStateObject<IRouterState> = Utils.generateState(DEFAULT_ROUTER_STATE);
    static History = createBrowserHistory();
}

UIState.RouterState.subscribe(state => UIState.History.push(state.location));