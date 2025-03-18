import { SyntheticEvent, useState, ChangeEvent } from "react";
import "./CreateTaskPage.css";
import { useDispatch} from "react-redux";
import { addTodoTask } from "../../store/todoTask";
import { useNavigate } from "react-router-dom";

export default function CreateTaskPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [invalidFields, setInvalidFields] = useState(false);

  const [formData, setFormData] = useState({
    taskName: "",
    description: "",
    status:'awaiting'
  });

  function changeHandler(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    if(formData.taskName !== '' && formData.description !== ''){
      setInvalidFields(false)
    }
  }

  function submitHandler(event: SyntheticEvent) {
    event.preventDefault();
    if(formData.taskName === '' || formData.description === ''){
      setInvalidFields(true);
      return;
    }
    dispatch(addTodoTask(formData));
    navigate('/myTasks')
  }

  return (
    <form onSubmit={submitHandler} className="create-task-form">
      <label>
        Task name:
        <input
          type="text"
          className="input-task"
          name="taskName"
          value={formData.taskName}
          onChange={changeHandler}
        />
      </label>
      <label>
        Task description:
        <textarea
          name="description"
          id="task-description"
          className="input-task"
          value={formData.description}
          onChange={changeHandler}
        ></textarea>
      </label>
      { invalidFields ?  <p className="error">All fields are required!</p> :'' }
      <button className="create-task">Create Task</button>
    </form>
  );
}
