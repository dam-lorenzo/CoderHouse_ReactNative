import { StyleSheet, Text, View } from "react-native"
import COLORS from '../constants/Colors'

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        paddingTop: 50,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        color: 'black',
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    }
})

export default Header