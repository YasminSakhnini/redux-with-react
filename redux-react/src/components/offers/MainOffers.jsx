import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  yellow: {
    background: "yellow",
  },
}));

const MainOffers = () => {
  const classes = useStyles();
  return (
    <div className={classes.yellow}>
      <h2>Main Offers</h2>
    </div>
  );
};

export default MainOffers;
