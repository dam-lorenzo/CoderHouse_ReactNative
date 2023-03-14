import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Header from './src/components/Header';
import COLORS from './src/constants/Colors';
import GameScreen from './src/views/GameScreen';
import StartGameView from './src/views/StartGameView';
import GameOverScreen from './src/views/GameOverScreen';

const App = () => {
    
    const [ loadedFonts ] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })

    useEffect( () => {
        if (loadedFonts) {
            SplashScreen.hideAsync()
        }
    })

    const onLayoutRootView = useCallback(async () => {
        if (loadedFonts) {
            await SplashScreen.hideAsync()
        }
    }, [loadedFonts])

    const [ userNumber, setUserNumber ] = useState()
    const [ guessRounds, setGuessRounds ] = useState(0)

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber)
        setGuessRounds(0)
    }

    const GameOverHandler = (rounds) => {
        setGuessRounds(rounds)
    }

    const reStartHandler = () => {
        setGuessRounds(0);
        setUserNumber(null);
      };

    if (!loadedFonts) {
        return null
    }

    return (
        <View style={styles.appView} onLayout={onLayoutRootView}>
            <Header title="Adivina el numero" />
            {
                !userNumber
                    ? <StartGameView startGameHandler={startGameHandler}/>
                    : userNumber && guessRounds <= 0
                        ? <GameScreen userOption={userNumber} onGameOver={GameOverHandler}/>
                        : <GameOverScreen rounds={guessRounds} choise={userNumber} onRestart={reStartHandler}/>
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
