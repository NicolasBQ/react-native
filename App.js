import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {
  const [enteredText, setEnteredText] = React.useState('');
  const [courseGoals, setCourseGoals] = React.useState([]);
  
  const goalInputHandler = (e) => {
    setEnteredText(e);
  }

  const addGoal = () => {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {key: currentCourseGoals.length, text: enteredText}]);
  }

  const listOfContent = (itemData) => <GoalItem itemData={itemData} deleteItem={deleteItem}/>

  const deleteItem = (id) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.key !== id );
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput goalInputHandler={goalInputHandler} addGoal={addGoal}/>
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
  goalsContainer: {
    flex: 5,
  },
});
