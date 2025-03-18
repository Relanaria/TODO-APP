import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { markAsCompleted, removeCompletedTask } from "../../../store/todoTask";

interface TaskProps {
  todoTask: {
    id: string;
    taskName: string;
    description: string;
    status: string;
  };
}


export default function Task({ todoTask }: TaskProps) {
  const dispatch = useDispatch();
  
  return (
    <article
      className={`task ${todoTask.status === "completed" ? "task-completed" : ""}`}
    >
      <h2 className="task-name">{todoTask.taskName}</h2>
      <p className="task-info">
        {todoTask.description}
      </p>
      <p>
        status: 
        {todoTask.status === "completed" ? " Completed" : " Awaiting completion"}
      </p>
      <div className="task-menu">
        {todoTask.status === "completed" ? (
          ""
        ) : (
          <button className="check-btn" onClick={() => dispatch(markAsCompleted(todoTask.id))}>
            <FaCheck size={50} />
          </button>
        )}
        <button className="delete-btn" onClick={() => dispatch(removeCompletedTask(todoTask.id))}>
          <MdDelete size={50} />
        </button>
      </div>
    </article>
  );
}


