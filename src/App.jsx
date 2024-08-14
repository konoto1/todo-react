import { useEffect, useState } from "react";
import { FormCreateTask } from "./components/form/Form";
import { ListActions } from "./components/list-actions/ListActions";
import { TaskList } from "./components/task-list/TaskList";
// import { tasks } from "./data/tasks.js";

function App() {

  const storageDataKey = 'todo-data';
  const storageIdKey = 'todo-last-id';
  const [taskList, setTaskList] = useState(readLocalData);
  const [id, setId] = useState(readLocalId);

  // func, be antro parametro, pasileidzia kai ispiesiamas komponentas ir kai perpiesiamas komponentas
  useEffect(() => {
    console.log('pasileido "APP" komponentas');
    
  });

  // func + [], antras parametras be reiksmiu (tuscias masyvas), pasileidzia tik pirma karta piesiant komponenta
  useEffect(() => {
    console.log('"APP" - tuscias masyvas');
  }, []);
  
  //func + [...] antras parametras yra ne tuscias masyvas, i ji ieina visi usestate parametrai, kuriu reiksmems kintant reikia paleisti sia funkcija
  useEffect(() => {
    localStorage.setItem(storageDataKey, JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    localStorage.setItem(storageIdKey, JSON.stringify(id));
  }, [id]);

  // function saveDataToLocalStorage () {
  //   localStorage.setItem(storageKey, JSON.stringify(taskList));
  // }

  function readLocalId () {
    const localData = localStorage.getItem(storageIdKey);
    if (localData) {
      return JSON.parse(localData);
    }
    return 0;
  }

  function readLocalData () {
    const localData = localStorage.getItem(storageDataKey);
    if (localData) {
      return JSON.parse(localData);
    }
    console.log(localData);
    return [];
  }

  function addTask (taskText, taskColor) {
       setTaskList(prev => [
      ...prev,
      {
        id: id + 1,
        text: taskText,
        color: taskColor,
        state: 'todo',
      }
    ]);
    setId(prev => prev + 1);
  }

  function removeTask (id) {
    setTaskList(prev => prev.filter(task => task.id !== id)); 
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