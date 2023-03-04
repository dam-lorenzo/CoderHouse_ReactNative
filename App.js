import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import COLORS from './src/constants/Colors';
import StartGameScreen from './src/views/StartGameView';

const App = () => {
    
    return (
        <View style={styles.appView}>
            <Header title="Adivina el numero" />
            <StartGameScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    appView: {
        flex: 1,
        backgroundColor: COLORS.appBrackground,
    },
});

export default App
