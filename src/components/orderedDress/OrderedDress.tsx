import React from 'react'

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import style from './orderedDress.module.scss';

const OrderedDress: React.FC = () => {

  const orders = useSelector((state: RootState) => state.people.user.orders);

  const items = [...orders].reverse().map((obj, ind) => {
    return (
      <div className={style.order} key={ind}>
            <h3 className={style.orderNumber}>Order № {orders.length - ind}</h3>
            <div className={style.wrap}>
                <div className={style.items}>
                    {obj.items.map((item, indx) => {
                    return (
                        <div className={style.item} key={item.id + indx}>
                            <div className={style.img}>
                                <img src={item.imgUrl[0]} alt={item.name} />
                            </div>
                            <ul className={style.info}>
                                <li> <b>Barnd: </b> <span>{item.name}</span></li>
                                <li> <b>Size: </b> <span>{item.sizeChoosen}</span></li>
                                <li> <b>Price: </b> <span>{item.price} £</span> </li>
                                <li> <b>Quantity: </b>  <span>{item.count}</span></li>
                                <li> <b>Total: </b> <span>{item.price * item.count} £</span></li>
                            </ul>
                        </div>
                    )
                    })}
                </div>
                <div>
                <ul className={style.info}>
                    <li> <b>Country: </b> <span>{obj.address.country}</span></li>
                    <li> <b>City: </b> <span>{obj.address.city}</span> </li>
                    <li> <b>Street: </b>  <span>{obj.address.street}</span></li>
                    <li> <b>House №: </b> <span>{obj.address.house}</span></li>
                    <li> <b>Phone №: </b> <span>{obj.address.phone}</span></li>
                </ul>
                <ul className={`${style.info} ${style.address}`}>
                    <li><b>Total quantity:</b><span>{obj.totalCount}</span></li>
                    <li><b>Total price:</b><span>{obj.totalPrice} £</span></li>
                </ul>
            </div>
        </div>
      </div>
    )
  });

  return (
    <>
        {items}
    </>
  )
}

export default OrderedDress;