import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState{
    value: number;
}

const initialState: CounterState = {
    value: 10,
}

const counterSlice = createSlice({
    name: ' counter',
    //just created an action creator
    initialState,
    reducers:{
        //increment
        incremented(state){
            //mutating code / IMMER.JS
            state.value++;
        },
        amountAdded(state, action: PayloadAction<number>){
            state.value = state.value + action.payload;
        }

    }
});


export const {incremented, amountAdded} = counterSlice.actions;
export default counterSlice.reducer;
