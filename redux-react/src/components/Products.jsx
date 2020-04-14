
import React from 'react';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import RedeemIcon from '@material-ui/icons/Redeem';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { useSelector, useDispatch } from 'react-redux';


const Products = props => {
  const productsCount = useSelector(state => state.product.productsCount)
  const dispatch = useDispatch();


  return (
    <React.Fragment>
      <h1>Products {productsCount}</h1>
      <div>
        <Badge color="secondary" badgeContent={productsCount}>
          <RedeemIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              dispatch({ type: 'REDUCE_PRODUCTS_COUNTER' })
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              dispatch({ type: 'INCREASE_PRODUCTS_COUNTER' })
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </React.Fragment>
  )
}
export default Products;