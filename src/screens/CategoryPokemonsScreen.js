import { FlatList } from 'react-native'
import React from 'react'

import { POKEMONS } from '../data/pokemons'
import PokemonItem from '../components/PokemonItem'

const CategoryPokemonsScreen = ({ route, navigation }) => {

    const { regionId } = route.params

    const pokemons = POKEMONS.find(region => region.id === regionId)
    
    const handleOnSelected = (item) => {
        navigation.navigate('Detail', {
        bread: item
        })
    }

    const renderPokemonItem = ({ item }) => (<PokemonItem item={item} onSelected={handleOnSelected} />)

    
    const dataList = pokemons ? pokemons.pokemon_species : []

    return (
        <FlatList 
            data={dataList}
            keyExtractor={(item) => item.id}
            renderItem={renderPokemonItem}
        />
    )
}

export default CategoryPokemonsScreen