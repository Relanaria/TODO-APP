import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface todoTask {
  id: string,
  taskName: string;
  description: string;
  status: string;
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
      }
    },
  },
);

export const { addTodoTask } = todosSlice.actions;
export default todosSlice.reducer;
