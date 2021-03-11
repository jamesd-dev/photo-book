import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Page from "./Page";

const useStyles = makeStyles(() => {
  return {
    root: {
      width: '100vw',
      height: '141vw',
    }
  }
});

function App() {

  const classes = useStyles();

  return (
      <Router>
          <div className={classes.root}>
              <Switch>
                <Route path="/page/:id" component={Page} />
              </Switch>
          </div>
      </Router>
  )
}

export default App;
