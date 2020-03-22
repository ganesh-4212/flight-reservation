import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { parse } from "query-string";
import {
  makeStyles,
  IconButton,
  Grid,
  Typography,
  Paper,
  Hidden
} from "@material-ui/core";
import Colors from "../constants/colors";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import FaceIcon from "@material-ui/icons/Face";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
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
  }
}));

const SearchResultPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { search } = useLocation();
  const { source, destination, seats } = parse(search);

  return (
    <div>
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
                spacing={2}
                style={{
                  backgroundColor: Colors.Primary[700],
                  height: 50,
                  marginRight: 20
                }}
              >
                <FlightTakeoffIcon
                  style={{
                    lineHeight: "100%",
                    verticalAlign: "middle",
                    height: "100%",
                    color: "white",
                    marginLeft: 15
                  }}
                />
                <Typography
                  component="span"
                  variant="h6"
                  color="inherit"
                  style={{
                    lineHeight: "100%",
                    verticalAlign: "middle",
                    height: "100%",
                    color: "white",
                    marginLeft: 15
                  }}
                >
                  {source}
                </Typography>
              </Grid>
              <Grid
                item
                md={3}
                spacing={5}
                style={{
                  backgroundColor: Colors.Primary[700],
                  height: 50,
                  marginRight: 20
                }}
              >
                <FlightLandIcon
                  style={{
                    lineHeight: "100%",
                    verticalAlign: "middle",
                    height: "100%",
                    color: "white",
                    marginLeft: 15
                  }}
                />
                <Typography
                  component="span"
                  variant="h6"
                  color="inherit"
                  style={{
                    lineHeight: "100%",
                    verticalAlign: "middle",
                    height: "100%",
                    color: "white",
                    marginLeft: 15
                  }}
                >
                  {destination}
                </Typography>
              </Grid>
              <Grid
                item
                md={3}
                spacing={2}
                style={{
                  backgroundColor: Colors.Primary[700],
                  height: 50,
                  marginRight: 20
                }}
              >
                <FaceIcon
                  style={{
                    lineHeight: "100%",
                    verticalAlign: "middle",
                    height: "100%",
                    color: "white",
                    marginLeft: 15
                  }}
                />
                <Typography
                  component="span"
                  variant="h6"
                  color="inherit"
                  style={{
                    lineHeight: "100%",
                    verticalAlign: "middle",
                    height: "100%",
                    color: "white",
                    marginLeft: 15
                  }}
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
                style={{
                  lineHeight: "100%",
                  verticalAlign: "middle",
                  height: "100%",
                  color: "white",
                  marginLeft: 15
                }}
              >
                {source}
              </Typography>
              <ArrowRightAltIcon
                style={{
                  lineHeight: "100%",
                  verticalAlign: "middle",
                  height: "100%",
                  color: "white",
                  marginLeft: 15
                }}
              />
              <Typography
                component="span"
                variant="h6"
                color="inherit"
                style={{
                  lineHeight: "100%",
                  verticalAlign: "middle",
                  height: "100%",
                  color: "white",
                  marginLeft: 15
                }}
              >
                {destination}
              </Typography>
              <FaceIcon
                style={{
                  lineHeight: "100%",
                  verticalAlign: "middle",
                  height: "100%",
                  color: "white",
                  marginLeft: 15
                }}
              />
              <Typography
                component="span"
                variant="h6"
                color="inherit"
                style={{
                  lineHeight: "100%",
                  verticalAlign: "middle",
                  height: "100%",
                  color: "white",
                  marginLeft: 15
                }}
              >
                {seats}
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
      </div>
      <div className={classes.content}></div>
    </div>
  );
};
export default SearchResultPage;
