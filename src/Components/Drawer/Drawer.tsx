import React, { Component } from 'react';
import { Drawer, IconButton, Divider, List, ListItem, ListItemIcon, Theme, createStyles, ListItemText, withStyles } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { StateProps } from '../../Shared/interfaces/PropTypes';
import { IMenuState, DRAWER_WIDTH, UIState, AppRoute } from '../../Services/UIState/UIState';
import { withState } from '../../Shared/Containers';

const styles = (theme: Theme) =>
  createStyles<string>({
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
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

export const StateDrawerComponent = (props: {}) => {
  const {
    classes = {},
    theme = {},
    updateState = () => undefined,
    state: { drawer: { open = false } = {} } = {}
  } = props as Props;
  const onClickHandler = () => updateState({ drawer: { open: false } });
  const onLinkClick001 = () => UIState.RouterState.setState({ location: AppRoute.Home })
  const onLinkClick002 = () => UIState.RouterState.setState({ location: AppRoute.Calendar })
  return (
    <Drawer
      className={classes.drawer as string}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper as string
      }}
    >
      <div className={classes.drawerHeader as string}>
        <IconButton onClick={onClickHandler}>
            <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
      <ListItem button onClick={onLinkClick001} key={1}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={'Home'} />
      </ListItem>
      <ListItem button onClick={onLinkClick002} key={2}>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary={'Calendar'} />
      </ListItem>
    </Drawer>
  );
};

export const StateDrawer = withState<IMenuState, Props, {}>(
  UIState.MenuState,
  (withStyles(styles)(StateDrawerComponent) as unknown) as new () => Component<
    Props,
    {}
  >
);

