import React, { SyntheticEvent } from "react";
import "./CreateTaskPage.css";

export default function CreateTaskPage() {
  function submitHandler(event: SyntheticEvent) {
    event.preventDefault();
    console.log(event);
  }

  
  return (
    <form onSubmit={submitHandler} className="create-task-form">
      <label>
        Task name:
        <input type="text" className="input-task" />
      </label>
      <label>
        Task description:
        <textarea
          name="task-description"
          id="task-description"
          className="input-task"
        ></textarea>
      </label>
      <button className="create-task">Create Task</button>
    </form>
  );
}
