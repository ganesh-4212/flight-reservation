import React, { useState } from "react";
import {
  makeStyles,
  IconButton,
  Grid,
  Typography,
  Hidden,
  LinearProgress
} from "@material-ui/core";
import Colors from "../constants/colors";
import SearchResultHeader from "../components/SearchResultHeader";
import FilterListIcon from "@material-ui/icons/FilterList";
import SearchFilterXS from "../components/SearchFilterXS";
import SearchResultSort from "../components/SearchResultSort";
import SearchFilter from "../components/SearchFilter";
import SearchResultCard from "../components/SearchResultCard";
import { useSelector } from "react-redux";
import SortIcon from "@material-ui/icons/Sort";
import SortDialogXS from "../components/SortDialogXS";

const useStyles = makeStyles(theme => ({
  content: {
    position: "relative",
    top: -20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    [theme.breakpoints.up("xs")]: {
      marginTop: 100,
      height: window.innerHeight - 80
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 100,
      height: window.innerHeight - 80
    },
    backgroundColor: "white"
  },
  textStyle: {
    marginLeft: 20,
    marginTop: 10,
    height: 50,
    verticalAlign: "middle",
    lineHeight: "50px"
  },
  button: {
    margin: theme.spacing(1)
  },
  searchResultContainer: {
    backgroundColor: "rgba(0,0,0,.12)",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none"
    },
    [theme.breakpoints.up("xs")]: {
      height: window.innerHeight - 130
    },
    [theme.breakpoints.up("md")]: {
      height: window.innerHeight - 180
    }
  }
}));

const SearchResultPage = () => {
  const classes = useStyles();
  const [openFilter, setOpenFilter] = useState(false);
  const [openSort, setOpenSort] = useState(false);
  const { flights, loading } = useSelector<StoreState, FlightSearchState>(
    store => store.flightSearch
  );

  let flightAvailableText = "";
  if (loading) {
    flightAvailableText = "Searching Available Flights";
  } else {
    flightAvailableText =
      flights.length > 0
        ? `${flights.length} Available Flights`
        : "No Flights Available";
  }

  return (
    <div>
      <SearchResultHeader />
      <div className={classes.content}>
        <div
          style={{
            position: "absolute",
            width: "100%"
          }}
        >
          <Grid
            container
            style={{
              height: 50,
              borderBottomWidth: 2,
              borderBottomColor: "rgba(0,0,0,.12)",
              borderBottomStyle: "solid"
            }}
          >
            <Hidden mdUp>
              <Grid item xs={2}>
                <IconButton onClick={() => setOpenSort(true)}>
                  <SortIcon style={{ color: Colors.Primary[900] }} />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs={8} md={8}>
              <Typography
                component="span"
                variant="body1"
                color="textSecondary"
                className={classes.textStyle}
              >
                {flightAvailableText}
              </Typography>
            </Grid>
            <Hidden smDown>
              <Grid
                item
                md={4}
                style={{
                  height: 50,

                  borderLeftWidth: 2,
                  borderLeftColor: "rgba(0,0,0,.12)",
                  borderLeftStyle: "solid"
                }}
              >
                <Typography
                  component="span"
                  variant="body1"
                  color="textSecondary"
                  className={classes.textStyle}
                >
                  Filters
                </Typography>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item xs={2}>
                <IconButton onClick={() => setOpenFilter(true)}>
                  <FilterListIcon style={{ color: Colors.Primary[900] }} />
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>

          <Grid container>
            <Grid md={8} xs={12} item>
              <Hidden smDown>
                <SearchResultSort />
              </Hidden>
              <Grid
                md={12}
                xs={12}
                className={classes.searchResultContainer}
                item
              >
                {loading ? (
                  <LinearProgress variant="query" />
                ) : (
                  flights.map((result, index) => (
                    <SearchResultCard details={result} key={index} />
                  ))
                )}
              </Grid>
            </Grid>

            <Hidden smDown>
              <Grid md={4} item>
                <SearchFilter />
              </Grid>
            </Hidden>
          </Grid>
        </div>
      </div>
      <SearchFilterXS onClose={() => setOpenFilter(false)} open={openFilter} />
      <SortDialogXS onClose={() => setOpenSort(false)} open={openSort} />
    </div>
  );
};
export default SearchResultPage;
