import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {
  createStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import classNames from "classnames";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { StateProps } from "../../Shared/interfaces/PropTypes";
import { IMenuState, UIState, DRAWER_WIDTH } from "../../Services/UIState/UIState";
import { withState } from "../../Shared/Containers";

const styles = (theme: Theme) =>
  createStyles<string>({
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20
    },
    hide: {
      display: "none"
    }
  });

declare type Props = StateProps<IMenuState> & ReturnType<typeof styles>;

export const SearchAppBarComponent = (props: {}) => {
  const { classes = {}, updateState = () => undefined, state: { drawer: { open = false } = {} } = {} } = props as Props;
  const onClickHandler = () => {
    updateState({ drawer: { open: !open }});
  }
  return (
    <AppBar
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift as string]: open
      })}
    >
      <Toolbar disableGutters={!open}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={onClickHandler}
          className={classNames(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          Persistent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export const StateAppBar = withState<IMenuState, Props, {}>(UIState.MenuState, withStyles(styles)(SearchAppBarComponent) as unknown as new() => Component<Props, {}>);
