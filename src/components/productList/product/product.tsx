import { FC, HTMLProps, useState } from "react"

import CountController from "../../countController/countController"
import DeleteBtn from "../../deleteBtn/deleteBtn"
import { Product as ProductType } from "../../../types/productTypes"

import {
    Group,
    SimpleCell,
    Image,
    Card,
    Div,
    InfoRow,
    Accordion
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
const infoStyle = { color: 'var(--vkui--color_text_subhead)' };

export type ProductProps = {
    product: ProductType
} & HTMLProps<HTMLDivElement>

const Product: FC<ProductProps> = ({
    product,
    className,
    ...rest
}) => {

    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Card 
            className="product"
            mode="outline-tint"
            {...rest}
        >   
            <Div className="product-info">
                <Image size={96} src={product.img}/>
                <Group mode="plain" className="product-info__group">
                    <SimpleCell className="product-info__name">
                        <InfoRow header="Название">{product.name}</InfoRow>
                    </SimpleCell>
                    <SimpleCell>
                        <Div className="product-info__count">
                            <InfoRow header="Цена">{(product.price * product.quantity).toFixed(2)}</InfoRow>
                            <InfoRow header="Количество" style={{textAlign: 'center'}}>
                                <CountController 
                                    className="count-controller"
                                    currentValue={product.quantity}
                                    product={product.id}
                                />
                            </InfoRow>
                        </Div>
                    </SimpleCell>
                </Group> 
                <DeleteBtn product={product.id} className="product-info__delete"/>
            </Div>
            <Div>
                <Accordion
                    expanded={isExpanded}
                    onChange={() => setIsExpanded(value => !value)}
                >
                    <Accordion.Summary>Описание</Accordion.Summary>
                    <Accordion.Content>
                        <Div style={infoStyle}>{product.description}</Div>
                    </Accordion.Content>
                </Accordion>
            </Div>
        </Card>
    )
}

export default Product