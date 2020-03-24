import promise from "redux-promise-middleware";
import { Middleware, MiddlewareAPI, Dispatch } from "redux";
import {} from "react";
import { ROUTER_LOCATION_CHANGE } from "../constants/action-types";
import queryString from "query-string";
import { searchFlights } from "../actions";

const filterMiddleware: Middleware = ({ dispatch }: MiddlewareAPI) => (
  next: Dispatch
) => action => {
  if (action.type === ROUTER_LOCATION_CHANGE) {
    const { pathname, search } = action.payload.location;
    if (pathname === "/search") {
      console.log("search filters");
      const filters = (queryString.parse(search) as any) as Filters;
      dispatch(searchFlights(filters));
    }
  }

  return next(action);
};

const middlewares = [promise, filterMiddleware];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

export default middlewares;
