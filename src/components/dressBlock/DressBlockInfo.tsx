
import React from 'react';
import style from './dressBlockInfo.module.scss'
import Button from './Button';
import { useDispatch } from 'react-redux';
import { addItemsinCart, addedDresses } from '../../redux/cartSlise';

interface DressBlockInfoType {
    id: number;
    name: string;
    sizes: string[];
    imgUrl: string[];
    price: number;
    description: string;
    setOpenInfo: (type: boolean) => void;
};

const DressBlockInfo: React.FC<DressBlockInfoType> = ({id, name, sizes, description, imgUrl, price, setOpenInfo}) => {
  
    const dispatch = useDispatch();
    
    const [activeImg, setActiveImg] = React.useState(0);
    const [activeSize, setActiveSize] = React.useState(0);

    const onClickGalary = (ind: number) => {
        setActiveImg(ind)
    };

    const onClickSize = (ind: number) => {
        setActiveSize(ind)
    };


    const onCloseInfo = () => {
        document.body.classList.remove('lock')
        setOpenInfo(false)
    };

    const onAdditemInCart = () => {
        const item : addedDresses = {
            id,
            name,
            price,
            sizes,
            imgUrl,
            description,
            sizeChoosen: sizes[activeSize],
            count: 0,
            countId: 0,
        }
        dispatch(addItemsinCart(item));
    };

  return (
    <div className={style.overflow}>
      <div className={style.wrap}>
        <div className={style.wrapImg}>
          <div className={style.img}>
            <img src={imgUrl[activeImg]} alt="" />
          </div>
          <div className={style.galary}>
            {imgUrl.map((img, ind) => (
              <img
                key={ind}
                src={img}
                alt=""
                className={activeImg === ind ? style.activeImg : ""}
                onClick={() => onClickGalary(ind)}
              />
            ))}
          </div>
        </div>
        <div className={style.dressInfo}>
          <h2>{name}</h2>
          <span className={style.price}>{price} £</span>
          <p>Choose your size</p>
          <ul>
            {sizes.map((size, ind) => (
              <li key={ind}>
                <button
                  className={`${style.size} ${ activeSize == ind ? style.activeSize : "" }`}
                  onClick={() => onClickSize(ind)}
                >
                  {size}
                </button>
              </li>
            ))}
          </ul>
          <p className={style.bescription}>{description}</p>
          <Button id={id} name="Add to cart" onClick={onAdditemInCart} />
          <span className={style.closeInfo} onClick={onCloseInfo}> X </span>
        </div>
      </div>
    </div>
  );
}

export default DressBlockInfo;