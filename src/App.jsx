import { FormCreateTask } from "./components/form/Form";
import { ListActions } from "./components/list-actions/ListActions";
import { TaskList } from "./components/task-list/TaskList";

function App() {
  return (
    <main>
      <h1>Todo</h1>
      <FormCreateTask />
      <ListActions />
      <TaskList />
    </main>
  );
}

export default App;