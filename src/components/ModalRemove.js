import { Button, Modal, StyleSheet, Text, View } from "react-native"

const ModalRemove = ({ modalVisibility, handleVisibility, deleteAction, selectedItem}) => {
    return (
        <Modal visible={modalVisibility}>
            <View style={styles.view}>
                <Text>
                    Desea eliminar el item {" "}
                    <Text>
                        "{selectedItem}"
                    </Text>
                    ?
                </Text>
                <View style={styles.buttonsBox}>
                    <Button
                        title="Cancelar"
                        onPress={handleVisibility}
                    />
                    <Button
                        title="Eliminar"
                        onPress={() => deleteAction(selectedItem)}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    view: {
        marginTop: '20%',
        marginHorizontal: "10%",
        padding: 20,
        backgroundColor: "#577590",
        borderRadius: 20,
        justifyContent: "center"
    },
    buttonsBox: {
        flexDirection: 'row'
    },
    buttonCancel: {
        backgroundColor: "#a31621"
    },
    buttonDelete: {
        backgroundColor: "#358600"
    }
})

export default ModalRemove