import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { showTransactions } from "../redux/transaction/transactionAction";
import { upperCaseFirstLetter } from "../utility/upperCaseFirstLetter";
const TransactionTable = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(showTransactions(user._id));
  }, [dispatch, user._id]);

  const { transactions } = useSelector((state) => state.transaction);
  return (
    <>
      <h2 className="mt-4">Transactions</h2>
      <Table striped bordered hover className="m-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TransactionTable;
