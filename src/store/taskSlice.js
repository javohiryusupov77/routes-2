import { createSlice } from "@reduxjs/toolkit";

const views = {
  TODAY: "Today",
  WEEK: "Week",
  MONTH: "Month",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    task: "",
    selectedView: views.TODAY,
  },
  reducers: {
    addTask: (state) => {
      if (state.task) {
        state.tasks.push({
          text: state.task,
          done: false,
          view: state.selectedView,
        });
        state.task = "";
      }
    },
    toggleTaskDone: (state, action) => {
      const { index } = action.payload;
      state.tasks[index].done = !state.tasks[index].done;
    },
    deleteTask: (state, action) => {
      const { index } = action.payload;
      state.tasks.splice(index, 1);
    },
    setTask: (state, action) => {
      state.task = action.payload;
    },
    setSelectedView: (state, action) => {
      state.selectedView = action.payload;
    },
  },
});

export const { addTask, toggleTaskDone, deleteTask, setTask, setSelectedView } = tasksSlice.actions;
export default tasksSlice.reducer;
