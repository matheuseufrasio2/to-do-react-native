import React, { useState } from 'react';

import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [blackTheme, setBlackTheme] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    const task: Task = {
      id:new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks([...tasks, task]);
  }

  function handleMarkTaskAsDone(id: number) {
    const task = tasks.find(task => task.id === id);

    if (!task) return;

    task.done = !(task.done);

    const tasksWithModification = tasks.filter(task => task.id !== id);
    tasksWithModification.push(task);

    setTasks(tasksWithModification);
  }

  function handleRemoveTask(id: number) {
    const tasksAfterRemove = tasks.filter(task => task.id !== id);

    setTasks(tasksAfterRemove);
  }
  
  function handleChangeTheme() {
    setBlackTheme(!blackTheme);
  }

  return (
    <SafeAreaView style={ blackTheme ? styles.containerBlack : styles.container} >
      <Header isBlackTheme={blackTheme} />

      <TodoInput isBlackTheme={blackTheme} addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask}
        isBlackTheme={blackTheme}
      />

      <View style={ blackTheme ? styles.footerBlack : styles.footer}>
        <TouchableOpacity
          style={ blackTheme ? styles.buttonChangeThemeBlack : styles.buttonChangeTheme}
          onPress={handleChangeTheme}
          activeOpacity={0.7}
        >
          <Text style={styles.textButtonChangeTheme}>Mudar Tema</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F4F8',
    flex: 1
  },
  footer: {
    backgroundColor: '#F5F4F8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  buttonChangeTheme: {
    backgroundColor: '#273FAD',
    padding: 8,
    borderRadius: 7
  },
  textButtonChangeTheme: {
    color: '#fff'
  },
  containerBlack: {
    backgroundColor: '#10101e',
    flex: 1
  },
  footerBlack: {
    backgroundColor: '#10101e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  buttonChangeThemeBlack: {
    backgroundColor: '#565BFF',
    padding: 8,
    borderRadius: 7
  }
});