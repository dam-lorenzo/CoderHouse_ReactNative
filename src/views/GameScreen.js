import { useState } from "react"
import { Button, StyleSheet, View, Text } from "react-native"
import Card from "../components/Card"
import NumberContainer from "../components/NumberContainer"


const generateRandomBettween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const randomNumber = Math.floor(Math.random() * (max - min) + min)
    if (randomNumber === exclude) {
        return generateRandomBettween(min, max, exclude)
    }
    return randomNumber
}

const GameScreen = ({ userOption }) => {

    const [ currentGuess, setCurrentGuess ] = useState(generateRandomBettween(1, 100, userOption))

    return (
        <View style={styles.screen}>
            <Text>La suposicion del oponente:</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card stylesProps={styles.buttonContainer}>
                <Button title="MAYOR" onPress={() => {}}/>
                <Button title="MENOR" onPress={() => {}}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: "80%"
    }
})

export default GameScreen