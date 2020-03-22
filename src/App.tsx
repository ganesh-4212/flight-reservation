import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SearchResultPage from "./pages/SearchResultPage";

function App() {
  return (
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
  );
}

export default App;
