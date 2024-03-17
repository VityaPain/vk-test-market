import { FC, HTMLProps } from "react"
import { useDispatch } from "react-redux"
import { deleteProduct } from "../redux/productSlice"

import {
    Button,
    Div,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { Icon24DeleteOutline } from '@vkontakte/icons'

export type DeleteProps = {
    product: number
} & HTMLProps<HTMLDivElement>

const DeleteBtn: FC<DeleteProps> = ({ product, className, ...rest}) => {
    const dispatch = useDispatch()

    return (
        <Button
            className={className}
            size="l"
            before={<Icon24DeleteOutline />}
            appearance="negative"
            onClick={() => dispatch(deleteProduct(product))}
        ></Button>
    )
}

export default DeleteBtn
