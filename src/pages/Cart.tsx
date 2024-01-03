import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import DressInCart from '../components/dressInCart/DressInCart';
import { addedDresses, decrementItem, incrementItem, removeAllItems, removeItem } from '../redux/cartSlise';
import ButtonOpenShop from '../components/buttonOpenShop/ButtonOpenShop';
import style from './styles/cart.module.scss';
import { Link } from 'react-router-dom';
import EmptyCart from '../components/emptyCart/EmptyCart';

const Cart: React.FC = () => {

  const dispatch = useDispatch();

  const onRemoveItem = (obj: addedDresses) => {
    dispatch(removeItem(obj))
  };

  const onDecremetnItem = (obj: addedDresses) => {
    dispatch(decrementItem(obj))
  };

  const onIncrementItem = (obj: addedDresses) => {
    dispatch(incrementItem(obj))
  };

  const onRemoveAlItems = () => {
    dispatch(removeAllItems())
  };
  

  const { items, totalCount, totalPrice} = useSelector((state: RootState) => state.cart);
  const userEmail = useSelector((state: RootState) => state.people.user.email);

  const dressesInCart = items.map((obj, ind) => <DressInCart 
    key={`${obj.name}/${obj.id}/${ind}`} 
    onRemoveItem={() => onRemoveItem(obj)} 
    onDecremetnItem={() => onDecremetnItem(obj)}
    onIncrementItem={() => onIncrementItem(obj)}
    {...obj}
  />);

  if(totalPrice == 0) {
    return <EmptyCart text="Your cart is empty."/>
  }

  return (
    <section className="firstSection lastSection"> 
        <div className={`container ${style.cartContainer}`}>
          <div className={style.header}>
            <p>Item</p>
            <p>Size</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>All Price</p>
          </div>
            <ul>
              {dressesInCart}
            </ul>
              <div className={style.totalInfo}>
                <p className="count">Total quantity: <span>{totalCount}</span></p>
                <p className="price">Total price: <span>{totalPrice} £</span></p>
                <Link to={userEmail.length > 0 ? "order" : '/register'} className="button">Go to pay</Link>
              </div>
            <div className={style.wrapBtns}>
              <ButtonOpenShop />
              <button className="button" onClick={onRemoveAlItems}>Remove all</button>
            </div>
        </div>
    </section>
  )
}

export default Cart