import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './todoTask'

const loadStateFromLocalStorage = () => {
 
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState) {
      return JSON.parse(serializedState);
    }
    return [];
};

const preloadedState = loadStateFromLocalStorage();

export const store = configureStore({
  reducer: {
    todoTask: todosReducer, 
  },
    preloadedState: {
    todoTask: preloadedState.todoTask
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
