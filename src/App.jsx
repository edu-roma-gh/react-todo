import { useMemo, useState } from "react";

import { Card } from "./components/Card";
import { CardSizes } from "./constants/card";
import { Button } from "./components/Button";
import { ButtonSizes } from "./constants/button";
import { Todo } from "./components/Todo";
import { Result } from "./components/Result";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    if (inputValue.trim() === "") return;
    const newTodo = {
      value: inputValue,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInputValue("");
  };

  const handlToggleTodo = (idx) => {
    setTodos((prev) =>
      prev.map((todo, currIdx) =>
        idx === currIdx ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const completedTodos = useMemo(() => {
    return todos.filter((todo) => todo.done).length;
  }, [todos]);

  return (
    <Card classNames="parentCard" size={CardSizes.LARGE}>
      <Result completed={completedTodos} total={todos.length} />
      <form className="form">
        <input onChange={handleChange} value={inputValue} type="text" />
        <Button onClick={handleAddTodo} size={ButtonSizes.SMALL}>
          +
        </Button>
      </form>

      <div className="todos">
        {todos.map((todo, idx) => (
          <Todo
            handlToggleTodo={handlToggleTodo}
            key={idx}
            todo={todo}
            idx={idx}
          />
        ))}
      </div>
    </Card>
  );
}

export default App;
