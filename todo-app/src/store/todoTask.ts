import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface todoTask {
  id: string,
  taskName: string,
  description: string,
  status: string,
}

const initialState: todoTask[] = [];

const todosSlice = createSlice({
  name: "todoTask",
  initialState: initialState,
  reducers: {
    addTodoTask:  (state, action: PayloadAction<Omit<todoTask, "id">>) => {
      state.push({
        id: nanoid(), 
        ...action.payload, 
      });
    },
    markAsCompleted: (state, action: PayloadAction<string>) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.status = "completed";
      }
    },
    removeCompletedTask: (state, action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTodoTask, markAsCompleted, removeCompletedTask } = todosSlice.actions;
export default todosSlice.reducer;
