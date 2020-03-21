import React from "react";
import {
  Paper,
  TextField,
  Grid,
  Button,
  InputBase,
  IconButton,
  Divider,
  Hidden
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { SOURCE, DESTINATION } from "../constants/app.constants";
import { Autocomplete } from "@material-ui/lab";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import AirlineSeatLegroomExtraIcon from "@material-ui/icons/AirlineSeatLegroomExtra";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";

import { useFormik } from "formik";
import NumberSpinner from "./NumberSpinner";
import Colors from "../constants/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: Colors.Primary[800],
      [theme.breakpoints.up("sm")]: {
        height: 270
      },
      [theme.breakpoints.up("md")]: {
        height: 120
      }
    },
    divider: {
      height: 28,
      margin: 4,
      display: "inline-block",
      verticalAlign: "middle",
      backgroundColor: Colors.Primary[900]
    }
  })
);

const ReservationForm: React.FC<any> = () => {
  const classes = useStyles();
  const { values, setFieldValue } = useFormik({
    initialValues: {
      source: "",
      destination: "",
      seats: 1
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Paper className={classes.root}>
      <Grid
        container
        style={{ paddingTop: 10, paddingBottom: 30 }}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Hidden smDown>
          <Grid md={12} sm={12} item style={{ backgroundColor: "blue" }}>
            <Paper component="form">
              <IconButton aria-label="FlightTakeoffIcon">
                <FlightTakeoffIcon style={{ color: Colors.Primary[900] }} />
              </IconButton>
              <Autocomplete
                id="source"
                options={SOURCE}
                getOptionLabel={option => option}
                style={{ display: "inline-block" }}
                renderInput={params => (
                  <InputBase
                    ref={params.InputProps.ref}
                    inputProps={params.inputProps}
                    autoFocus
                    placeholder="Source"
                  />
                )}
                onChange={(_: any, value: any) => {
                  setFieldValue("source", value);
                }}
                value={values.source}
              />
              <Divider className={classes.divider} orientation="vertical" />
              <IconButton
                aria-label="FlightLandIcon"
                onClick={() => {
                  const destintation = values.destination;
                  setFieldValue("destination", values.source);
                  setFieldValue("source", destintation);
                }}
              >
                <SwapHorizontalCircleIcon
                  style={{ color: Colors.Primary[900] }}
                />
              </IconButton>
              <Divider className={classes.divider} orientation="vertical" />
              <IconButton aria-label="FlightLandIcon">
                <FlightLandIcon style={{ color: Colors.Primary[900] }} />
              </IconButton>

              <Autocomplete
                id="destination"
                options={DESTINATION}
                getOptionLabel={option => option}
                style={{ display: "inline-block" }}
                renderInput={params => (
                  <InputBase
                    ref={params.InputProps.ref}
                    inputProps={params.inputProps}
                    autoFocus
                    placeholder="Destination"
                  />
                )}
                onChange={(_: any, value: any) => {
                  setFieldValue("destination", value);
                }}
                value={values.destination}
              />
              <Divider className={classes.divider} orientation="vertical" />
              <IconButton aria-label="AirlineSeatLegroomExtraIcon">
                <AirlineSeatLegroomExtraIcon
                  style={{ color: Colors.Primary[900] }}
                />
              </IconButton>
              <NumberSpinner
                value={values.seats}
                onChange={value => setFieldValue("seats", value)}
              />
              <Divider className={classes.divider} orientation="vertical" />
              <div
                style={{
                  textAlign: "right",
                  display: "inline-block",
                  marginLeft: 20,
                  marginRight: 20
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: Colors.Primary[800],
                    color: "white"
                  }}
                  size="medium"
                >
                  Search
                </Button>
              </div>
            </Paper>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Paper component="form">
            <IconButton aria-label="FlightTakeoffIcon">
              <FlightTakeoffIcon style={{ color: Colors.Primary[900] }} />
            </IconButton>
            <Autocomplete
              id="source"
              options={SOURCE}
              getOptionLabel={option => option}
              style={{ display: "inline-block" }}
              renderInput={params => (
                <InputBase
                  ref={params.InputProps.ref}
                  inputProps={params.inputProps}
                  autoFocus
                  placeholder="Source"
                />
              )}
              onChange={(_: any, value: any) => {
                setFieldValue("source", value);
              }}
              value={values.source}
            />
          </Paper>
          <Paper component="form" style={{ marginTop: 15 }}>
            <IconButton aria-label="FlightLandIcon">
              <FlightLandIcon style={{ color: Colors.Primary[900] }} />
            </IconButton>
            <Autocomplete
              id="destination"
              options={DESTINATION}
              getOptionLabel={option => option}
              style={{ display: "inline-block" }}
              renderInput={params => (
                <InputBase
                  ref={params.InputProps.ref}
                  inputProps={params.inputProps}
                  autoFocus
                  placeholder="Destination"
                />
              )}
              onChange={(_: any, value: any) => {
                setFieldValue("destination", value);
              }}
              value={values.destination}
            />
          </Paper>
          <Paper component="form" style={{ marginTop: 15, alignSelf: "left" }}>
            <IconButton aria-label="FlightLandIcon">
              <AirlineSeatLegroomExtraIcon
                style={{ color: Colors.Primary[900] }}
              />
            </IconButton>
            <NumberSpinner
              value={values.seats}
              onChange={value => setFieldValue("seats", value)}
            />
          </Paper>
          <div
            style={{
              marginTop: 15,
              marginBottom: 30
            }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "white",
                color: Colors.Primary[900]
              }}
              size="medium"
            >
              Search
            </Button>
          </div>
        </Hidden>
      </Grid>
    </Paper>
  );
};

export default ReservationForm;
