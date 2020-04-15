import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  green: {
    background: "green",
  },
}));

const RandomOffers = () => {
  const data = useSelector((state) => state.api.products);
  console.log("data", data);

  const classes = useStyles();
  return (
    <div className={classes.green}>
      <h2>Random Offers</h2>
      {data.map((x) => (
        <p key={x.id}>{x.title}</p>
      ))}
    </div>
  );
};

export default RandomOffers;
