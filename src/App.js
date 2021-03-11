import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ChallangePage from "./Page";
import {PDFViewer} from "@react-pdf/renderer";

function App() {

  return (
          <Router>
                  <Switch>
                    <Route path="/page/:id" component={ChallangePage} />
                  </Switch>
          </Router>
  )
}

export default App;
