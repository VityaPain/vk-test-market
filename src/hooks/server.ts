import { useCallback } from "react"
import { Product } from "../types/productTypes"

const useServer = () => {

    const requestObjectList = useCallback(async (
        url: string,
        method = "GET",
        body = null,
        headers = {
            'Content-Type': 'application/json'
        }
    ) => {
        const responce = await fetch(url, { method, body, headers })

        if (!responce.ok) {
            throw new Error(`Could not retch ${url}, status: ${responce.status}`)
        }
        return await responce.json()
    }, [])  

    const getAllProducts = async () => {
        const data = await requestObjectList('https://fakestoreapi.com/products?limit=5')

        return transformData(data)
    }

    const transformData = (data: any): Product[] => {
        return data.map((product: any) => {
            return {
                id: product.id,
                name: product.title,
                img: product.image,
                description: makeFirstLetterUppercase(product.description),
                price: product.price.toFixed(2),
                quantity: 1,
            }
        })
    }

    const makeFirstLetterUppercase = (str: string) => {
        return str[0].toUpperCase() + str.slice(1)
    }

    return {
        getAllProducts
    }
}

export default useServer