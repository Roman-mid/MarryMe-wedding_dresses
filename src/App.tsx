import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import { RootState, useAppDispatch } from "./redux/store";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";
import PayOrder from "./pages/PayOrder";
import EmptyCart from "./components/emptyCart/EmptyCart";
import OrderedDress from "./components/orderedDress/OrderedDress";
import PersonalData from "./components/userData/PersonalData";
import Account from "./pages/Account";
import { fetchUsers } from "./redux/userSlice";
import RegisterForm from "./components/register/RegisterForm";
import Register from "./pages/Register";
import Login from "./components/register/Login";

const App: React.FC = () => {
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const dispatch = useAppDispatch();
  const id = localStorage.getItem("userID") ? `${localStorage.getItem("userID")}` : "";

  React.useEffect(() => {
    if (localStorage.getItem("userID")) {
      dispatch(fetchUsers({ id }));
    }
  }, []);

  return (
    <>
      <Header />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path={totalPrice > 0 ? "cart/order" : ""}
            element={<PayOrder />}
          />
          <Route path="account" element={<Account />}>
            <Route index element={<PersonalData />} />
            <Route path="orders" element={<OrderedDress />} />
          </Route>
          <Route path="register" element={<Register />}>
            <Route index element={<RegisterForm />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="*" element={<EmptyCart text="Page is not found" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
