import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Slider,
  Divider,
  makeStyles,
  Grid,
  Typography,
  Button,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  Checkbox
} from "@material-ui/core";
import Colors from "../constants/colors";
import { useHistory, useLocation } from "react-router-dom";
import QueryString from "query-string";
import { isArray } from "util";
import { AIRLINES } from "../constants/app.constants";
import ArrivalDepartureBtn from "./ArrivalDepartureBtn";
import DurationFilterBtn from "./DurationFilterBtn";

const useStyles = makeStyles(theme => ({
  root: {
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      height: window.innerHeight - 130
    }
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
  divider: {
    height: 1,
    width: "100%",
    display: "inline-block",
    verticalAlign: "middle"
  },
  airlineListRoot: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up("md")]: {
      marginLeft: 20
    }
  },
  durationBtn: {}
}));

const SearchFilter = () => {
  const classes = useStyles();
  const history = useHistory();
  const { search } = useLocation();
  const queryObject = QueryString.parse(search);
  const { priceMin, priceMax, airlines } = queryObject;
  const minPrice = priceMin ? +priceMin : 4000;
  const maxPrice = priceMax ? +priceMax : 10000;
  let airLinesArray: string[] = [];
  if (airlines) {
    airLinesArray = isArray(airlines) ? airlines : [airlines];
  }

  const updateQuery = (queryUpdated: any) => {
    history.push({
      pathname: "/search",
      search: QueryString.stringify({
        ...queryObject,
        ...queryUpdated
      })
    });
  };

  return (
    <Grid container className={classes.root}>
      <Grid md={12} xs={12} container item>
        <Grid md={10} xs={10} item>
          <Typography
            component="span"
            variant="subtitle2"
            color="textSecondary"
            className={classes.textStyle}
          >
            Price
          </Typography>
        </Grid>
        <Grid md={1} xs={1} item>
          <Button
            color="secondary"
            size="small"
            onClick={() =>
              updateQuery({ priceMin: undefined, priceMax: undefined })
            }
          >
            Reset
          </Button>
        </Grid>
        <Grid md={12} xs={12} item>
          <Slider
            style={{
              width: "60%",
              color: Colors.Secondary[700],
              marginLeft: 30,
              verticalAlign: "middle"
            }}
            value={[minPrice, maxPrice]}
            onChange={(_, values) => {
              if (isArray(values)) {
                updateQuery({ priceMin: values[0], priceMax: values[1] });
              }
            }}
            valueLabelDisplay="auto"
            valueLabelFormat={value => `${value} Rs`}
            aria-labelledby="range-slider"
            getAriaLabel={value => `${value} Rs`}
            getAriaValueText={value => `${value} Rs`}
            step={500}
            min={4000}
            max={10000}
            marks={true}
          />
        </Grid>
      </Grid>
      <Divider orientation="horizontal" className={classes.divider} />
      <Grid md={12} xs={12} container item>
        <Grid md={10} xs={10} item>
          <Typography
            component="span"
            variant="subtitle2"
            color="textSecondary"
            className={classes.textStyle}
          >
            Duration
          </Typography>
        </Grid>
        <Grid md={1} xs={1} item>
          <Button
            color="secondary"
            size="small"
            onClick={() =>
              updateQuery({ durationMin: undefined, durationMax: undefined })
            }
          >
            Reset
          </Button>
        </Grid>
        <Grid md={12} xs={12} item>
          <DurationFilterBtn text={"< 2 Hours"} min={0} max={120} />
          <DurationFilterBtn
            text={"< 2 Hours to <3 Hours"}
            min={120}
            max={180}
          />
          <DurationFilterBtn text={"> 3 Hours"} min={180} max={1440} />
        </Grid>
      </Grid>
      <Divider orientation="horizontal" className={classes.divider} />
      <Grid md={12} xs={12} container item>
        <Grid md={10} xs={10} item>
          <Typography
            component="span"
            variant="subtitle2"
            color="textSecondary"
            className={classes.textStyle}
          >
            Departure
          </Typography>
        </Grid>
        <Grid md={1} xs={1} item>
          <Button
            color="secondary"
            size="small"
            onClick={() =>
              updateQuery({ departureMin: undefined, departureMax: undefined })
            }
          >
            Reset
          </Button>
        </Grid>
        <Grid
          md={12}
          xs={12}
          item
          style={{ marginBottom: 10, marginLeft: 10, marginRight: 10 }}
        >
          <ArrivalDepartureBtn text="12AM-2:59AM" min="12:00AM" max="02:59AM" />
          <ArrivalDepartureBtn text="3AM-5:59AM" min="03:00AM" max="05:59AM" />
          <ArrivalDepartureBtn text="6AM-8:59AM" min="06:00AM" max="08:59AM" />
          <ArrivalDepartureBtn text="9AM-11:59AM" min="09:00AM" max="11:59AM" />
          <ArrivalDepartureBtn text="12PM-2:59PM" min="12:00PM" max="02:59PM" />
          <ArrivalDepartureBtn text="3PM-5:59PM" min="03:00PM" max="05:59PM" />
          <ArrivalDepartureBtn text="6PM-8:59PM" min="06:00PM" max="08:59PM" />
          <ArrivalDepartureBtn text="9PM-11:59PM" min="09:00PM" max="11:59PM" />
        </Grid>
      </Grid>
      <Divider orientation="horizontal" className={classes.divider} />
      <Grid md={12} xs={12} container item>
        <Grid md={10} xs={10} item>
          <Typography
            component="span"
            variant="subtitle2"
            color="textSecondary"
            className={classes.textStyle}
          >
            Arrival
          </Typography>
        </Grid>
        <Grid md={1} xs={1} item>
          <Button
            color="secondary"
            size="small"
            onClick={() =>
              updateQuery({ arrivalMin: undefined, arrivalMax: undefined })
            }
          >
            Reset
          </Button>
        </Grid>
        <Grid
          md={12}
          xs={12}
          item
          style={{ marginBottom: 10, marginLeft: 10, marginRight: 10 }}
        >
          <ArrivalDepartureBtn
            text="12AM-2:59AM"
            min="12:00AM"
            max="02:59AM"
            isArrival
          />
          <ArrivalDepartureBtn
            text="3AM-5:59AM"
            min="03:00AM"
            max="05:59AM"
            isArrival
          />
          <ArrivalDepartureBtn
            text="6AM-8:59AM"
            min="06:00AM"
            max="08:59AM"
            isArrival
          />
          <ArrivalDepartureBtn
            text="9AM-11:59AM"
            min="09:00AM"
            max="11:59AM"
            isArrival
          />
          <ArrivalDepartureBtn
            text="12PM-2:59PM"
            min="12:00PM"
            max="02:59PM"
            isArrival
          />
          <ArrivalDepartureBtn
            text="3PM-5:59PM"
            min="03:00PM"
            max="05:59PM"
            isArrival
          />
          <ArrivalDepartureBtn
            text="6PM-8:59PM"
            min="06:00PM"
            max="08:59PM"
            isArrival
          />
          <ArrivalDepartureBtn
            text="9PM-11:59PM"
            min="09:00PM"
            max="11:59PM"
            isArrival
          />
        </Grid>
      </Grid>
      <Divider orientation="horizontal" className={classes.divider} />
      <Grid md={12} xs={12} container item>
        <Grid md={10} xs={10} item>
          <Typography
            component="span"
            variant="subtitle2"
            color="textSecondary"
            className={classes.textStyle}
          >
            Airline
          </Typography>
        </Grid>
        <Grid md={1} xs={1} item>
          <Button
            color="secondary"
            size="small"
            onClick={() => updateQuery({ airlines: [] })}
          >
            Reset
          </Button>
        </Grid>
        <Grid md={12} xs={12} item>
          <List dense className={classes.airlineListRoot}>
            {AIRLINES.map((alirLine, index) => (
              <ListItem key={index} button>
                <ListItemAvatar>
                  <Avatar
                    alt={`Airline logo`}
                    src={require(`../assets/images/${alirLine.logo}`)}
                  />
                </ListItemAvatar>
                <ListItemText id={`airline${index}`} primary={alirLine.name} />
                <ListItemSecondaryAction>
                  <Checkbox
                    edge="end"
                    checked={airLinesArray.includes(alirLine.name)}
                    onChange={(_, checked) => {
                      const airlinesUpdated = checked
                        ? [...airLinesArray, alirLine.name]
                        : airLinesArray.filter(
                            (airline: string) => airline !== alirLine.name
                          );

                      updateQuery({ airlines: airlinesUpdated });
                    }}
                    inputProps={{ "aria-labelledby": `airline${index}` }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchFilter;
