import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import style from './styles/register.module.scss'

const Register = () => {
  return (
    <section className={`${style.wrap} lastSection`}>
      <div className="container">
        <div className={style.wrapBtns}>
          <NavLink className={({isActive}) => isActive ? style.activeLink : ''} to="." end>Register</NavLink>
          <NavLink className={({isActive}) => isActive ? style.activeLink : ''} to="login">Sign Up</NavLink>
        </div>
        <Outlet />
      </div>
    </section>
  )
}

export default Register;