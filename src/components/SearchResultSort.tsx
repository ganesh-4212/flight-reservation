import React from "react";

import { Paper, Typography, makeStyles } from "@material-ui/core";

import SortButton from "./SortButton";

const useStyles = makeStyles(theme => ({
  textStyle: {
    marginLeft: 20,
    marginTop: 10,
    height: 50,
    verticalAlign: "middle",
    lineHeight: "50px"
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const SearchResultSort = () => {
  const classes = useStyles();
  return (
    <Paper style={{ height: 50 }}>
      <Typography
        component="span"
        variant="body1"
        color="textSecondary"
        className={classes.textStyle}
      >
        Sort By
      </Typography>
      <SortButton text="Price" sortKey="price" />
      <SortButton text="Duration" sortKey="duration" />
      <SortButton text="Arrival" sortKey="arrival" />
      <SortButton text="Departure" sortKey="departure" />
      <SortButton text="Seats" sortKey="seats" />
      <SortButton text="Airline" sortKey="airline" />
    </Paper>
  );
};
export default SearchResultSort;
