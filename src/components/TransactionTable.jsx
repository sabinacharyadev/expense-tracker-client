import { useEffect, useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTransactions,
  showTransactions,
} from "../redux/transaction/transactionAction";
import { upperCaseFirstLetter } from "../utility/upperCaseFirstLetter";
const TransactionTable = () => {
  const dispatch = useDispatch();
  const [selectedIds, setSelectedIds] = useState([]);
  const { user } = useSelector((state) => state.user);

  // render data on page load
  useEffect(() => {
    dispatch(showTransactions(user._id));
  }, [dispatch, user._id]);

  const { transactions } = useSelector((state) => state.transaction);

  // Handle checkbox click event
  const handleOnChange = (e) => {
    const { value: checkedId } = e.target;
    const isAdded = selectedIds.includes(checkedId);
    isAdded
      ? setSelectedIds(selectedIds.filter((item) => item !== checkedId))
      : setSelectedIds([...selectedIds, checkedId]);
  };

  const handleOnDelete = () => {
    dispatch(removeTransactions(selectedIds, user._id));
    setSelectedIds([]);
  };

  return (
    <>
      <h2 className="mt-4">Transactions</h2>
      <Table striped bordered hover className="m-4 text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
            <th style={{ height: "4rem", minWidth: "6rem" }}>
              {!!selectedIds.length && (
                <Button variant="outline-danger" onClick={handleOnDelete}>
                  Delete
                </Button>
              )}
              {!selectedIds.length && <span>Delete</span>}
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction._id}>
              <td>{index + 1}</td>
              <td>{upperCaseFirstLetter(transaction.title)}</td>
              <td>{upperCaseFirstLetter(transaction.type)}</td>
              <td>
                {transaction.type === "expense" ? (
                  <span className="text-danger">{transaction.amount}</span>
                ) : (
                  <span className="text-success">{transaction.amount}</span>
                )}
              </td>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
              <td>
                <Form>
                  <Form.Check
                    onChange={handleOnChange}
                    name="checkbox"
                    value={transaction._id}
                    type="checkbox"
                  />
                </Form>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TransactionTable;
