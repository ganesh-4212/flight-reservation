import React from "react";
import {
  Grid,
  IconButton,
  Hidden,
  Typography,
  makeStyles
} from "@material-ui/core";
import Colors from "../constants/colors";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import FaceIcon from "@material-ui/icons/Face";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useHistory, useLocation } from "react-router-dom";
import { parse } from "query-string";

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: Colors.Primary[800],
    width: "100%",
    position: "fixed",
    top: 0,
    height: 100
  },
  headerContainer: {
    marginTop: 15
  },
  textStyle: {
    lineHeight: "100%",
    verticalAlign: "middle",
    height: "100%",
    color: "white",
    marginLeft: 15
  }
}));

const SearchResultHeader = () => {
  const classes = useStyles();
  const history = useHistory();
  const { search } = useLocation();
  const { source, destination, seats } = parse(search);
  return (
    <div className={classes.header}>
      <Grid container className={classes.headerContainer}>
        <Grid md={1} xs={1} item>
          <IconButton
            aria-label="ArrowBackIcon"
            onClick={() => history.replace("/")}
          >
            <ArrowBackIcon style={{ color: "white" }} />
          </IconButton>
        </Grid>
        <Hidden smDown>
          <Grid md={11} item container>
            <Grid
              item
              md={3}
              style={{
                backgroundColor: Colors.Primary[700],
                height: 50,
                marginRight: 20
              }}
            >
              <FlightTakeoffIcon className={classes.textStyle} />
              <Typography
                component="span"
                variant="h6"
                color="inherit"
                className={classes.textStyle}
              >
                {source}
              </Typography>
            </Grid>
            <Grid
              item
              md={3}
              style={{
                backgroundColor: Colors.Primary[700],
                height: 50,
                marginRight: 20
              }}
            >
              <FlightLandIcon className={classes.textStyle} />
              <Typography
                component="span"
                variant="h6"
                color="inherit"
                className={classes.textStyle}
              >
                {destination}
              </Typography>
            </Grid>
            <Grid
              item
              md={3}
              style={{
                backgroundColor: Colors.Primary[700],
                height: 50,
                marginRight: 20
              }}
            >
              <FaceIcon className={classes.textStyle} />
              <Typography
                component="span"
                variant="h6"
                color="inherit"
                className={classes.textStyle}
              >
                {seats} Seats
              </Typography>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item xs={11}>
            <Typography
              component="span"
              variant="h6"
              color="inherit"
              className={classes.textStyle}
            >
              {source}
            </Typography>
            <ArrowRightAltIcon className={classes.textStyle} />
            <Typography
              component="span"
              variant="h6"
              color="inherit"
              className={classes.textStyle}
            >
              {destination}
            </Typography>
            <FaceIcon className={classes.textStyle} />
            <Typography
              component="span"
              variant="h6"
              color="inherit"
              className={classes.textStyle}
            >
              {seats}
            </Typography>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default SearchResultHeader;
