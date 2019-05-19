import React, { Component, useState, ReactNode } from 'react';
import { IStateObject } from "../utils";

export function withState<T, P, S>(stateObject: IStateObject<T>, C: new() => Component<any, S>) {
    return class extends Component {
        state = stateObject.getState();
        constructor(props: P) {
            super(props);
            stateObject.subscribe((newState) => {
                if (JSON.stringify(this.state) !== JSON.stringify(newState)) {
                    this.setState(newState);
                }
            })
        }
        render() {
            return <C state={this.state} updateState={(newState: { [K in keyof T]: T[K] }) => stateObject.setState(newState)} {...this.props} />;
        }
    }
}