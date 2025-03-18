import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import MyTasks from "./components/myTasks/MyTasks";
import Home from "./components/home/Home";
import CreateTaskPage from "./components/createTaskPage/CreateTaskPage";

function App() {
  return (
    <>
      <Header /> 
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/myTasks" element={<MyTasks/>} />
        <Route path="/CreateTask" element={<CreateTaskPage/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

  
    </>
  );
}

export default App;
