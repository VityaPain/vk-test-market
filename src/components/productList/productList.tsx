import { useEffect } from "react"

import useDataProvider from "../../hooks/sessionDataHandler"
import { useSelector } from "react-redux"
import { SelectProductList } from "../redux/productSlice"

import {
    Panel,
    PanelHeader,
    Group,
    CardGrid,
    Spinner,
    Header
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Product from "./product/product"

const ProductList = () => {
    const { getSessionProducts, loading } = useDataProvider()

    useEffect(() => {
        getSessionProducts()
    }, [])


    const products = useSelector(SelectProductList)

    if (loading) {
        return <Spinner size="large" style={{ margin: '0' }}/>
    }

    return (
        <Panel>
            <Group mode="card">
                <Header>Ваша корзина</Header>
                <CardGrid size="l">
                    {products.map((p) => (
                        <Product product={p} key={p.id}/>
                    ))}
                </CardGrid>
            </Group>
        </Panel>
    )
}

export default ProductList