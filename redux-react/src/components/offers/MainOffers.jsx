import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import CardContainer from "../ui/CardContainer"

const useStyles = makeStyles((theme) => ({
  color: {
        background: "orange",

  }
}));

const MainOffers = () => {
  let data = useSelector((state) => state.api.products.filter(i =>
    {return i.offer}
  ));
  
let mainOfferIds = data.filter(i => {
  return i.id});

  const classes = useStyles();
  return ( 
    <div className={classes.color}>
      <CardContainer data={mainOfferIds}/>
      </div>
  );
};

export default MainOffers;