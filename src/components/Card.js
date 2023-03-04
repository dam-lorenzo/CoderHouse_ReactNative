import { StyleSheet, View } from "react-native"
import COLORS from "../constants/Colors"


const Card = ({ stylesProps, children }) => {
    return (
        <View style={{...styles.CardView, ...stylesProps}}>
            {children}
        </View>
    )
}

const cardElevation = 10

const styles = StyleSheet.create({
    CardView: {
        paddingVertical: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: cardElevation
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: cardElevation,
        borderRadius: 10,
        backgroundColor: "lightgrey",
        backgroundColor: COLORS.fourth
    }
})

export default Card