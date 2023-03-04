import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import Card from '../components/Card'
import COLORS from '../constants/Colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'


const StartGameScreen = ({ startGameHandler }) => {

    const [ enteredValue, setEnteredValue ] = useState('')
    const [ selectedNumber, setSelectedNumber ] = useState()
    const [ validNumber, setValidNumber ] = useState(false)

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }
    const cleanHandler = () => {
        setEnteredValue('')
    }
    const confirmHandler = () => {
        const chosedNumer = parseInt(enteredValue)
        if (chosedNumer === NaN || chosedNumer <= 0 || chosedNumer > 99) {
            return
        }
        setSelectedNumber(chosedNumer)
        setValidNumber(true)
        setEnteredValue('')
    }

    return (
        <TouchableWithoutFeedback onPress={() => { 
            Keyboard.dismiss()
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>Comenzar Juego</Text>
                <Card stylesProps={styles.inputContainer}>
                    <Text style={styles.inputDectiptionText}>Elija un numero</Text>
                    <Input style={styles.input} 
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        value={enteredValue}
                        onChangeText={numberInputHandler}
                    />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button title="Limpiar" onPress={cleanHandler} color={COLORS.buttonCancel}/>
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirmar" onPress={confirmHandler} color={COLORS.buttonAccept} />
                        </View>
                    </View>
                </Card>
                {selectedNumber ?
                    <Card stylesProps={styles.selectedNumberContainer}>
                        <Text>El numero elegido es: </Text>
                        <NumberContainer>{selectedNumber}</NumberContainer>
                        <Button title="Iniciar Juego" onPress={() => {
                            startGameHandler(selectedNumber)
                        }}/>
                    </Card>
                    : null
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    padding: 20,
    alignItems: 'center'
  },
  inputDectiptionText: {
    textAlign: 'center'
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  },
  selectedNumberContainer: {
    marginTop: 30,
    width: 200,
    maxWidth: '80%',
    padding: 10,
    alignItems: "center",
  }
})