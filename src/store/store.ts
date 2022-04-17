import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter_slice';

/*
configuereStore is function 
- takes reducer and creates store
- turns on redux devtools
- adds thunk middlewere
- checks for errors like accidental mutations
- combines reducers
*/


export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});

//Typescript
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;