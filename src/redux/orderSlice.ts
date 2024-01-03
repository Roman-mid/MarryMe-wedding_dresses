import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addedDresses } from "./cartSlise";

export interface OrderType {
    items: addedDresses[];
    totalPrice: number;
    totalCount: number;
    address: {
        country: string;
        city: string;
        street: string;
        house: string;
        phone: string;
    }
};

interface OrderSliceType {
    order: OrderType[]
};

const initialState: OrderSliceType = {
    order: []
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder(state, action: PayloadAction<OrderType>) {
           state.order.push({...action.payload});
        }
    }
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
