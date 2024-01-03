import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum SortPropertuEnum {
    RATING_DESK = 'rating',
    RATING_ASK = '-rating',
    PRICE_DESK = 'price',
    PRICE_ASK = '-price',
    NAME_DESK = 'name',
    NAME_ASK = '-name',
};

interface SortType {
    name: string;
    sortProperty: SortPropertuEnum
};

interface InitialStateType {
    categoryInd: number;
    sortType: SortType
};

const initialState: InitialStateType = {
    categoryInd: 0,
    sortType: { name: 'Popular: max-min', sortProperty: SortPropertuEnum.RATING_DESK }
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryInd(state, action: PayloadAction<number>) {
            state.categoryInd = action.payload
        },
        setSortBy(state, action: PayloadAction<SortType>) {
            state.sortType = action.payload;
        }
    }
});


export const { setCategoryInd, setSortBy } = filterSlice.actions;
export default filterSlice.reducer;