import { useEffect, useRef, useState } from "react"
import { Button, StyleSheet, View, Text, Alert } from "react-native"
import Card from "../components/Card"
import NumberContainer from "../components/NumberContainer"

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const randomNumber = Math.floor(Math.random() * (max - min) + min)
    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude)
    }
    return randomNumber
}

const GameScreen = ({ userOption, onGameOver }) => {

    const [ rounds, setRounds ] = useState(0)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)
    const [ currentGuess, setCurrentGuess ] = useState(generateRandomBetween(currentLow.current, currentHigh.current, userOption))


    useEffect(() => {
        if(currentGuess === userOption) {
            onGameOver(rounds)
        }
    }, [ currentGuess, userOption, onGameOver ])

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < userOption) || (direction === 'greater' && currentGuess > userOption)) {
            Alert.alert('No mientas!', 'Sabes que eso es incorrecto...', [{ text: 'Perdon!', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    }

    return (
        <View style={styles.screen}>
            <Text>La suposicion del oponente:</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card stylesProps={styles.buttonContainer}>
                <Button title="MAYOR" onPress={nextGuessHandler.bind(this, 'lower')}/>
                <Button title="MENOR" onPress={nextGuessHandler.bind(this, 'greater')}/>
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