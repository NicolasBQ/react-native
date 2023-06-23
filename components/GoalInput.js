import { StyleSheet, View, TextInput, Button, Modal } from "react-native"

const GoalInput = ({ goalInputHandler, addGoal, modalVisibility, modalHandler }) => {
    return (
        <Modal visible={modalVisibility} animationType="fade">
            <View style={styles.inputContainer}>
                <TextInput placeholder='Your Course Goal' style={styles.textInput} onChangeText={goalInputHandler}/>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoal}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={modalHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 8
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
})


export { GoalInput }