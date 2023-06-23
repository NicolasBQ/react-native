import { StyleSheet, View, TextInput, Button } from "react-native"

const GoalInput = ({ goalInputHandler, addGoal }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='Your Course Goal' style={styles.textInput} onChangeText={goalInputHandler}/>
            <Button title='Add Goal' onPress={addGoal}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        width: '70%',
        borderWidth: 1,
        borderColor: '#cccccc',
        marginRight: 8,
        padding: 8
    },
})


export { GoalInput }