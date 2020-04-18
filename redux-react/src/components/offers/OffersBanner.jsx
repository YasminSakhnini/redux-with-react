import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import CardContainer from "../ui/CardContainer"

const useStyles = makeStyles((theme) => ({}));

const OffersBanner = () => {
  let data = useSelector((state) => state.api.products.filter(i => { return i.bannerOffer }
  ));

  let bannerOffersData = data.filter(i => {
    return i.bannerOffer
  });

  const classes = useStyles();
  return (
    <div>
      <h2>Banner Offers</h2>
      <CardContainer data={bannerOffersData} />
    </div>
  );
};

export default OffersBanner;