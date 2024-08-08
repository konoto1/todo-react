import { useState } from "react";
import { FormCreateTask } from "./components/form/Form";
import { ListActions } from "./components/list-actions/ListActions";
import { TaskList } from "./components/task-list/TaskList";
import { tasks } from "./data/tasks.js";

function App() {
  const [taskList, setTaskList] = useState(tasks);
  const [count, setCount] = useState(0);

  function handleTaskListClick() {
    setTaskList(prev => [
      ...prev,
      {
        text: 'Baisus reikalai....'
      }
    ]);
  }

  return (
    <main>
      <h1 onClick={handleTaskListClick}>Todo</h1>
      <div>
        <p>Viso užduočių: {taskList.length}</p>
        <p>Likusios atlikti užduotys: {taskList.length}</p>
        <p>Atliktos užduotys: -</p>
        <p onClick={() => setCount(prevCount => prevCount + 1)}>Ištrintos užduotys: - {count}</p>
      </div>
      <FormCreateTask />
      <ListActions />
      <TaskList data={taskList} />
    </main>
  );
}

export default App;