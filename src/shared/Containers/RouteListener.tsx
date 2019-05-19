import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { UIState } from '../../Services/UIState/UIState';
import { History } from 'history';

export const RouteListener = withRouter(({ history }) => {
    console.warn('test');
    // history.push('/1');
    UIState.RouterState.subscribe((state) => {
        // history.push(state.location);
        console.warn('check');
    });
    return null;
}) as new() => Component<{ history: History<any> }>;
