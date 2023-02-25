import { StyleSheet, View, Button, TextInput } from 'react-native'

const InputField = ({ textValue, textHandler, pressHandler}) => {
    return (
        <View style={styles.inputView}>
            <TextInput
                style={styles.input}
                placeholder='Ingrese un nuevo item'
                keyboardType="numeric"
                value={textValue}
                onChangeText={textHandler}
            />
            <Button
                style={styles.button}
                title='addItem'
                onPress={pressHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 20
    },
    input: {
      height: 40,
      width: 150,
      color: "black",
      backgroundColor: "grey",
    },
    button: {
      width: 100,
      color: "black"
    }
});

export default InputField