import { Button, Text, View } from 'react-native'
import React from 'react'

import styles from '../styles/screen'

const CategoryBreadScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>CategoryBreadScreen</Text>
      <Button title="Ir a Detail" onPress={() => {
        navigation.navigate('Detail')
        }} />
    </View>
  )
}

export default CategoryBreadScreen