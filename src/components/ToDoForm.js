import React, { useState, useRef } from "react";
import ErrorModal from "./UI/ErrorModal";
import Button from "./UI/Button";
import styles from "./ToDoForm.module.css";

const Form = () => {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const [error, setError] = useState();

  const toDoHandler = (e) => {
    e.preventDefault();

    if (input.trim().length === 0) {
      setError({
        title: "Inavlid input!",
        message: "Please enter Somthing!",
      });
      return;
    }
    setInput("");
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    if (input.trim().length === 0) return;
    const addNewTodo = {
      id: Math.floor(Math.random() * 1000),
      todo: input,
    };
    setTodo([...todos, addNewTodo]);
  };

  const delteTodo = (id) => {
    const newTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodo(newTodo);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className={styles.create}>
        <h1>To Do List</h1>
        <form onSubmit={toDoHandler}>
          <input
            className={styles["fill-form"]}
            type="text"
            onChange={inputHandler}
            value={input}
            placeholder="Add New To Do"
          ></input>

          <Button type="submit" onClick={addTodo}>
            Add New To Do
          </Button>
        </form>
        <ul>
          {todos.map((todo) => (
            <div className={styles.inputTodo}>
              <input
                type="text"
                className={styles["fill-form"]}
                value={todo.todo}
                onChange={inputHandler}
                style={{ backgroundColor: "#000000", color: "#f3ca20" }}
              />
              <button
                className={styles["delete-btn"]}
                onClick={() => {
                  delteTodo(todo.id);
                }}
              >
                &times;
              </button>
            </div>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Form;
