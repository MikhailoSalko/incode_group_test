import { useState } from "react";
import { Todo } from "../@types/types.ts";
import SearchField from "./components/SeachField/SearchField.tsx";
import TodoList from "./components/TodoList/TodoList.tsx";
import Modal from "./components/Modal/Modal.tsx";

function App() {
  const [todo, setTodo] = useState<Array<Todo>>([
    { id: "1", todoName: "Andriy", desc: "Sachuk", status: "pending" },
    { id: "2", todoName: "Misha", desc: "Salko", status: "progress" },
    { id: "3", todoName: "Lena", desc: "Salko", status: "done" },
  ]);
  const [todoName, setTodoName] = useState("");
  const [isModal, setIsModal] = useState(false);

  const openModal = () => setIsModal(true);
  const closeModal = () => setIsModal(false);

  return (
    <>
      {!isModal && (
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#myModal"
          onClick={openModal}>
          Open modal
        </button>
      )}
      {isModal && <Modal closeModal={closeModal} />}
      <SearchField />
      <div>
        <div>
          <TodoList todo={todo} />
        </div>
        <div>{/* <TodoList /> */}</div>
        <div>{/* <TodoList /> */}</div>
      </div>
    </>
  );
}

export default App;
