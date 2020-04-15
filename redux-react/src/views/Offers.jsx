import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OffersBanner from "../components/offers/OffersBanner";
import MainOffers from "../components/offers/MainOffers";
import RandomOffers from "../components/offers/RandomOffers";

const useStyles = makeStyles((theme) => ({
  flexCol: {
    display: "flex",
    flexDirection: "column",
    background: "red",
  },
  flexRow: {
    display: "flex",
    justifyContent: "space-around",
    "& > div": {
      flexGrow: "1",
    },
  },
}));

const Offers = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.flexWrapper}>
      <div>
        <OffersBanner />
      </div>
      <div className={classes.flexRow}>
        <MainOffers />
        <RandomOffers />
      </div>
    </div>
  );
};

export default Offers;
