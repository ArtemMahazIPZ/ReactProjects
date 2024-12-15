import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import EditTask from './components/EditTask';

const App = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask />
      <TaskList />
      <EditTask />
    </div>
  );
};

export default App;
