import React from "react";
import Launches from "./Components/Launches";
import LaunchDetails from "./Components/LaunchDetails";
import LandingPage from "./Components/Landing/LandingPage";
// import Chart from "./Components/chart";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./App.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

const Display = () => {
  const classes = useStyles();
  const [id, setId] = React.useState(42);
  const handleIdChange = React.useCallback((newId) => {
    setId(newId);
  }, []);
  return (
    <div className={classes.root}>
      <LandingPage />
      <div className="wrapperbackground">
        <Grid container spacing={3}>
          <Grid item sm={3} xs={6}>
            <Launches handleIdChange={handleIdChange} />
          </Grid>
          <Grid item sm={9} xs={6}>
            <LaunchDetails id={id} />
          </Grid>
        </Grid>
      </div>
      {/* <Chart /> */}
    </div>
  );
};

export default Display;
