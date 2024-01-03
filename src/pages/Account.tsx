import React from 'react'
import {  NavLink, Outlet, useNavigate } from 'react-router-dom';
import style from './styles/account.module.scss';

const Account: React.FC = () => {
  return (
    <section>
      <div className="container">
          <h1>Your account</h1>
          <div className={` ${style.wrapBtns}`}>
            <NavLink className={({isActive}) => isActive ? style.activeLink : ''} to="." end>Presonal data</NavLink>
            <NavLink className={({isActive}) => isActive ? style.activeLink : ''} to="orders">Orders</NavLink>
          </div>
          <Outlet />
      </div>
    </section>
  )
}

export default Account;