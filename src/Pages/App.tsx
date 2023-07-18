import React, { useState } from 'react';
import Form from '../Components/Form';
import List from '../Components/List';
import style from './App.module.scss';
import Cronometer from '../Components/Cronometer';
import { ITask } from '../types/task';

export default function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(previousTasks => previousTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(previousTasks => previousTasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Cronometer
        selected={selected}
        finishTask={finishTask}
      />
    </div>
  );
}
