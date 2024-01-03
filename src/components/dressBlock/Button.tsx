import React from 'react'
import style from './Button.module.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface ButtonType {
    id: number;
    name: string;
    onClick: () => void;
};

const Button: React.FC<ButtonType> = ({id, name, onClick}) => {

  const countitems = useSelector((state: RootState) => state.cart.items.find(obj => obj.id == id));
  const addedItem = countitems ? countitems.countId : 0;
  
  return (
    <button 
      className={`button ${style.button}`}
      onClick={onClick}
    >
      <span>{name}</span>
      {addedItem > 0 && <span className={style.count}>{addedItem}</span>}

    </button>
  )
}

export default Button;