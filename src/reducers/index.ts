import { combineReducers } from "redux";
import flightSearch from "./flightSearch";

import { connectRouter } from "connected-react-router";

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    flightSearch
  });
export default createRootReducer;
