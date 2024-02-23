import { useState } from "react";
import { Todo } from "../@types/types.ts";
import SearchField from "./components/SeachField/SearchField.tsx";
import TodoList from "./components/TodoList/TodoList.tsx";

function App() {
  const [todo, setTodo] = useState<Array<Todo>>([
    { id: "1", todoName: "Andriy", desc: "Sachuk", status: "todo" },
    { id: "2", todoName: "Misha", desc: "Salko", status: "progress" },
    { id: "3", todoName: "Lena", desc: "Salko", status: "done" },
  ]);
  const [todoName, setTodoName] = useState("");

  return (
    <>
      <SearchField />
      <div>
        <div>{/* <TodoList /> */}</div>
        <div>{/* <TodoList /> */}</div>
        <div>{/* <TodoList /> */}</div>
      </div>
    </>
  );
}

export default App;
