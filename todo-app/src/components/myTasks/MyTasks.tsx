import React from "react";
import "./MyTasks.css";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

export default function MyTasks() {
    const isActive = true;

  return (
    <>
      <div className="filter-tasks">
        <button >All Tasks</button>
        <button>Completed Tasks</button>
        <button>Awaiting Completion</button>
      </div>

      <article className="my-tasks">
        <article className="task">
          <h2 className="task-name">Name</h2>
          <p className="task-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            unde, enim cum tenetur nemo assumenda soluta omnis provident itaque,
            odio officia illum? Aperiam eum cum quae, odit sint facere rerum?
          </p>
          <p>status: completed</p>
           <div className="task-menu">
            <button className="check-btn"><FaCheck  size={50} /></button>
            <button className="delete-btn"><MdDelete size={50}/></button>
          </div>
        </article>

        <article className="task">
          <h2 className="task-name">Name</h2>
          <p className="task-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            unde, enim cum tenetur nemo assumenda soluta omnis provident itaque,
            odio officia illum? Aperiam eum cum quae, odit sint facere rerum?
          </p>
          <p>status: completed</p>
           <div className="task-menu">
            <button className="check-btn"><FaCheck  size={50} /></button>
            <button className="delete-btn"><MdDelete size={50}/></button>
          </div>
        </article>

        <article className="task">
          <h2 className="task-name">Name</h2>
          <p className="task-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            unde, enim cum tenetur nemo assumenda soluta omnis provident itaque,
            odio officia illum? Aperiam eum cum quae, odit sint facere rerum?
          </p>
          <p>status: completed</p>
          <div className="task-menu">
            <button className="check-btn"><FaCheck  size={50} /></button>
            <button className="delete-btn"><MdDelete size={50}/></button>
          </div>
        </article>

        <article className={`task ${ isActive ? 'task-completed' : ''}`}>
          <h2 className="task-name">Name</h2>
          <p className="task-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            unde, enim cum tenetur nemo assumenda soluta omnis provident itaque,
            odio officia illum? Aperiam eum cum quae, odit sint facere rerum?
          </p>
          <p>status: { isActive ? 'Completed' : 'Awaiting completion'} </p>
           <div className="task-menu">
            {isActive ? '' : <button className="check-btn"><FaCheck  size={50} /></button> }
            <button className="delete-btn"><MdDelete size={50}/></button>
          </div>
        </article>
      </article>
    </>
  );
}
