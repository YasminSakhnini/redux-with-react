
import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import RedeemIcon from '@material-ui/icons/Redeem';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { useSelector, useDispatch } from 'react-redux';
import fetchProducts from '../store/actions/productActions';
import Product from './Product';


const Products = props => {
  const [count, setCount] = React.useState(1);
  const productsCount = useSelector(state => state.product.productsCount)
  const dispatch = useDispatch(fetchProducts());

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <React.Fragment>
      <Product />
      <h1>Products{productsCount}</h1>
      <div>
        <Badge color="secondary" badgeContent={productsCount}>
          <RedeemIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              dispatch(setCount(Math.max(productsCount - 1, 0)));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              dispatch(setCount(productsCount + 1));
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