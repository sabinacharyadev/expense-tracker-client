import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { addTransaction } from "../redux/transaction/transactionAction";
import { useDispatch, useSelector } from "react-redux";

const TransactionForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const initialData = {
    title: "",
    type: "expense",
    amount: "",
    date: new Date().toLocaleDateString().split("/").reverse().join("-"),
  };
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const { title, type, amount, date } = formData;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addTransaction({ ...formData, userId: user._id }, user._id));
    handleClose();
  };

  const handleClose = () => {
    setShow(false);
    setFormData(initialData);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="float-end p-3 m-3"
      >
        Add Transaction
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleOnSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>New Transaction</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={handleOnChange}
                placeholder="Enter title"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicType">
              <Form.Label>Type</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="type"
                value={type}
                onChange={handleOnChange}
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={amount}
                onChange={handleOnChange}
                placeholder="0.0"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={date}
                onChange={handleOnChange}
                max={new Date()
                  .toLocaleDateString()
                  .split("/")
                  .reverse()
                  .join("-")}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default TransactionForm;
