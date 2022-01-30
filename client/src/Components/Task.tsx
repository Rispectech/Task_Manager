import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./styles.css";

const EditTask: React.FC<EditProps> = ({ FetchData }) => {
  const [task, setTask] = useState<taskType>({
    _id: "",
    name: "",
    completed: false,
    __v: 0,
  });
  const [error, setError] = useState({ error: false, msg: "" });
  let { id } = useParams();
  // console.log(id);

  const getTask = async (id: string | undefined) => {
    id = id?.replace(/\s+/g, " ").trim();
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/task/${id}`);
      console.log(response.data);
      setTask(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (e: any) => {
    let newId: string | undefined = id?.replace(/\s+/g, " ").trim();
    e.preventDefault();
    console.log(task);
    try {
      const response = await axios.patch(`http://localhost:3000/api/v1/task/${newId}`, task);
      console.log(response);
      setError({ error: false, msg: "Task added successfully" });
      FetchData();
    } catch (error) {
      console.log(error);
      setError({ error: true, msg: "Something went wrong" });
    }
  };

  useEffect(() => {
    getTask(id);
  }, []);

  return (
    <div className="container">
      <form className="single-task-form" onSubmit={updateTask}>
        <h4>Edit Task</h4>
        <div className="form-control">
          <label>Task ID</label>
          <p className="task-edit-id"> {task?._id}</p>
        </div>
        <div className="form-control">
          <label>
            Name :
            <input
              type="text"
              name="name"
              className="task-edit-name"
              value={task?.name}
              onChange={(e) =>
                setTask({
                  _id: task._id,
                  name: e.target.value,
                  completed: task.completed,
                  __v: task.__v,
                })
              }
            />
          </label>
        </div>
        <div className="form-control">
          <label>
            completed :
            <input
              type="checkbox"
              name="completed"
              className="task-edit-completed"
              checked={task?.completed}
              onChange={() =>
                setTask({
                  _id: task._id,
                  name: task.name,
                  completed: !task.completed,
                  __v: task.__v,
                })
              }
            />
          </label>
        </div>
        <button type="submit" className="block btn task-edit-btn">
          edit
        </button>
        <div className={error.error ? "form-alert" : "from-alert text-success"}>
          {error.msg}
        </div>
      </form>
      <Link to="/" className="btn back-link">
        back to tasks
      </Link>
    </div>
  );
};

export default EditTask;
