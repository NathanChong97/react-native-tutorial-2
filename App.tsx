/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

function App(): JSX.Element {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function addGoalHandler(enteredGoalText: string) {
    // setCourseGoals([...courseGoals, enteredGoalText])
    //-----------------------
    // setCourseGoals((currentCourseGoals) => {
    //   return [
    //     ...currentCourseGoals,
    //     enteredGoalText
    //   ];
    // })
    //----------------------
    setCourseGoals((currentCourseGoals) => {
      return [
        ...currentCourseGoals,
        { text: enteredGoalText, id: Math.random().toString() }
      ];
    })
    endGoalHandler()
  }

  function deleteGoalHandler(id: String) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endGoalHandler() {
    setModalIsVisible(false)
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color='#a065ec'
          onPress={startAddGoalHandler} />
        <GoalInput
          modalVisible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancelModal={endGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              )
            }}
          />
          {/* <ScrollView>
          {
            courseGoals.map((goal) => 
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
              )
          }
        </ScrollView> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;
