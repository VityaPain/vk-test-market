import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { ProductReducer } from "./productSlice"

const rootReducer = combineReducers({
    product: ProductReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer
})

export default store
