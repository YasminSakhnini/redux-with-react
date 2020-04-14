
import React from 'react';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import RedeemIcon from '@material-ui/icons/Redeem';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { useSelector, useDispatch } from 'react-redux';


const Offers = props => {
  const offersCount = useSelector(state => state.product.offersCount)
  const dispatch = useDispatch();


  return (
    <React.Fragment>
      <h1>Offers {offersCount}</h1>
      <div>
        <Badge color="secondary" badgeContent={offersCount}>
          <RedeemIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              dispatch({ type: 'REDUCE_OFFERS_COUNTER' })
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              dispatch({ type: 'INCREASE_OFFERS_COUNTER' })
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </React.Fragment>
  )
}
export default Offers;