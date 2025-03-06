import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoutes from "./components/PrivateRoutes";
import TransactionPage from "./pages/TransactionPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/transactions"
          element={
            <PrivateRoutes>
              <TransactionPage />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
