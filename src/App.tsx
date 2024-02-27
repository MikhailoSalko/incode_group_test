import { FormEvent, useState } from "react";
import { Todo } from "../@types/types.ts";
import SearchField from "./components/SeachField/SearchField.tsx";
import TodoList from "./components/TodoList/TodoList.tsx";
import ModalWindow from "./components/Modal/Modal.tsx";

function App() {
  const [todo, setTodo] = useState<Array<Todo>>([
    { id: "1", todoName: "Andriy", desc: "Sachuk", status: "pending" },
    { id: "2", todoName: "Misha", desc: "Salko", status: "progress" },
    { id: "3", todoName: "Lena", desc: "Salko", status: "done" },
  ]);
  const [todoName, setTodoName] = useState("");
  const [isModal, setIsModal] = useState(false);

  const handleOpenModal = () => setIsModal(true);
  const handleCloseModal = () => setIsModal(false);
  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {!isModal && (
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#myModal"
          onClick={handleOpenModal}>
          Open modal
        </button>
      )}
      {isModal && (
        <ModalWindow
          show={isModal}
          handleCloseModal={handleCloseModal}
          handleAddTodo={handleAddTodo}
        />
      )}
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
