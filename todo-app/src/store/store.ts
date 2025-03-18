import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './todoTask'

export const store = configureStore({
  reducer: {
    todoTask: todosReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
