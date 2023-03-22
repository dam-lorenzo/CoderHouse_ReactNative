import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts, OpenSans_400Regular, OpenSans_700Bold} from '@expo-google-fonts/open-sans';

import MainNavigation from './src/navigators/MainNavigation';

SplashScreen.preventAutoHideAsync();

export default function App() {

    const [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold
    });

    useEffect(() =>{
        if(fontsLoaded){
        SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded){
        return null;
    }

    return (
        <MainNavigation />
    );
}