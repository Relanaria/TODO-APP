import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./MyTasks.css";
import Task from "./task/Task";
import { useDispatch } from "react-redux";
import { SyntheticEvent } from "react";
import { filterTasks } from "../../store/todoTask";

export default function MyTasks() {
  const tasks = useSelector((state: RootState) => state.todoTask);
  const dispatch = useDispatch();

  function handleClick(e: SyntheticEvent) {
    const target = e.target as HTMLButtonElement;
    const result = dispatch(filterTasks(target.name));
    console.log(result);
  }

  return (
    <>
      <div className="filter-tasks" onClick={(e) => handleClick(e)}>
        <button name='all' >All Tasks</button>
        <button name='completed' >Completed Tasks</button>
        <button name='awaiting' >Awaiting Completion</button>
      </div>

      <article className="my-tasks">
        {tasks.length !== 0 ? (
          tasks.map((task) => <Task key={task.id} todoTask={task} />)
        ) : (
          <p>There are no tasks in your dashboard.</p>
        )}
      </article>
    </>
  );
}
