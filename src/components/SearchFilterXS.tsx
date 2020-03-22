import React from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  makeStyles,
  DialogContent
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Colors from "../constants/colors";
import SearchFilter from "./SearchFilter";

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

interface SearchFilterXSProps {
  open: boolean;
  onClose: () => void;
}
const SearchFilterXS: React.FC<SearchFilterXSProps> = ({ open, onClose }) => {
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
            Filters
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent dividers>
        <SearchFilter />
      </DialogContent>
    </Dialog>
  );
};
export default SearchFilterXS;
