import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import CardContainer from "../ui/CardContainer"

const useStyles = makeStyles((theme) => ({
  container: {
    // background: "pink",
    flexBasis: "50%",
  },
}
));

const MainOffers = () => {
  let data = useSelector((state) => state.api.products.filter(i => { return i.offer }
  ));

  let mainOfferIds = data.filter(i => {
    return i.id
  });

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h2>Main Offers</h2>
      <CardContainer data={mainOfferIds} />
    </div>
  );
};

export default MainOffers;