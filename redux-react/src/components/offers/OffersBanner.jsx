import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({}));

const OffersBanner = () => {
  const classes = useStyles();

  return (
    <div>
      <p>Offers Banners</p>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
};

export default OffersBanner;
