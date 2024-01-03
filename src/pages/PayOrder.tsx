import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useForm, SubmitHandler } from "react-hook-form";
import { removeAllItems } from '../redux/cartSlise';
import { OrderType, addOrder } from '../redux/orderSlice';
import { useNavigate } from 'react-router-dom';
import { addOrderUser } from '../redux/userSlice';
import changeUserData from '../hooks/changeUserData';
import style from './styles/payOrder.module.scss';

type FormType = {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  country: string,
  city: string,
  street: string,
  house: string,
};

const PayOrder: React.FC = () => {

  const { items, totalCount, totalPrice } = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const {
    register,
    formState: {errors, isValid},
    handleSubmit,
    reset,
  } = useForm<FormType>({
    mode: "onChange"
  });

  const orders = useSelector((state: RootState) => state.people.user.orders);

  const onSubmit: SubmitHandler<FormType> = (data) => {
    
    const country = data.country.trim().slice(0,1).toUpperCase() + data.country.slice(1);
    const city = data.city.trim().slice(0,1).toUpperCase() + data.city.slice(1);
    const street = data.street.trim().slice(0,1).toUpperCase() + data.street.slice(1);

    const newOrder: OrderType = {
      items,
      totalPrice,
      totalCount,
      address: {
        country,
        city,
        street,
        house: data.house,
        phone: data.phone
      }
    };

    const toStore = [...orders, newOrder];
    const newUser = JSON.stringify({orders: toStore});

    changeUserData(newUser);
    dispatch(addOrder(newOrder));
    dispatch(addOrderUser(newOrder));
    dispatch(removeAllItems());
    reset();
    navigate('/', {relative: "path"})

  };

  const dresses = items.map((obj, ind) => {
    return (
      <li key={`${obj.name}/${obj.id}/${ind}`} >
        <span>{obj.name}</span>
        <span>{obj.sizeChoosen}</span>
        <span>{obj.price} £</span>
        <span>{obj.count}</span>
        <span>{obj.price * obj.count} £</span>
      </li>
    )
  });

  return (
    <section className="firstSection, lastSection">
      <div className="container">
        <h1>Pay your order</h1>
        <div className={style.wrap}>
          <form
            id="form"
            onSubmit={handleSubmit(onSubmit)}
            className={style.form}
          >
            <h2>Delivery address</h2>
            <div className={style.formContent}>
              <div className="inputBlock">
                <label>
                  <b>*</b> Country:
                </label>
                <input
                  {...register("country", {
                    required: "Fild is required.",
                    minLength: {
                      value: 2,
                      message: "Min 2 lettrs",
                    },
                    maxLength: {
                      value: 20,
                      message: "Max 20 letters",
                    },
                    pattern: {
                      value: /([a-z])+/,
                      message: "Incorect country.",
                    },
                  })}
                />
                <p className={errors.country?.message ? style.error : ""}>
                  {errors.country?.message || "Error"}
                </p>
              </div>
              <div className="inputBlock">
                <label>
                  <b>*</b> City:
                </label>
                <input
                  {...register("city", {
                    required: "Fild is required.",
                    minLength: {
                      value: 2,
                      message: "Min 2 lettrs",
                    },
                    maxLength: {
                      value: 20,
                      message: "Max 20 letters",
                    },
                    pattern: {
                      value: /([a-z])+/,
                      message: "Incorect city.",
                    },
                  })}
                />
                <p className={errors.city?.message ? style.error : ""}>
                  {errors.city?.message || "Error"}
                </p>
              </div>
              <div className="inputBlock">
                <label>
                  <b>*</b> Street:
                </label>
                <input
                  {...register("street", {
                    required: "Fild is required.",
                    minLength: {
                      value: 2,
                      message: "Min 2 lettrs",
                    },
                    maxLength: {
                      value: 30,
                      message: "Max 30 letters",
                    },
                    pattern: {
                      value: /([a-z])+/,
                      message: "Incorect street.",
                    },
                  })}
                />
                <p className={errors.street?.message ? style.error : ""}>
                  {errors.street?.message || "Error"}
                </p>
              </div>
              <div className="inputBlock">
                <label>
                  <b>*</b> House number:
                </label>
                <input
                  type="number"
                  {...register("house", {
                    required: "Fild is required.",
                    minLength: {
                      value: 1,
                      message: "Min 1 lettrs",
                    },
                    maxLength: {
                      value: 10,
                      message: "Max 4 letters",
                    },
                    pattern: {
                      value: /\d/,
                      message: "The first letter must be capitalized.",
                    },
                  })}
                />
                <p className={errors.house?.message ? style.error : ""}>
                  {errors.house?.message || "Error"}
                </p>
              </div>
              <div className="inputBlock">
                <label>
                  <b>*</b> Phone number:
                </label>
                <input
                  placeholder="+44..."
                  {...register("phone", {
                    required: "Fild is required.",
                    maxLength: {
                      value: 15,
                      message: "Max 15 letters",
                    },
                    minLength: {
                      value: 10,
                      message: "Min 10 letters",
                    },
                    pattern: {
                      value: /^\+\d+$/g,
                      message: "Your phone number is not valid.",
                    },
                  })}
                />
                <p className={errors.phone?.message ? style.error : ""}>
                  {errors.phone?.message || "Error"}
                </p>
              </div>
            </div>
          </form>
          <div className={style.orderInfo}>
            <h2>Your order</h2>
            <div className="info">
              <b>Item</b>
              <b>Size</b>
              <b>Price</b>
              <b>Quantity</b>
              <b>Full price</b>
            </div>
            <ul>{dresses}</ul>
            <div className={style.total}>
              <b>Total:</b>
              <b>{totalPrice} £</b>
            </div>
            <button
              form="form"
              type="submit"
              disabled={!isValid}
              className={`button ${style.button}`}
            >
              Pay order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PayOrder;