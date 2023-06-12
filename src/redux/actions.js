export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task
});

export const resetTimer = () => ({
  type: "RESET_TIMER"
});
