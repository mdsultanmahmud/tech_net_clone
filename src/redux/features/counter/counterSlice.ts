import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"
type countertype = {
    value: number
}

const initialState: countertype = {
    value: 0
}
export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment: state => {
            state.value = state.value + 1
        },
        decrement: state =>{
           state.value = state.value - 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) =>{
            state.value = state.value + action.payload
        },
        decrementByAmount: (state, action: PayloadAction<number>) =>{
            state.value = state.value - action.payload
        }
    }
})

export const {increment, decrement, incrementByAmount, decrementByAmount} = counterSlice.actions
export default counterSlice.reducer