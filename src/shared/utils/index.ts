import { Subject, BehaviorSubject } from "rxjs";

export class Utils {
    static updateState = <T>(oldState: T, newState: { [K in keyof T]?: T[K] }): T => ({ ...oldState, ...newState });
    static pushNewStateToBehaviorState = <T>(subject: BehaviorSubject<T>, newState: { [K in keyof T]?: T[K] }) => {
        const oldState: T = subject.getValue();
        const pushState: T = Utils.updateState(oldState, newState);
        subject.next(pushState);
    };
}