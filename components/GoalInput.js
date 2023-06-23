import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"

const GoalInput = ({ goalInputHandler, addGoal, modalVisibility, modalHandler }) => {
    return (
        <Modal visible={modalVisibility} animationType="fade">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
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
        padding: 24,
        backgroundColor: '#311b6b'
    },
    textInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 8,
        color: '#fafafa'
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})


export { GoalInput }