import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Header from './src/components/Header';
import COLORS from './src/constants/Colors';
import ShopNavigator from './src/navigators/ShopNavigator';

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

    if (!loadedFonts) {
        return null
    }

    return (
        <View style={styles.appView} onLayout={onLayoutRootView}>
            <Header title="Shop" />
            <ShopNavigator />
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
