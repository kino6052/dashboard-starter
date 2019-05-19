import { IStateObject } from "../utils";

export interface StateProps<T> {
    state: T;
    updateState: (state: { [K in keyof T]?: T[K] }) => void;
}