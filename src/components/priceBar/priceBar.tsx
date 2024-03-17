import { useSelector } from "react-redux"
import { SelectTotalMoney } from "../redux/productSlice"

import { 
    SimpleCell,
    InfoRow,
    Group
} from "@vkontakte/vkui"
import '@vkontakte/vkui/dist/vkui.css'



const PriceBar = () => {
    const money = useSelector(SelectTotalMoney)
    console.log(money)

    return (
        <Group mode="card">
            <SimpleCell>
                <InfoRow header="Итог">
                    Итого {money} руб
                </InfoRow>
            </SimpleCell>
        </Group>

    )
}

export default PriceBar