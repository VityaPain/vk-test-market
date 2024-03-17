import { useState } from "react";
import { useDispatch } from "react-redux"

import useServer from "./server";
import { setProductList } from "../components/redux/productSlice";
import { Product } from "../types/productTypes";

const useDataProvider = () => {
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const { getAllProducts } = useServer()

    const getSessionProducts = () => {
        setLoading(true)
        getAllProducts()
            .then((data: Product[]) => { 
                dispatch(setProductList(data)) 
                setLoading(false)
            })
    }

    return { getSessionProducts, loading }
}

export default useDataProvider