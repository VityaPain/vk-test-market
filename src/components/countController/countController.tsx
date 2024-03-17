import { FC, HTMLProps } from "react"
import { useDispatch } from "react-redux"
import { changeCountProduct } from "../redux/productSlice"

import {
    Button,
    Div,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { Icon16Minus, Icon16Add } from '@vkontakte/icons'


export type ControllesProps = {
    currentValue: number,
    product: number
} & HTMLProps<HTMLDivElement>

const CountController: FC<ControllesProps> = ({currentValue, product, className, ...rest}) => {
    const dispatch = useDispatch()

    return (
        <Div 
            className={className}
            {...rest}    
        >
            <Button
                before={<Icon16Minus />}
                appearance="overlay"
                disabled={currentValue === 1}
                onClick={() => dispatch(changeCountProduct({ type: 'dec', productId: product }))}
            ></Button>
            <span>{currentValue}</span>
            <Button
                before={<Icon16Add />}
                appearance="overlay"
                disabled={currentValue === 10}
                onClick={() => dispatch(changeCountProduct({ type: 'inc', productId: product }))}
            ></Button>
        </Div>
    )
}

export default CountController
