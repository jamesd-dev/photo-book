import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => {
  return {
    root: {
      backgroundColor: 'black',
      width: '100vw',
      height: '141vw',
      margin:0,
    }
  }
});

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>

    </div>
  );
}

export default App;
