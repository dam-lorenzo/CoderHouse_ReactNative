import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CatchedNavigator from './CatchedNavigator'
import PokedexNavigator from './PokedexNavigator';


const BottomTabs = createBottomTabNavigator()

const TabsNavigator = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
        >
            <BottomTabs.Screen name="pokedex" component={PokedexNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                            <Entypo name="classic-computer" size={24} color={focused ? '#7F5DF0' : '#748C94'} />
                            <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Pokedex</Text>
                        </View>
                    )
                }}

            />
            <BottomTabs.Screen name="catched-tab" component={CatchedNavigator}
                options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                        <Ionicons name="school-outline" size={24} color={focused ? '#7F5DF0' : '#748C94'} />
                        <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Atrapados</Text>
                    </View>
                )
                }}
            />
        </BottomTabs.Navigator>
    )
    }

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90
    },
    tabBarIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TabsNavigator