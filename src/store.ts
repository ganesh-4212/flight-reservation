import { createStore, compose, applyMiddleware } from "redux";
import middlewares from "./middlewares";
import createRootReducer from "./reducers";
import { routerMiddleware } from "connected-react-router";
import { createHashHistory } from "history";

export const history = createHashHistory();

export default function configureStore() {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    {},
    compose(applyMiddleware(routerMiddleware(history), ...middlewares))
  );

  return store;
}
