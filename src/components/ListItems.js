import { FlatList } from "react-native"
import Item from "./Item"

const ListItems = ({ items, itemAction }) => {
    return (
        <FlatList
            data={items}
            renderItem={
                (itemData) => {
                    return <Item data={itemData.item.text} action={itemAction} />
                }
            }
            keyExtractor={
                (item) => item.id.toString()
            }
        />
    )
}

export default ListItems