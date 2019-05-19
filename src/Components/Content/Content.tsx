import React, { Component } from 'react';
import { Router, Route } from "react-router";
import { AppRoute, UIState, IMenuState, DRAWER_WIDTH } from '../../Services/UIState/UIState';
import { StateProps } from '../../Shared/interfaces/PropTypes';
import classNames from 'classnames';
import { createStyles, Theme, withStyles } from '@material-ui/core';
import { withState } from '../../Shared/Containers';

const styles = (theme: Theme) =>
  createStyles<string>({
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -DRAWER_WIDTH
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: "0 8px",
      ...theme.mixins.toolbar,
      justifyContent: "flex-end"
    }
  });

declare type Props = StateProps<IMenuState> & ReturnType<typeof styles>;

const ContentComponent = (props: {}) => {
    const { classes, state: { drawer: { open }} } = props as Props;
    return (
        <main className={classNames(classes.content, { [classes.contentShift as string]: open })}>
            <div className={classes.drawerHeader as string} />
            <Router history={ UIState.History }>
                <Route exact path={AppRoute.Home} component={() => <div>Test 1</div>} />
                <Route exact path={AppRoute.Calendar} component={() => <div>Test 2</div>} />
            </Router>
        </main>
    )
}

export const StateContent = withState(UIState.MenuState, withStyles(styles)(ContentComponent) as unknown as new() => Component);
