import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import RegionsScreen from '../screens/RegionsScreen'
import CategoryPokemonsScreen from '../screens/CategoryPokemonsScreen'
import PokemonDetailScreen from '../screens/PokemonDetailScreen'
import { COLORS } from '../constants/colors'

const Stack = createNativeStackNavigator();

const PokedexNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home"
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
                name="Home"
                component={RegionsScreen}
                options={{
                    title: 'Pokedex'
                }}
            />
            <Stack.Screen
                name="RegionDetail"
                component={CategoryPokemonsScreen}
                options={({ route }) => ({ title: route.params.categoryName })}
            />
            <Stack.Screen
                name="Detail"
                component={PokemonDetailScreen} 
            />
        </Stack.Navigator>
    )
}

export default PokedexNavigator

