import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Form: React.FC<Props> = ({ task, FetchData }) => {
  const [form, setForm] = useState("");
  const [error, setError] = useState({ error: false, msg: "" });
  // console.log(task);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(form);
    try {
      const response = await axios.post("http://localhost:3000/api/v1/task", { name: form });
      console.log(response);
      FetchData();
      setForm("");
      setError({ error: false, msg: "Task added successfully" });
    } catch (error) {
      console.log(error);
      setError({ error: true, msg: "Something went wrong" });
    }
  };

  const deleteTask = async (id: string) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/v1/task/${id}`);
      console.log(response);
      FetchData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form className="task-form" onSubmit={handleSubmit}>
        <h4>task manager</h4>
        <div className="form-control">
          <input
            type="text"
            name="name"
            className="task-input"
            placeholder="e.g. wash dishes"
            value={form}
            onChange={(e) => setForm(e.target.value)}
          />
          <button className="btn submit-btn" type="submit">
            submit
          </button>
        </div>
        <div className={error.error ? "form-alert" : "from-alert text-success"}>
          {error.msg}
        </div>
      </form>
      <section className="tasks-container">
        <p className="loading-text">Loading...</p>
        <div className="tasks">
          {task &&
            task.map((task: { name: string; completed: boolean; _id: string }) => {
              const { completed, _id: taskID, name } = task;
              return (
                <div
                  className={completed ? `single-task task-completed` : `single-task`}
                  key={taskID}
                  id={taskID}
                >
                  <h5>
                    {completed && (
                      <span>
                        <i className="far fa-check-circle"></i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </span>
                    )}
                    {name}
                  </h5>
                  <div className="task-links">
                    <Link to={`\ ${taskID}`} className="edit-link">
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <button
                      type="button"
                      className="delete-btn"
                      data-id=""
                      onClick={() => deleteTask(taskID)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Form;
