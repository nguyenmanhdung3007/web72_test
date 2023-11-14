import { useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TodoList = ({ reorderList, language, tasks, toggleTask }) => {
  const [selected, setSelected] = useState(true);
  const validate = (date) => {
    console.log(date);
    const currentDate = new Date();
    const otherDate = new Date(date);
    console.log(otherDate);
    const timeDiff = Math.abs(otherDate.getTime() - currentDate.getTime())
    const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    console.log(diffDays); // In số ngày chênh lệch
    return diffDays
  }
  
  return (
    <>
      <div>
        <input
          onChange={(e) => setSelected(!e.target.checked)}
          id="fill"
          type="checkbox"
        />
        <label for="fill">
          {language == 'en' ? 'Not finished only' : 'Chưa hoàn thành'}
        </label>
      </div>
      <div className="todo-list-container">
        {selected &&
          tasks.map((task, index) => (
            <>
              <div
                draggable
                onDragStart={(e) => e.dataTransfer.setData('text/plain', index)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  const startIndex = e.dataTransfer.getData('text/plain');
                  const endIndex = index;
                  reorderList(startIndex, endIndex);
                }}
                key={index}
                className={`todo-item-container ${
                  task.completed ? "done" : ""
                }`}
              >
                {!task.completed ? (
                  <FaRegCircle
                    onClick={() => toggleTask(index)}
                    className="item-done-button"
                    color="#9a9a9a"
                  />
                ) : (
                  <FaRegCheckCircle
                    onClick={() => toggleTask(index)}
                    color="#9a9a9a"
                    className="item-done-button"
                  />
                )}
                <div className="item-title">{task.text}</div>
                <div style={{ flex:1, textAlign: 'right' }}>{validate(task.time)}</div>
              </div>
            </>
          ))}
        {!selected &&
          tasks
            .filter((item) => !item.completed)
            .map((task, index) => (
              <>
                <div
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData('text/plain', index)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    const startIndex = e.dataTransfer.getData('text/plain');
                    const endIndex = index;
                    reorderList(startIndex, endIndex);
                  }}
                  key={index}
                  className={`todo-item-container ${
                    task.completed ? "done" : ""
                  }`}
                >
                  {!task.completed ? (
                    <FaRegCircle
                      onClick={() => toggleTask(index)}
                      className="item-done-button"
                      color="#9a9a9a"
                    />
                  ) : (
                    <FaRegCheckCircle
                      onClick={() => toggleTask(index)}
                      color="#9a9a9a"
                      className="item-done-button"
                    />
                  )}
                  <div className="item-title">{task.text}</div>
                </div>
              </>
            ))}
      </div>
    </>
  );
};

export default TodoList;