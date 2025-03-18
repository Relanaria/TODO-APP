import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todosReducer from './todoTask'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoTask: todosReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
