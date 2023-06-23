import React from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [enteredText, setEnteredText] = React.useState('');
  const [courseGoals, setCourseGoals] = React.useState([]);
  const [modalVisibility, setModalVisibility] = React.useState(false);
  
  const goalInputHandler = (e) => {
    setEnteredText(e);
  }

  const addGoal = () => {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {key: currentCourseGoals.length, text: enteredText}]);
    modalHandler();
  }

  const listOfContent = (itemData) => <GoalItem itemData={itemData} deleteItem={deleteItem}/>

  const deleteItem = (id) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.key !== id );
    })
  }

  const modalHandler = () => {
    setModalVisibility(!modalVisibility);
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <View style={styles.modalBtn}>
          <Button title='Add New Goal' onPress={modalHandler}/>
        </View>
        <GoalInput goalInputHandler={goalInputHandler} addGoal={addGoal} modalVisibility={modalVisibility} modalHandler={modalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={listOfContent}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5,
  },
  modalBtn: {
    marginBottom: 8
  }
});
