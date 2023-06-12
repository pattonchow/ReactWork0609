import React from "react";
import TaskCreator from "./components/TaskCreator";
import TasksList from "./components/TasksList";

const App = () => {
  return (
    <div>
      <h1>Time Tracker</h1>
      <TaskCreator />
      <TasksList />
    </div>
  );
};

export default App;
