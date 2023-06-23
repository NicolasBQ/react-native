import { StyleSheet, View, Text, Pressable } from "react-native"  

const GoalItem = ({itemData, deleteItem}) => {
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#dddddd'}} onPress={deleteItem.bind(this, itemData.item.key)}>
                <Text style={styles.goalItemText}>{itemData.item.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        marginBottom: 8,  
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalItemText: {
        color: '#fafafa',
        padding: 12,
    }
});

export { GoalItem }