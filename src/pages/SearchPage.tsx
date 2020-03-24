import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import { makeStyles, Grid } from "@material-ui/core";
import ReservationForm from "../components/ReservationForm";
import Colors from "../constants/colors";
import NearByPlaces from "../components/NearByPlaces";
const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    backgroundColor: Colors.Primary[800],
    width: "100%",
    position: "fixed",
    top: 0
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    color: "white"
  },
  title: {
    flexGrow: 1,
    marginLeft: 10
  },
  appBarSpacer: {
    [theme.breakpoints.up("sm")]: {
      height: 270
    },
    [theme.breakpoints.up("md")]: {
      height: 120
    }
  },
  content: {
    position: "relative",
    top: -20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    [theme.breakpoints.up("xs")]: {
      marginTop: 351,
      height: window.innerHeight - 351 + 20
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 184,
      height: window.innerHeight - 184 + 20
    },
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  media: {
    height: 140
  },
  cardRoot: {
    maxWidth: 345
  },
  nearByPlacesGridItem: {
    display: "flex",
    justifyContent: "center"
  }
}));
const SearchPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <FlightTakeoffIcon />

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Flight Reservation
          </Typography>
        </Toolbar>
        <ReservationForm />
      </div>
      <div className={classes.content}>
        <div
          style={{
            marginTop: 25,
            marginRight: 10,
            marginLeft: 10,
            position: "static",
            alignSelf: "center"
          }}
        >
          <Typography
            gutterBottom
            variant="subtitle2"
            component="h2"
            style={{ marginBottom: 10 }}
          >
            Explore Flights by Destination
          </Typography>
          <Grid container spacing={3}>
            <Grid
              item
              md={3}
              xs={12}
              sm={6}
              className={classes.nearByPlacesGridItem}
            >
              <NearByPlaces
                title="Bangalore Airport"
                image="bangalore_airport.jpg"
                description="Bangalore Airport, officially known Kempegowda International Airport (IATA: BLR, ICAO: VOBL), is an International airport serving Bangalore, Bengaluru in Hindi, the seat city of Karnataka state in India. Bangalore Airport is located in Devanahalli, 40 km (25 miles) north of Bangalore city centre"
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
              sm={6}
              className={classes.nearByPlacesGridItem}
            >
              <NearByPlaces
                title="Chennai Airport"
                image="chennai_airport.jpeg"
                description="Chennai International Airport is an international airport serving the city of Chennai, Tamil Nadu, India, and its metropolitan area. It is located in Meenambakkam and Tirusulam, 21 km from the city centre"
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
              sm={6}
              className={classes.nearByPlacesGridItem}
            >
              <NearByPlaces
                title="Delhi Airport"
                image="delhi_airport.jpg"
                description="Indira Gandhi International Airport serves as the major international aviation hub of the Indian capital city of New Delhi as well as India. The airport, spread over an area of 5,106 acres, is situated in Palam, 15 km south-west of the New Delhi railway station and 16 km from New Delhi city centre"
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
              sm={6}
              className={classes.nearByPlacesGridItem}
            >
              <NearByPlaces
                title="Kolkata Airport"
                image="kolkata_airport.jpg"
                description="Netaji Subhas Chandra Bose International Airport is an international airport located in Dum Dum, West Bengal, India, serving the Kolkata metropolitan area. It is located approximately 17 kilometres from the city centre."
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
