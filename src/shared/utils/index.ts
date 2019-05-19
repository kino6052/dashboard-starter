import { Subject, BehaviorSubject, Subscription } from "rxjs";

export interface IStateObject<T> {
    setState: (newState: { [K in keyof T]?: T[K]}) => void;
    getState: () => T;
    subscribe: (cb: (value: T) => void) => Subscription;
}

export class Utils {
    static updateState = <T>(oldState: T, newState: { [K in keyof T]?: T[K] }): T => ({ ...oldState, ...newState });
    static pushNewStateToBehaviorState = <T>(subject: BehaviorSubject<T>, newState: { [K in keyof T]?: T[K] }) => {
        const oldState: T = subject.getValue();
        const pushState: T = Utils.updateState(oldState, newState);
        subject.next(pushState);
    };
    static generateState = <T>(defaultState: T): IStateObject<T> => {
        const subject = new BehaviorSubject<T>(defaultState);
        return {
            setState: (newState: { [K in keyof T]?: T[K] }) => Utils.pushNewStateToBehaviorState<T>(subject, newState),
            getState: () => subject.getValue(),
            subscribe: subject.subscribe.bind(subject)
        }
    };
}