import {
  PENDING,
  FULFILLED,
  REJECTED,
  SEARCH_FLIGHTS
} from "../constants/action-types";

const initialState: FlightSearchState = {
  flights: [],
  loading: false
};
const flightSearch = (
  state = initialState,
  action: Action
): FlightSearchState => {
  switch (action.type) {
    case SEARCH_FLIGHTS + PENDING: {
      return { loading: true, flights: [] };
    }
    case SEARCH_FLIGHTS + FULFILLED: {
      return {
        loading: false,
        flights: action.payload
      };
    }
    case SEARCH_FLIGHTS + REJECTED: {
      return {
        loading: false,
        flights: []
      };
    }
  }
  return state;
};

export default flightSearch;
