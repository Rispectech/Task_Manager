import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import Form from "./Components/Form";
import EditTask from "./Components/Task";
import "./App.css";

function App() {
  const [task, setTask] = useState([]);
  const FetchData = async () => {
    const data = await axios("http://localhost:3000/api/v1/task");
    setTask(data.data);
    // console.log(task);
  };

  useEffect(() => {
    FetchData();
  }, []);

  // console.log(task);
  return (
    <Router>
      <Routes>
        <Route path="/" element={task && <Form task={task} FetchData={FetchData} />} />
        <Route path="/:id" element={<EditTask FetchData={FetchData} />} />
      </Routes>
    </Router>
  );
}

export default App;
