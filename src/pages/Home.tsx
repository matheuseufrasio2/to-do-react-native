import React, { useState } from 'react';

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

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}