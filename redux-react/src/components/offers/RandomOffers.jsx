import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import CardContainer from "../ui/CardContainer"

const useStyles = makeStyles((theme) => ({
  flexRow: {
    display: "flex",
    flexDirection: "row",
    background: "coral",
  },
}));

const RandomOffers = () => {
let data = useSelector((state) => state.api.products.filter(i =>
    {return i.offer}
  ));
  console.log("data", data);
  let randomOffersData = data.filter(i => {
  return i.id});

  const classes = useStyles();
  return (
    <div className={classes.flexRow}>
    <CardContainer data={randomOffersData}/> 
    </div>     
  );
};

export default RandomOffers;
