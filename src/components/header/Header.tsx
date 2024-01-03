import React from "react";
import Menu from "./Menu";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import style from "./header.module.scss";
import styleMenu from "./menu.module.scss";

const Header: React.FC = () => {
/*   const totalPrice = useSelector((state: RootState) => state.cart.totalCount);
  const { email, firstName } = useSelector(
    (state: RootState) => state.people.user
  ); */

  return (
    <header className={style.hearerWrap}>
      <div className="container">
        <div className={style.header}>
          <Link to="/" className={style.logo}>
            <img src="/img/logoheader.png" alt="MARRYME" />
          </Link>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
