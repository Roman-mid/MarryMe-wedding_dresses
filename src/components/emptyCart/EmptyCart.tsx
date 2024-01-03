import React from 'react'
import style from './emptyCart.module.scss';
import ButtonOpenShop from '../buttonOpenShop/ButtonOpenShop';
//import img from "img/emptyCart.jpeg";

type EmptyCartType = {
  text: string;
}

const EmptyCart: React.FC<EmptyCartType> = ({text}) => {
  return (
    <div className={style.emptyCart} >
        <h1>{text}</h1>
        <ButtonOpenShop />
    </div>
  )
}

export default EmptyCart;