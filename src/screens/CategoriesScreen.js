import { Button, Text, View } from 'react-native'
import React from 'react'

import styles from '../styles/screen'

const CategoriesScreen = ({ ...props }) => {
    console.log(props)
    return (
        <View style={styles.screen}>
            <Text>CategoriesScreen</Text>
            <Button title="Ir a Products" onPress={() => { 
                props.navigation.navigate('Products') }} 
            />
        </View>
    )
}

export default CategoriesScreen