import TransactionForm from "../components/TransactionForm";
import TransactionHeader from "../components/TransactionHeader";
import TransactionTable from "../components/TransactionTable";

const TransactionPage = () => {
  return (
    <>
      <TransactionHeader />
      <TransactionForm />
      <TransactionTable />
    </>
  );
};

export default TransactionPage;
