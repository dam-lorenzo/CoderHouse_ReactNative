import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import InputField from './src/components/InputField';
import ListItems from './src/components/ListItems';
import ModalRemove from './src/components/ModalRemove';
import Title from './src/components/Title';

const App = () => {
    const [ items, setItems ] = useState([])
    const [ text, setText ] = useState('')
    const [ modalStatus, setModalStatus ] = useState(false)
    const [ selectedItem, setSelectedItem ] = useState(null)

    const addItem = () => {
        if (text !== '') {
            setItems([
                ...items,
                {
                    id: Date.now(),
                    text: text
                }
            ])
            setText('')
        }
    }

    const selectItem = (item) => {
        setSelectedItem(item)
        changeModalStatus()
    }

    const changeModalStatus = () => {
        setModalStatus(!modalStatus)
    }

    const removeItem = (toRemove) => {
        setItems(
            items.filter((item) => item.text !== toRemove )
            )
        changeModalStatus()
    }

    console.log(items)

    return (
        <View style={styles.appView}>
            <Title />
            <InputField textValue={text} textHandler={setText} pressHandler={addItem}/>
            <ListItems items={items} itemAction={selectItem}/>
            <ModalRemove
                modalVisibility={modalStatus}
                handleVisibility={changeModalStatus}
                deleteAction={removeItem}
                selectedItem={selectedItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    appView: {
        flex: 1,
        backgroundColor: 'darkgrey',
        alignItems: 'center',
    },
});

export default App