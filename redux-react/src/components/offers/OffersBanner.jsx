import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  red: {
    background: "red",
  },
}));

const OffersBanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.red}>
      <p>Offers Banners</p>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
};
export default OffersBanner;
