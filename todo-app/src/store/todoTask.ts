import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface todoTask {
  id: string,
  taskName: string,
  description: string,
  status: string,
}

const todosSlice = createSlice({
  name: "todoTasks",
  initialState: [] as todoTask[],
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
    filterTasks: (state, action: PayloadAction<string>) =>{
      if(action.payload === 'completed'){
        return state.filter((task) => task.status === 'completed');
      }
      if(action.payload === 'awaiting'){
        return state.filter((task) => task.status === 'awaiting');
      }
      return state;
    }
  },
});

export const { addTodoTask, markAsCompleted, removeCompletedTask, filterTasks } = todosSlice.actions;
export default todosSlice.reducer;
