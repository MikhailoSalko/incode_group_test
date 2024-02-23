import css from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";
import { Todo } from "../../../@types/types";
import { FC } from "react";

const TodoList: FC<Todo[]> = ({}) => {
  return (
    <ul>
      {/* {todo.map(({ id, todoName, desc }) => (
        <TodoItem key={id} todoName={todoName} desc={desc} />
      ))} */}
    </ul>
  );
};

export default TodoList;
