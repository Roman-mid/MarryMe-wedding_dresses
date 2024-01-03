import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OrderType } from "./orderSlice";


interface FilterType {
    id: string
};

interface UserSliceType {
    user: UserDataType
};

export type FormType = {
    firstName: string,
    email: string,
    password: string,
};

export interface UserDataType extends FormType {
    id?: string;
    myId: string;
    orders: OrderType[];
};

export const fetchUsers = createAsyncThunk(
    'user/fetchUser',
    async (params: FilterType) => {
        const {id} = params;
        const resp = await fetch(`${process.env.REACT_APP_MOCKAPI}/users/${id}`);
        const json = await resp.json() as UserDataType ;
        return json;
    }
);

const initialState: UserSliceType = {
    user : {
        id: '',
        myId: '',
        firstName: '',
        email: '',
        password: '',
        orders: []
    }
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserDataType>) {
            state.user = action.payload
        },
        removeUser(state) {
            state.user = {
                id: '',
                myId: '',
                firstName: '',
                email: '',
                password: '',
                orders: []
            }
        },
        addOrderUser(state, action: PayloadAction<OrderType>) {
            state.user.orders.push(action.payload)
        },
        changeName(state, action: PayloadAction<string>) {
            state.user.firstName = action.payload
        },
        changeEmail(state, action: PayloadAction<string>) {
            state.user.email = action.payload
        },
        changePassword(state, action: PayloadAction<string>) {
            state.user.password = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.user = {
                id: '',
                myId: '',
                firstName: '',
                email: '',
                password: '',
                orders: []
            };
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.user.id = action.payload.id;
            state.user.myId = action.payload.myId;
            state.user.firstName = action.payload.firstName;
            state.user.email = action.payload.email;
            state.user.password = action.payload.password;
            state.user.orders = action.payload.orders;

        });
        builder.addCase(fetchUsers.rejected, (state) => {
            state.user = {
                id: '',
                myId: '',
                firstName: '',
                email: '',
                password: '',
                orders: []
            };
        });
    }
});

export const { setUser, removeUser, addOrderUser, changeName, changeEmail, changePassword } = userSlice.actions;
export default userSlice.reducer;