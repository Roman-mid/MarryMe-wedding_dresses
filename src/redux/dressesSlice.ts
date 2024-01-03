import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
};

interface InitialStateType {
    items: DressesSliceType[],
    newCollection: DressesSliceType[]
    status: Status
};

export type SearchPizzaParams = {
    category: string;
    sortBy: string;
    order: string;
};

export interface DressesSliceType {
    id: number,
    name: string, 
    imgUrl: string[],
    price: number,
    sizes: string[],
    description: string,
    type: string
};

export const fetchDresses = createAsyncThunk(
    'dresees/fetchDresses',
    async (params: SearchPizzaParams) => {
        const {category, sortBy, order} = params;
        const resp = await fetch(`${process.env.REACT_APP_MOCKAPI}/dresses?${category}&sortBy=${sortBy}&order=${order}`);
        const json = await resp.json() as DressesSliceType[] ;
        return json;
    }
);

export const fetchAllDresses = createAsyncThunk(
    'dresses/fetchAllDresses',
    async () => {
        const resp = await fetch(`${process.env.REACT_APP_MOCKAPI}/dresses?category=1`);
        const json = await resp.json() as DressesSliceType[] ;
        return json;
    }
)

const initialState: InitialStateType = {
    items: [],
    newCollection: [],
    status: Status.LOADING
};

const dressesSlice = createSlice({
    name: 'dresses',
    initialState,
    reducers: {
        setDresses(state, action: PayloadAction<DressesSliceType[]>)  {
            state.items = action.payload
        },
        setNewCollection(state, action: PayloadAction<DressesSliceType[]>) {
            state.newCollection = action.payload.filter(obj => obj.id < 3);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDresses.pending, (state) => {
            state.items = [];
            state.status = Status.LOADING
        });
        builder.addCase(fetchDresses.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS
        });
        builder.addCase(fetchDresses.rejected, (state) => {
            state.items = [];
            state.status = Status.ERROR
        });
        builder.addCase(fetchAllDresses.fulfilled, (state, action) => {
            state.newCollection = action.payload;
        });
    }
});

export const { setDresses, setNewCollection } = dressesSlice.actions;
export default dressesSlice.reducer;