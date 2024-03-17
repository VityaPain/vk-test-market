import { createSlice } from "@reduxjs/toolkit"
import { Product } from "../../types/productTypes"
import { RootState } from "./store"

type InitialState = {
    productList: Product[],
}

export const slice = createSlice({
    name: 'product',
    initialState: { productList: [] } as InitialState,
    reducers: {
        setProductList: (state, { payload }: { payload: Product[]}) => {
            state.productList = payload
        },
        deleteProduct: (state, { payload }: { payload: number }) => {
            state.productList = state.productList.filter((pr) => pr.id !== payload)
        },
        changeCountProduct: (state, { payload: { type, productId }}
        : { payload: {
            type: 'inc' | 'dec',
            productId: number
        }}) => {
            const arr: Product[] = []
            state.productList.forEach((pr) => {
                if (pr.id === productId) {
                    if (type === 'inc') {
                        pr.quantity += 1
                    } else {
                        pr.quantity -= 1
                    }
                }
                arr.push(pr)
            })

            state.productList = arr
        }
    }
})

export const { setProductList, deleteProduct, changeCountProduct } = slice.actions

export const SelectProductList = (state: RootState) => state.product.productList

export const SelectTotalMoney = (state: RootState) => {
    return state.product.productList.reduce((acc, cur) => acc + (cur.quantity * +cur.price), 0).toFixed(2)
}

export const ProductReducer = slice.reducer