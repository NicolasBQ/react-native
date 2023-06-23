import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredText, setEnteredText] = React.useState('');
  const [courseGoals, setCourseGoals] = React.useState([]);
  
  const goalInputHandler = (e) => {
    setEnteredText(e);
  }

  const addGoal = () => {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {key: currentCourseGoals.length, text: enteredText}]);
  }

  const listOfContent = (itemData) => {
    return (
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{itemData.item.text}</Text>
      </View>
    )
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your Course Goal' style={styles.textInput} onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoal}/>
      </View> 
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={listOfContent}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
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
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    marginBottom: 8,  
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 12,
  },
  goalItemText: {
    color: '#fafafa'
  }
});
