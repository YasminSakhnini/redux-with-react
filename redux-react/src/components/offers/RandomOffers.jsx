import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import CardContainer from "../ui/CardContainer"

const useStyles = makeStyles((theme) => ({
  container: {
    flexBasis: "50%",
  },
}));

const RandomOffers = () => {
  let data = useSelector((state) => state.api.products.filter(i => { return i.offer }
  ));
  console.log("data", data);
  let randomOffersData = data.filter(i => {
    return i.id
  });

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h2>Today Offers</h2>
      <CardContainer data={randomOffersData} />
    </div>
  );
};

export default RandomOffers;
