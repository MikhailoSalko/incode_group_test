import css from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";
import { Todo } from "../../../@types/types";

type Props = { todo: Todo[] };

const TodoList = ({ todo }: Props) => {
  return (
    <ul>
      {todo.map(({ id, todoName, desc, status }: Todo) => (
        <TodoItem key={id} id={id} todoName={todoName} desc={desc} status={status} />
      ))}
    </ul>
  );
};

export default TodoList;
