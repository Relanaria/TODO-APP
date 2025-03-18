import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./MyTasks.css";
import Task from "./task/Task";
import { SyntheticEvent, useEffect } from "react";
import { useState } from "react";

export default function MyTasks() {
  const tasks = useSelector((state: RootState) => state.todoTask);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [filterOption, setFilterOption] = useState('all');

  useEffect(() =>{
    if(filterOption === 'all') {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => task.status === filterOption));
    } 
  },[tasks, filterOption]);

  function handleClick(e: SyntheticEvent) {
    const target = e.target as HTMLButtonElement;
    setFilterOption(target.name);
  }

  return (
    <>
      <div className="filter-tasks" onClick={(e) => handleClick(e)}>
        <button name='all' >All Tasks</button>
        <button name='completed' >Completed Tasks</button>
        <button name='awaiting' >Awaiting Completion</button>
      </div>

      <article className="my-tasks">
        {filteredTasks.length !== 0 ? (
          filteredTasks.map((task) => <Task key={task.id} todoTask={task} />)
        ) : (
          <p>There are no tasks in your dashboard.</p>
        )}
      </article>
    </>
  );
}
