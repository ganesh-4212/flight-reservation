import {
  makeStyles,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  DialogContent
} from "@material-ui/core";
import Colors from "../constants/colors";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import SearchResultSort from "./SearchResultSort";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
    backgroundColor: Colors.Primary[800]
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

interface SortDialogXSProps {
  open: boolean;
  onClose: () => void;
}
const SortDialogXS: React.FC<SortDialogXSProps> = ({ open, onClose }) => {
  const classes = useStyles();
  return (
    <Dialog
      fullScreen={true}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sort By
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent style={{ padding: 0 }}>
        <SearchResultSort />
      </DialogContent>
    </Dialog>
  );
};

export default SortDialogXS;
