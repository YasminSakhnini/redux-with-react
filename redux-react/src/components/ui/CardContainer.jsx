import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StarRateIcon from "@material-ui/icons/StarRate";

const image = require("../ui/images/adjustable-dumbbells.jpg");

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    marginTop: "5px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  flexItem: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },

}));

export default function CardContainer(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let data = props.data;

  return (
    <div className={classes.flexItem}>
      {data.map(i => {
        return (
          <Card key={i} className={classes.root}>
            <CardHeader
              title={""}
              subheader={i.title}
            />
            <CardMedia className={classes.media} image={image} title="Paella dish" />

            <CardContent>
              <Typography variant="body2" component="p">
                {i.offer ? i.offer : i.bannerOffer}
              </Typography>
              <Typography variant="body2" component="p">
                {i.price}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography>{i.description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        )
      })}
    </div>
  );
}
