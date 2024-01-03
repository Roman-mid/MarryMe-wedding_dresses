import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import style from './menu.module.scss';

interface MenuType {
    footer?: string;
};

export const onWindowTop = () => {
  window.scrollTo(0, 0);
};

const Menu: React.FC<MenuType> = ({footer}) => {

  const [burgerMenu, setBurgerMenu] = React.useState(false);
  const totalPrice = useSelector((state: RootState) => state.cart.totalCount);
  const {email, firstName} = useSelector((state: RootState) => state.people.user);

  const onBurgerMenu = () => {
    setBurgerMenu(!burgerMenu)
      document.body.classList.add('lock')
  };

  const closeBurgerMenu = () => {
    if(burgerMenu) {
      setBurgerMenu(false)
      document.body.classList.remove('lock')
    }
  };


  return (
    <nav className={`${style.menu} ${footer ? style.footer : ""} `}>
      <span className={`${style.burgerMenu}`} onClick={onBurgerMenu}>
        Menu
      </span>
      <div
        className={`${style.overlay} ${burgerMenu ? style.visabitily : ""}`}
        onClick={closeBurgerMenu}
      >
        <ul className={burgerMenu ? style.visabitily : ""}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive
                  ? `activePages ${footer ? "activeFooterLink" : "activeLink"}`
                  : "activePages"
              }
              onClick={onWindowTop}
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              to="shop"
              className={({ isActive }) => isActive
                  ? `activePages ${footer ? "activeFooterLink" : "activeLink"}`
                  : "activePages"
              }
              onClick={onWindowTop}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => isActive
                  ? `activePages ${footer ? "activeFooterLink" : "activeLink"}`
                  : "activePages"
              }
              onClick={onWindowTop}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contacts"
              className={({ isActive }) => isActive
                  ? `activePages ${footer ? "activeFooterLink" : "activeLink"}`
                  : "activePages"
              }
              onClick={onWindowTop}
            >
              Contacts
            </NavLink>
          </li>
          {!footer && (
            <>
              <li>
                <NavLink
                  to={email?.length > 0 ? "account" : "register"}
                  className={({ isActive }) =>
                    isActive ? "activePages activeLink" : "activePages"
                  }
                >
                  <span>{firstName ? firstName : "Sing in"}</span>
                  {/* <span>{!firstName ? "Sing in" : firstName}</span> */}
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 54 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.1997 31.1439C32.9637 31.1078 32.7233 31.201 32.561 31.3768C32.3972 31.5511 32.3266 31.7946 32.3716 32.0305C32.7864 34.2096 34.1825 37.2001 38.4685 39.0621C38.9764 39.2815 39.7609 39.4528 40.7557 39.6677C44.4796 40.4732 50.7072 41.8227 52.2371 47.5303C52.3272 47.8655 52.6308 48.0864 52.9629 48.0864C53.0275 48.0864 53.0922 48.0774 53.1583 48.0608C53.5595 47.9526 53.797 47.5409 53.6903 47.1396C51.9215 40.5469 44.8659 39.0185 41.0743 38.198C40.1967 38.0071 39.4378 37.8433 39.0666 37.681C36.4908 36.563 34.8272 34.9039 34.1059 32.7429C41.2622 33.2748 44.5022 30.424 44.645 30.2948C44.8223 30.134 44.914 29.8951 44.8869 29.6561C44.8599 29.4172 44.7216 29.2053 44.5127 29.0851C40.383 26.7257 40.383 18.573 40.383 15.5028C40.383 6.91736 34.6003 0.111207 27.187 0.00450838C27.166 0.00300559 27.0052 0 26.9751 0C19.4536 0.0420782 13.3328 6.85574 13.3328 15.1902C13.3328 18.2604 13.3328 26.4146 9.20308 28.7725C8.98518 28.8972 8.84542 29.1211 8.82588 29.3706C8.80785 29.62 8.91605 29.8635 9.11292 30.0183C9.3203 30.1791 13.9038 33.6866 19.5438 32.6211C18.7894 34.692 17.1484 36.2849 14.6477 37.3715C14.2855 37.5292 13.5642 37.7021 12.7286 37.9004C8.91154 38.8081 1.80483 40.4988 0.0255273 47.1381C-0.081171 47.5409 0.15627 47.9511 0.557516 48.0593C0.964773 48.16 1.37053 47.9271 1.47873 47.5273C3.0251 41.7506 9.3188 40.2553 13.0773 39.3597C14.0195 39.1357 14.7634 38.9584 15.2473 38.7495C19.5333 36.8876 20.9279 33.897 21.3442 31.7179C21.3937 31.458 21.3036 31.1905 21.1052 31.0161C20.9083 30.8403 20.6363 30.7802 20.3809 30.8599C16.3128 32.1402 12.5543 30.379 10.9118 29.4021C14.8356 26.117 14.8356 18.5565 14.8356 15.1902C14.8356 7.68077 20.2847 1.54036 27.0382 1.49979C27.0457 1.49979 27.1915 1.5088 27.1975 1.5088C33.8579 1.60348 38.8802 7.61916 38.8802 15.5028C38.8802 18.8706 38.8802 26.4477 42.8206 29.7328C41.4635 30.5082 38.3693 31.763 33.1997 31.1439Z"
                      fill="#828282"
                    />
                  </svg>
                </NavLink>
              </li>
              <li className={`${style.phone} activePages`}>
                <a href="tel:+44-573-430-0809">+44-573-430-0809</a>
              </li>
              <li>
                <NavLink
                  to="cart"
                  className={({ isActive }) => isActive
                      ? `activePages activeLink ${style.cartIcon}`
                      : `activePages ${style.cartIcon}`
                  }
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8454 8.2243C23.7281 8.10906 23.5642 8.05442 23.4012 8.07624H17.0343V5.26295C17.0343 2.4826 14.7804 0.228699 12.0001 0.228699C9.21971 0.228699 6.96582 2.4826 6.96582 5.26295V8.07624H0.598861C0.421164 8.07624 0.243523 8.07624 0.154646 8.2243C0.0352739 8.33902 -0.0201042 8.5051 0.00659291 8.66851L2.22761 20.81C2.53789 22.5037 4.00034 23.7431 5.72199 23.7713H18.278C20.0046 23.7289 21.464 22.4797 21.7724 20.7804L23.9934 8.66851C24.0201 8.5051 23.9648 8.33902 23.8454 8.2243ZM8.1503 5.26295C8.1503 3.13682 9.87388 1.41324 12 1.41324C14.1261 1.41324 15.8497 3.13682 15.8497 5.26295V8.07624H8.1503V5.26295ZM20.5879 20.6323C20.3884 21.7547 19.4179 22.5759 18.278 22.5868H5.72199C4.58212 22.5759 3.61161 21.7547 3.41215 20.6323L1.30959 9.26078H22.6904L20.5879 20.6323Z"
                      fill="black"
                    />
                    <path
                      d="M16.4421 15.0354C16.7692 15.0354 17.0343 14.7702 17.0343 14.4431V12.6663C17.0343 12.3392 16.7692 12.074 16.4421 12.074C16.1149 12.074 15.8498 12.3392 15.8498 12.6663V14.4431C15.8497 14.7702 16.1149 15.0354 16.4421 15.0354Z"
                      fill="black"
                    />
                    <path
                      d="M7.55803 15.0354C7.88514 15.0354 8.1503 14.7702 8.1503 14.4431V12.6663C8.1503 12.3392 7.88514 12.074 7.55803 12.074C7.23092 12.074 6.96576 12.3392 6.96576 12.6663V14.4431C6.96576 14.7702 7.23092 15.0354 7.55803 15.0354Z"
                      fill="black"
                    />
                  </svg>
                  {!!totalPrice && <span>{totalPrice}</span>}
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Menu;

