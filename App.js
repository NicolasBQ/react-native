import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [enteredText, setEnteredText] = React.useState('');
  const [courseGoals, setCourseGoals] = React.useState([]);
  
  const goalInputHandler = (e) => {
    setEnteredText(e);
  }

  const addGoal = () => {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredText]);
  }

  const listContent = courseGoals.map((goal, index) => {
    return <View style={styles.goalItem} key={index}>
              <Text style={styles.goalItemText}>{goal}</Text>
          </View>
  });

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your Course Goal' style={styles.textInput} onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoal}/>
      </View> 
      <View style={styles.goalsContainer}>
        <ScrollView>
          {listContent}
        </ScrollView>
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
