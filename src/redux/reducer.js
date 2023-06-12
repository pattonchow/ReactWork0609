export const initialState = {
  tasks: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case "RESET_TIMER":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, time: 0 } : task
        )
      };
    default:
      return state;
  }
};
