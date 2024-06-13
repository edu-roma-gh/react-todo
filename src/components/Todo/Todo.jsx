import { CardSizes } from "../../constants/card";
import { Card } from "../Card";

import "./Todo.css";

export const Todo = (props) => {
  const { todo, handlToggleTodo = () => {}, idx } = props;
  return (
    <Card classNames="todoCard" size={CardSizes.SMALL}>
      <div className="check">
        <input
          value={todo.done}
          onChange={() => handlToggleTodo(idx)}
          type="checkbox"
        />
        <span className={todo.done ? "checked" : ""}>{todo.value}</span>
      </div>
      <div className="todoActions">
        <button>E</button>
        <button>D</button>
      </div>
    </Card>
  );
};
