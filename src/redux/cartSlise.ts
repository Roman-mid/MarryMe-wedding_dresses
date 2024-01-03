import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface addedDresses {
    id: number;
    name: string;
    sizes: string[];
    imgUrl: string[];
    price: number;
    description: string;
    sizeChoosen: string;
    count: number;
    countId: number;
}; 

export interface CartSliceType {
    items: addedDresses[];
    totalPrice: number;
    totalCount: number;
};

const initialState: CartSliceType = {
    items: [],
    totalPrice: 0,
    totalCount: 0
};

// ----------- Functions ------------ //

const getFindItem = (state: CartSliceType , action: PayloadAction<addedDresses>) => {
    const findItem = state.items.find(item => {
        return item.id === action.payload.id
        && item.sizeChoosen === action.payload.sizeChoosen
    });
    return findItem;
};

const totalSameItems = (state: CartSliceType, action: PayloadAction<addedDresses>) => {
    const filteerdItms = state.items.filter(obj => obj.id === action.payload.id);
    const quantitySameItems = filteerdItms.reduce((sum, item) => sum + item.count, 0);

    filteerdItms.map(item => {
        item.countId = quantitySameItems;
        return item;
    });

};

const getTotalPrice = (state: CartSliceType) => {
    const price = state.items.reduce((sum, item) => sum + item.price * item.count, 0);
    const allCount = state.items.reduce((sum, item) => sum + item.count, 0);
    return { price, allCount }
}

// --------- SLICE ----------------- //

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {  
        addItemsinCart(state, action: PayloadAction<addedDresses>) {
            const findItem = getFindItem(state, action);

            if(findItem) {
                findItem.count += 1;
                totalSameItems(state, action);
            } else {
                state.items.push({...action.payload, count: 1, countId: 1});
                totalSameItems(state, action);
            }

            state.totalPrice = getTotalPrice(state).price;
            state.totalCount = getTotalPrice(state).allCount;
        },
        removeItem(state, action: PayloadAction<addedDresses>) {
            state.items = state.items.filter(item => {
                return item.id != action.payload.id
                || item.sizeChoosen != action.payload.sizeChoosen
            })
            state.totalPrice = getTotalPrice(state).price;
            state.totalCount = getTotalPrice(state).allCount;
            totalSameItems(state, action);
        },
        decrementItem(state, action: PayloadAction<addedDresses>) {
            const findItem = getFindItem(state, action);

            if(findItem) {
                findItem.count -= 1;
            };

            state.totalPrice = getTotalPrice(state).price;
            state.totalCount = getTotalPrice(state).allCount;
            totalSameItems(state, action);
        },
        incrementItem(state, action: PayloadAction<addedDresses>) {
            const findItem = getFindItem(state, action);

            if(findItem) {
                findItem.count += 1;

                state.totalPrice = getTotalPrice(state).price;
                state.totalCount = getTotalPrice(state).allCount;
                totalSameItems(state, action);
            }
        },
        removeAllItems(state) {
            state.items = [];
            state.totalCount = 0;
            state.totalPrice = 0;
        }
    }
});


export const { addItemsinCart, removeItem, incrementItem, decrementItem, removeAllItems } = cartSlice.actions;
export default cartSlice.reducer;