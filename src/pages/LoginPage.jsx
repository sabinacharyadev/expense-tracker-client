import { Container, Row, Col, Stack } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
const LoginPage = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center vh-100">
        <Col>
          <Stack className="p-4 text-center">
            <h2>Expense Tracker</h2>
            <h3 className="p-4">Track your Expense</h3>
            <h4>Understand your flow</h4>
          </Stack>
        </Col>
        <Col>
          <Stack>
            <LoginForm />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
