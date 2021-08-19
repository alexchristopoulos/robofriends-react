import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    searchText: ''
};

const slice = createSlice({
    name: 'searchRobots',
    initialState: initialState,
    reducers: {
        search(state, action) {
            state.searchText = action.payload;
        }
    }
});

export const {search} = slice.actions;
export default slice.reducer;