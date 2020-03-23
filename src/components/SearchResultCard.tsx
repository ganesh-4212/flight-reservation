import React from "react";
import { AIRLINES } from "../constants/app.constants";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  makeStyles,
  Grid,
  Button,
  Hidden
} from "@material-ui/core";
import FlightIcon from "@material-ui/icons/Flight";
import Colors from "../constants/colors";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
const useStyles = makeStyles(theme => ({
  airlineAvatar: {
    display: "inline-block",
    verticalAlign: "middle"
  },
  airlineName: {
    height: 50,
    lineHeight: "50px",
    verticalAlign: "middle",
    marginLeft: 10
  },
  fromTo: {
    marginLeft: 10
  },
  arrivalDeparture: {
    color: Colors.Secondary[700],
    height: 50,
    lineHeight: "50px",
    verticalAlign: "middle",
    marginLeft: 10
  }
}));
interface SearchResultCardProps {
  details: any;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({ details }) => {
  const classes = useStyles();
  const airlineDetails = AIRLINES.find(
    airline => airline.name === details.airline
  );
  const airlineLogo = airlineDetails ? airlineDetails.logo : "";
  return (
    <Card variant="outlined" style={{ margin: 5 }}>
      <CardContent>
        <Grid container>
          <Grid item md={2}>
            <Avatar
              alt={details.airline}
              className={classes.airlineAvatar}
              src={require(`../assets/images/${airlineLogo}`)}
            />
            <Typography
              component="span"
              variant="subtitle2"
              color="textSecondary"
              className={classes.airlineName}
            >
              {details.airline}
            </Typography>
          </Grid>

          <Grid item md={6} xs={12}>
            <Typography
              component="span"
              variant="h6"
              color="textSecondary"
              className={classes.arrivalDeparture}
            >
              {details.departure}
            </Typography>
            <Hidden mdUp>
              <ArrowRightAltIcon
                style={{
                  lineHeight: "50px",
                  height: 50,
                  verticalAlign: "middle",
                  color: Colors.Secondary[700],
                  marginLeft: 20,
                  marginRight: 20
                }}
              />
            </Hidden>
            <Hidden smDown>
              <Typography
                component="span"
                variant="subtitle2"
                color="textSecondary"
                className={classes.fromTo}
              >
                {details.from}
              </Typography>
              <FlightIcon
                style={{
                  transform: "rotate(90deg)",
                  lineHeight: "50px",
                  height: 50,
                  verticalAlign: "middle",
                  color: Colors.Secondary[700],
                  marginLeft: 20,
                  marginRight: 20
                }}
              />
              <Typography
                component="span"
                variant="subtitle2"
                color="textSecondary"
                className={classes.fromTo}
              >
                {details.to}
              </Typography>
            </Hidden>

            <Typography
              component="span"
              variant="h6"
              color="textSecondary"
              className={classes.arrivalDeparture}
            >
              {details.arrival}
            </Typography>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography
              component="span"
              variant="h6"
              color="textSecondary"
              className={classes.arrivalDeparture}
            >
              {`₹${details.price}/-`}
            </Typography>
          </Grid>
          <Grid
            item
            md={1}
            xs={6}
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              alignItems: "right"
            }}
          >
            <Button
              color="secondary"
              style={{
                backgroundColor: Colors.Primary[800],
                color: "white",
                float: "right"
              }}
            >
              Book
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SearchResultCard;
