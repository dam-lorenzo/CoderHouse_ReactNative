import { Pressable, StyleSheet, Text } from "react-native"


const Item = ({ data, action }) => {
    return (
        <Pressable onPress={() => action(data)} style={styles.general}>
            <Text style={styles.item}>
                {data}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    general: {
        margin: 5,
        padding: 5,
        borderRadius: 40,
    },
    item: {
        backgroundColor: "lightgrey",
        padding: 5,
        fontSize: 25,
        textAlign: "center"
    }
})

export default Item