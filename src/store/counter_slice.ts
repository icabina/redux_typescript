import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface CounterState{
    value: number;
}

const initialState: CounterState = {
    value: 10,
}

// omit imports and state

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    // const response = await client.get('/fakeApi/todos')
    // return response.todos
  })
  
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

    },
    /*  extraReducers: builder => {
        builder
         .addCase(fetchTodos.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchTodos.fulfilled, (state, action) => {
            const newEntities = {}
            action.payload.forEach(todo => {
              newEntities[todo.id] = todo
            })
            state.entities = newEntities
            state.status = 'idle'
          }) 
      }*/
});


export const {incremented, amountAdded} = counterSlice.actions;
export default counterSlice.reducer;
