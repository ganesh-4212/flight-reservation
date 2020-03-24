import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SearchResultPage from "./pages/SearchResultPage";
import configureStore, { history } from "./store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <HashRouter>
          <Switch>
            <Route path="/" exact>
              <SearchPage />
            </Route>
            <Route path="/search">
              <SearchResultPage />
            </Route>
          </Switch>
        </HashRouter>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
