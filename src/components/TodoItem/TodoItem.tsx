import css from "./TodoItem.module.scss";
import { Todo } from "../../../@types/types";
import { FC } from "react";

const TodoItem: FC<Todo> = ({ todoName, desc }) => {
  return (
    <li>
      <p>{todoName}</p>
      <p>{desc}</p>
    </li>
  );
};

export default TodoItem;
