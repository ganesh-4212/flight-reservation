import data from "../constants/data";
import moment from "moment";
//@ts-ignore
import parseDuration from "parse-duration";
export function filterData(filter: Filters) {
  return data.filter(item => {
    const {
      airlines,
      priceMax,
      priceMin,
      durationMin,
      durationMax,
      departureMax,
      departureMin,
      arrivalMax,
      arrivalMin
    } = filter;
    const sourceFilter =
      item.from.toLowerCase() === filter.source.toLowerCase();
    const destinationFilter =
      item.to.toLowerCase() === filter.destination.toLowerCase();
    const seatsFilter = item.availableSeats >= filter.seats;
    let airlinesFilter = true;
    if (airlines) {
      airlinesFilter = airlines.includes(item.airline);
    }

    let priceFilter = true;
    if (priceMin && priceMax) {
      const priceMinVal = +priceMin;
      const priceMaxVal = +priceMax;
      priceFilter = item.price >= priceMinVal && item.price <= priceMaxVal;
    }

    let durationFilter = true;
    if (durationMin && durationMax) {
      const durationMinVal = +durationMin;
      const durationMaxVal = +durationMax;
      const itemDuration = parseDuration(item.duration) / 60000;
      durationFilter =
        itemDuration >= durationMinVal && itemDuration <= durationMaxVal;
    }

    let departureFilter = true;
    if (departureMax && departureMin) {
      console.log(moment(departureMax, "h:mm A"));
      const departureMinMoment = moment(departureMin, "hh:mmA");
      const departureMaxMoment = moment(departureMax, "hh:mmA");
      const itemDepartureMoment = moment(item.departure, "h:mm A");
      durationFilter = itemDepartureMoment.isBetween(
        departureMinMoment,
        departureMaxMoment,
        "minute"
      );
    }

    let arrivalFilter = true;
    if (arrivalMax && arrivalMin) {
      const arrivalMinMoment = moment(arrivalMin, "hh:mmA");
      const arrivalMaxMoment = moment(arrivalMax, "hh:mmA");
      const itemArrivalMoment = moment(item.arrival, "h:mm A");
      arrivalFilter = itemArrivalMoment.isBetween(
        arrivalMinMoment,
        arrivalMaxMoment,
        "minute"
      );
    }

    return (
      sourceFilter &&
      destinationFilter &&
      seatsFilter &&
      airlinesFilter &&
      priceFilter &&
      durationFilter &&
      departureFilter &&
      arrivalFilter
    );
  });
}
export const delayPromise = (time: number, result: any) =>
  new Promise(resolve => setTimeout(() => resolve(result), time));
