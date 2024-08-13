import { useState } from "react";
import { FormCreateTask } from "./components/form/Form";
import { ListActions } from "./components/list-actions/ListActions";
import { TaskList } from "./components/task-list/TaskList";
import { tasks } from "./data/tasks.js";

function App() {
  const [taskList, setTaskList] = useState(tasks);
  const [id, setId] = useState(tasks.at(-1).id);


  function addTask (taskText, taskColor) {
       setTaskList(prev => [
      ...prev,
      {
        id: id + 1,
        text: taskText,
        color: taskColor,
        sttate: 'todo',
      }
    ]);
    setId(prev => prev + 1);
  }

  function removeTask (taskText) {
    setTaskList(prev => prev.filter(task => task.id !== taskText)); 
  }

  function updateTaskText (id, newText) {
    setTaskList(prev => prev.map(task => ({
      ...task,
      text: task.id === id ? newText : task.text,
    })));
  }
  
  function updateTaskColor (id, newColor) {
     setTaskList(prev => prev.map(task => ({
      ...task,
      color: task.id === id ? newColor : task.color,
    })));
  }
  
  function updateTaskState (id) {
       setTaskList(prev => prev.map(task => ({
      ...task,
      state: task.id === id ? 'done': task.state,
    })));
  }
  

  return (
    <main>
      <h1>Todo</h1>
      <div>
        <p>Viso užduočių: {taskList.length}</p>
        <p>Likusios atlikti užduotys: {taskList.length}</p>
        <p>Atliktos užduotys: -</p>
        <p>Ištrintos užduotys: -</p>
      </div>
      <FormCreateTask addTaskCallback={addTask}/>
      <ListActions />
      <TaskList data={taskList}
      updateTaskText = {updateTaskText}
      updateTaskColor = {updateTaskColor}
      updateTaskState = {updateTaskState}
      removeTask={removeTask}/>
    </main>
  );
}

export default App;