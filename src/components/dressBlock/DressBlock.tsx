import React from 'react';

import style from './dressBlock.module.scss';
import DressBlockInfo from './DressBlockInfo';
import Button from './Button';
import { DressesSliceType } from '../../redux/dressesSlice';


const DressBlock: React.FC<DressesSliceType> = (props) => {
  const {id, name, imgUrl, price, sizes, description} = props;

  const [openInfo, setOpenInfo] = React.useState(false);
  const [cursorPosition, setCursorPosition] = React.useState(0);
  const refOpenInfo = React.useRef(false)


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    if(mouseX < 115) setCursorPosition(0);
    if(mouseX > 115 && mouseX < 230) setCursorPosition(1);
    if(mouseX >230) setCursorPosition(2);

  };

  const onOpenInfo = () => {
    setOpenInfo(true)
    document.body.classList.add('lock')
  };

  return (
    <>
      {openInfo && (
        <DressBlockInfo
          id={id}
          name={name}
          sizes={sizes}
          description={description}
          imgUrl={imgUrl}
          price={price}
          setOpenInfo={setOpenInfo}
        />
      )}

      <div className={style.dressBlock}>
        <div
          className={style.wrapImg}
          onClick={onOpenInfo}
          onMouseMove={handleMouseMove}
        >
          <img src={imgUrl[cursorPosition]} alt="" />
        </div>
        <div className={style.nameWrap}>
          <h2>{name}</h2>
          <span className={style.dressPrice}>{price} £</span>
        </div>

        {<Button id={id} name="Choose size" onClick={onOpenInfo} />}
      </div>
    </>
  );
}

export default DressBlock