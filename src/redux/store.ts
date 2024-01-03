import { configureStore } from "@reduxjs/toolkit";
import dressesSlice from "./dressesSlice";
import { useDispatch } from "react-redux";
import filterSlice from "./filterSlice";
import cartSlise from "./cartSlise";
import orderSlice from "./orderSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        dresses: dressesSlice,
        filter: filterSlice,
        cart: cartSlise,
        myOrders: orderSlice,
        people: userSlice
    }
});

export type RootState = ReturnType<typeof store.getState> // selector

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;