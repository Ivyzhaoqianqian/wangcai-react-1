import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Tag } from "./views/Tag";

import Money from "./views/Money";
import NoMatch from "./views/NoMatch";
import Statistics from "./views/Statistics";
import Tags from "./views/Tags";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/tags/:id" >
          <Tag />
        </Route>

        <Route exact path="/tags" >
          <Tags />
        </Route>

        <Route exact path="/money" >
          <Money />
        </Route>
        <Route exact path="/statistics" >
          <Statistics />
        </Route>
        <Redirect exact from="/" to="/money" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>

    </Router>
  );
}










export default App;
