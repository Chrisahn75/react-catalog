import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import data from './info.json';

import Homepage from "./pages/homepage";
import Movie from "./pages/movie";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route path="/movie/:id" component={Movie}></Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
