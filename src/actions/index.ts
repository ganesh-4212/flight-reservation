import { SEARCH_FLIGHTS } from "../constants/action-types";
import { filterData, delayPromise } from "../utils/helpers";

export function searchFlights(filters: Filters) {
  return {
    type: SEARCH_FLIGHTS,
    payload: delayPromise(1000, filterData(filters))
  };
}
