import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import QueryString from "query-string";

import { useHistory, useLocation } from "react-router-dom";

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
interface SortButtonProps {
  text: string;
  sortKey: string;
}
const SortButton: React.FC<SortButtonProps> = ({ text, sortKey }) => {
  const classes = useStyles();
  const history = useHistory();
  const { search } = useLocation();
  const queryObject = QueryString.parse(search);
  const { sortBy, orderBy } = queryObject;
  const selectedSortKey = sortKey === sortBy;
  let sortOrderIcon = null;
  if (selectedSortKey && orderBy === "ASC") {
    sortOrderIcon = <ArrowUpwardIcon />;
  } else if (selectedSortKey && orderBy === "DESC") {
    sortOrderIcon = <ArrowDownwardIcon />;
  }
  return (
    <Button
      color={selectedSortKey ? "primary" : "default"}
      className={classes.button}
      endIcon={sortOrderIcon}
      onClick={() => {
        const orderByUpdated =
          selectedSortKey && orderBy === "ASC" ? "DESC" : "ASC";
        history.push({
          pathname: "/search",
          search: QueryString.stringify({
            ...queryObject,
            sortBy: sortKey,
            orderBy: orderByUpdated
          })
        });
      }}
    >
      {text}
    </Button>
  );
};

export default SortButton;
