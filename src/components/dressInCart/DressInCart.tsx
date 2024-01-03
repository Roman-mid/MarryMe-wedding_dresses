import React from 'react'
import DressBlockInfo from '../dressBlock/DressBlockInfo';
import style from './dressInCart.module.scss'
import { useDispatch } from 'react-redux';

interface DressInCartType {
  id: number;
  name: string;
  sizes: string[];
  imgUrl: string[];
  price: number;
  description: string;
  sizeChoosen: string;
  count: number;
  onRemoveItem: (obj: any ) => void;
  onDecremetnItem: (obj: any ) => void;
  onIncrementItem: (obj: any ) => void;
};

const DressInCart: React.FC<DressInCartType> = (props) => {
  const {id, name, imgUrl, price, sizes, description, sizeChoosen, count, onRemoveItem, onDecremetnItem, onIncrementItem } = props;

  const [openInfo, setOpenInfo] = React.useState(false);

  const onOpenInfo = () => {
    setOpenInfo(true)
    document.body.classList.add('lock')
  };

  return (
    <>
    {openInfo && <DressBlockInfo 
      id={id}
      name={name} 
      sizes={sizes} 
      description={description}
      imgUrl={imgUrl}
      price={price}
      setOpenInfo={setOpenInfo}
      />
    }

    <li className={style.wrap}>
      <div className={style.name}>
        <div className="img">
          <img src={imgUrl[0]} alt="" onClick={onOpenInfo}/>
        </div>
          <h3>{name}</h3>
      </div>
      <p> <b>Size:</b> {sizeChoosen}</p>
      <p> <b>Price:</b>  {price} £</p>
     <div className={style.count}>
     <b>Quantity:</b> 
      <button 
        onClick={onDecremetnItem} 
        disabled={count === 1}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
            fill="#000"
          ></path>
        </svg>
      </button>
      <p>{count}</p>
      <button 
        onClick={onIncrementItem}
      > 
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
        <path
          d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
          fill="#000"
        ></path>
        <path
          d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
          fill="#000"
        ></path>
        </svg>
      </button>
    </div> 
      <p> <b>All price:</b>  {price * count} £</p>
      <span onClick={onRemoveItem}>Х</span>
    </li>
    </>
  )
}

export default DressInCart;