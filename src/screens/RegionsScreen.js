import { FlatList } from 'react-native'
import React from 'react'
import GridItem from '../components/GridItem'
import { REGIONS } from '../data/regions'

const RegionsScreen = ({ navigation }) => {

    const onSelectGridItem = (item) => {
        navigation.navigate('RegionDetail', {
            regionId: item.id,
            regionName: item.title
        })
    }

    const renderGridItem = ({ item }) => <GridItem item={item} onSelect={onSelectGridItem} />


    return (
        <FlatList
            data={REGIONS}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}

export default RegionsScreen
