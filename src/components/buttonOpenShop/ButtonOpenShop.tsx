import React from 'react'
import style from './buttonOpenShop.module.scss';
import { Link } from 'react-router-dom';


type addClassType = {
    positionCenter?: boolean
};

const ButtonOpenShop: React.FC<addClassType> = ({positionCenter}) => {
  return (
    <Link to="/shop" className={`button ${style.openShop} ${positionCenter ? style.center : ''}`}>
      Choose your style
    </Link>
  )
}

export default ButtonOpenShop