import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, resetTimer } from "../redux/actions";

const TaskCreator = () => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const handleStart = () => {
    if (timerId) return;

    const id = Date.now();
    setTimerId(id);

    const timer = setInterval(() => {
      setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 1);
    }, 1000);

    setTimerId(timer);
  };

  const handleStop = () => {
    if (!timerId) return;

    clearInterval(timerId);
    setTimerId(null);

    if (timeElapsed === 0) return;

    const task = {
      id: timerId,
      name: taskName,
      time: timeElapsed
    };

    dispatch(addTask(task));
    setTaskName("");
    setTimeElapsed(0);
  };

  const handleTimeChange = (e) => {
    const time = parseInt(e.target.value, 10);
    setTimeElapsed(time);
  };

  const handleTimeBlur = () => {
    if (timerId) return;

    const task = {
      id: timerId,
      name: taskName,
      time: timeElapsed
    };

    dispatch(addTask(task));
    setTaskName("");
    setTimeElapsed(0);
  };

  return (
    <div>
      <label htmlFor="taskName">Task Name:</label>
      <input
        type="text"
        id="taskName"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      {/* <br /> */}
      <label htmlFor="timeField">Time Elapsed: </label>
      <input
        type="number"
        id="timeField"
        value={timeElapsed}
        onChange={handleTimeChange}
        onBlur={handleTimeBlur}
      />
      {/* <br /> */}
      <button onClick={handleStart} id="start">
        Start
      </button>
      <button onClick={handleStop} id="stop">
        Stop
      </button>
    </div>
  );
};

export default TaskCreator;
