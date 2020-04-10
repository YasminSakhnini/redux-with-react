import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 345,
  },
  alignment: {
    alignSelf: 'center'
  }
});

export default function MediaCard() {
  const classes = useStyles();
  const [count, setCount] = React.useState(1);


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/adjustable-dumbbells.jpg"
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            WHITE ROSES POSTER
            </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            PRODUKTBESKRIVNING
            ROMANTISKA ROSOR – FOTOGRAFI AV ETT FÅNG STORA,
            VITA ROSORFotografi av ett fång vita rosor i full blom.
            Denna rofyllda blomposter är ett underbart komplement till alla hem,
            men kanske särskilt till hemmet där man söker lugnet i
            blomposters och andra och botaniska motiv.
            Postern är tryckt med en vit kant runtom som snyggt ramar in motivet.
            11792-3
            Ram och passepartout ingår ej
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
        <Badge className={classes.alignment} color="secondary" badgeContent={count}>
        </Badge>
      </CardActions>
    </Card>
  );
}