import { StyleSheet, Text, View } from "react-native"
import COLORS from "../constants/Colors"


const NumberContainer = ({ children }) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.number}>
                {children}
            </Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 5,
        borderColor: COLORS.second,
        borderRadius: 30,
        padding: 10,
        marginVertical: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    number: {
        fontSize: 22
    }
})

export default NumberContainer