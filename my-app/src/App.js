import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  const [language, setLanguage] = useState('en');
  const [tasks, setTasks] = useState(() => {
    let data = localStorage.getItem('tasks')
    if(data) {
      return JSON.parse(data)
    }else {
      return [
        { text: "Build some websites", completed: false, time: "2023-12-20" },
        { text: "Do excercises", completed: false , time: "2023-12-20"},
        { text: "Go shopping", completed: false , time: "2023-12-20"},
        { text: "House cleaning", completed: true , time: "2023-12-20"},
      ]
    }
  });
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currentDate.getDate()).slice(-2);
    
    return `${year}-${month}-${day}`;
  }
  const addTask = (text) => {
    const newTask = { text, completed: false, time: getCurrentDate()};
    let newArr = tasks
    setTasks([...tasks, newTask]);
    newArr.push(newTask)
    localStorage.setItem('tasks', JSON.stringify(newArr));
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  };
  
  const incompleteCount = tasks.filter((task) => !task.completed).length;
  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const reorderList = (startIndex, endIndex) => {
    const updatedTasks = [...tasks];
    const [removed] = updatedTasks.splice(startIndex, 1);
    updatedTasks.splice(endIndex, 0, removed);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="App">
      <div className="container">
        <TodoListHeader language={language} incompleteCount={incompleteCount} />
        <TodoList reorderList={reorderList} language={language} tasks={tasks} toggleTask={toggleTask} />
        <Form language={language} addTask={addTask} />
      </div>
      <Footer />
    </div>
  );
};