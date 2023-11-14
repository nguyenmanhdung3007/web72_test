import React, { useState } from "react";

const Form = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskText);
    if (taskText.trim() !== "") {
      addTask(taskText);
      setTaskText("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder={ "Enter task ..." }
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">Submit </button>
    </form>
  );
};

export default Form;
