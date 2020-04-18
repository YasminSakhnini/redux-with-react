import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OffersBanner from "../components/offers/OffersBanner";
import MainOffers from "../components/offers/MainOffers";
import RandomOffers from "../components/offers/RandomOffers";

const useStyles = makeStyles((theme) => ({
  flexRow: {
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "space-around",
    padding: "5px"
  },
}));

const Offers = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.flexRow}>
        <OffersBanner />
      </div>
      <div className={classes.flexRow}>
        <MainOffers />
        <RandomOffers />
      </div>
    </>
  );
};

export default Offers;
