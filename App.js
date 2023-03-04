import { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Header from './src/components/Header';
import COLORS from './src/constants/Colors';
import GameScreen from './src/views/GameScreen';
import StartGameScreen from './src/views/StartGameView';

const App = () => {
    
    const [ loadedFonts ] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (loadedFonts) {
            await SplashScreen.hideAsync()
        }
    }, [loadedFonts])

    const [ userNumber, setUserNumber ] = useState()

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber)
    }

    if (!loadedFonts) {
        return null
    }

    return (
        <View style={styles.appView} onLayout={onLayoutRootView}>
            <Header title="Adivina el numero" />
            {
                userNumber
                    ? <GameScreen />
                    : <StartGameScreen startGameHandler={startGameHandler}/>
            }
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
