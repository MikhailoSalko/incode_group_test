import { ChangeEvent, FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Todo } from "../../../@types/types";

type Props = {
  show: boolean;
  handleCloseModal: () => void;
  handleAddTodo: (e: FormEvent) => {};
};

const ModalWindow = ({ show, handleCloseModal, handleAddTodo }: Props) => {
  const [todo, setTodo] = useState<Todo>({ id: "", todoName: "", desc: "", status: "pending" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  return (
    <Modal show={show} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" name="todoName" placeholder="Write ToDo Name" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" name="desc" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddTodo}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWindow;
