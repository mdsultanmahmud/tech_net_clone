import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import customeLogger from "./middlewear/customLogger";
// import logger from 'redux-logger'
export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customeLogger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch