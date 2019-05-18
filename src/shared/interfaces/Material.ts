import { WithStyles, Theme, createStyles } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

export interface PropsWithStyle<T extends CSSProperties> extends WithStyles<Record<string, T>> {
    theme?: Theme
};