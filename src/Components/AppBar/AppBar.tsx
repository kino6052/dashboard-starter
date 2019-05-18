import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { PropsWithStyle } from "../../shared/interfaces/Material";
import classNames from "classnames";

const styles = (theme: Theme) =>
  createStyles({
    
  });

interface IAppBarProps {
  isDrawerOpen: boolean,
  onClick: () => void
}

export const SearchAppBarComponent = (props:  PropsWithStyle<ReturnType<typeof styles>> & IAppBarProps) => {
  const { isDrawerOpen, onClick, classes } = props;
  return (
    <AppBar
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: isDrawerOpen
      })}
    >
      <Toolbar disableGutters={!isDrawerOpen}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={onClick}
          className={classNames(classes.menuButton, isDrawerOpen && classes.hide)}
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

export const SearchAppBar = withStyles(styles)(SearchAppBarComponent);
