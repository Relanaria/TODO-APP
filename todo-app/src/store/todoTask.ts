import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface todoTask {
  id: string;
  taskName: string;
  taskText: string;
}

const todosSlice = createSlice({
  name: "todoTasks",
  initialState: [] as todoTask[],
  reducers: {
    addTodo:  (state, action: PayloadAction<todoTask>) => {
        state = [...state, action.payload];
      }
    },
  },
);

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
