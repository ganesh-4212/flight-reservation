import React, { useState } from "react";
import {
  makeStyles,
  IconButton,
  Grid,
  Typography,
  Hidden,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  Slider,
  Divider
} from "@material-ui/core";
import Colors from "../constants/colors";
import SearchResultHeader from "../components/SearchResultHeader";
import FilterListIcon from "@material-ui/icons/FilterList";
import SearchFilterXS from "../components/SearchFilterXS";
import SearchResultSort from "../components/SearchResultSort";
import SearchFilter from "../components/SearchFilter";

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

const SearchResultCard = () => {
  return (
    <Card variant="outlined" style={{ margin: 5 }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography color="textSecondary">adjective</Typography>
      </CardContent>
    </Card>
  );
};

const SearchResultPage = () => {
  const classes = useStyles();
  const [openFilter, setOpenFilter] = useState(false);

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
            <Grid item xs={10} md={8}>
              <Typography
                component="span"
                variant="body1"
                color="textSecondary"
                className={classes.textStyle}
              >
                24 Available Flights
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
            <Grid md={8} xs={12}>
              <Hidden smDown>
                <SearchResultSort />
              </Hidden>
              <Grid md={12} xs={12} className={classes.searchResultContainer}>
                <SearchResultCard />
                <SearchResultCard />
                <SearchResultCard />
                <SearchResultCard />
                <SearchResultCard />
                <SearchResultCard />
                <SearchResultCard />
                <SearchResultCard />
                <SearchResultCard />
              </Grid>
            </Grid>

            <Hidden smDown>
              <Grid md={4}>
                <SearchFilter />
              </Grid>
            </Hidden>
          </Grid>
        </div>
      </div>
      <SearchFilterXS onClose={() => setOpenFilter(false)} open={openFilter} />
    </div>
  );
};
export default SearchResultPage;
