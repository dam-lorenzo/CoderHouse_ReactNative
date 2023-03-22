import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts, OpenSans_400Regular, OpenSans_700Bold} from '@expo-google-fonts/open-sans';

import PokedexNavigator from './src/navigators/PokedexNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {

    const [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold
    });

    React.useEffect(() =>{
        if(fontsLoaded){
        SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded){
        return null;
    }

    return (
        <PokedexNavigator />
    );
}