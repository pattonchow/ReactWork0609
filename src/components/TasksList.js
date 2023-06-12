import React from "react";
import { useSelector } from "react-redux";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);

  const getTotalTime = () => {
    return tasks.reduce((total, task) => total + task.time, 0);
  };

  const renderTasks = () => {
    return tasks
      .reduce((uniqueTasks, task) => {
        const existingTaskIndex = uniqueTasks.findIndex(
          (t) => t.name === task.name
        );

        if (existingTaskIndex !== -1) {
          uniqueTasks[existingTaskIndex].time += task.time;
          if (task.id < uniqueTasks[existingTaskIndex].id) {
            uniqueTasks[existingTaskIndex].id = task.id;
          }
        } else {
          uniqueTasks.push({ ...task });
        }

        return uniqueTasks;
      }, [])
      .sort((a, b) => b.id - a.id)
      .map((task) => (
        <li className="task" key={task.id}>
          <span className="id">{task.id}</span>
          <span className="name">{task.name}</span>
          <span className="time">{task.time}</span>
        </li>
      ));
  };

  return (
    <div>
      <ul id="tasks">{renderTasks()}</ul>
      <div id="total">{getTotalTime()}</div>
    </div>
  );
};

export default TasksList;
