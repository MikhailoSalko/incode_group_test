import css from "./TodoItem.module.scss";
import { Todo } from "../../../@types/types";
import { FC } from "react";

const TodoItem: FC<Todo> = ({ id, todoName, desc, status }) => {
  return (
    <li>
      <p>{id}</p>
      <p>{todoName}</p>
      <p>{desc}</p>
      <p>{status}</p>
    </li>
  );
};

export default TodoItem;
