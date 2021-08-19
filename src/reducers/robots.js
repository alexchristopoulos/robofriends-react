import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    robots: [],
    loading: false
};

const slice = createSlice({
    name: 'robots',
    initialState: initialState,
    reducers: {
        requestRobots(state, action){
            Object.assign(state, { robots: [], loading: true })
        },
        fetchSuccess(state, action){
            Object.assign(state, { robots: action.payload, loading: false })
        },
        fetchError(state, action){
            Object.assign(state, { robots: [], loading: false })
        }
    }
});

export const {fetchPending, fetchError, fetchSuccess} = slice.actions;
export default slice.reducer;