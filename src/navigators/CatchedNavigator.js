import { Platform } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CatchedScreen from '../screens/CatchedScreen'
import { COLORS } from '../constants/colors'

const Stack = createNativeStackNavigator();

const CatchedNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                headerTitleStyle: {
                    fontFamily: 'OpenSans_700Bold'
                }
            }}
        >
            <Stack.Screen
                name="catched"
                component={CatchedScreen}
                options={{
                    title: 'Pokemones capturados'
                }}
            />
        </Stack.Navigator>
    )
}

export default CatchedNavigator