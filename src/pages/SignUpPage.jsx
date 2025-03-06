import { Container, Row, Col, Stack } from "react-bootstrap";
import SignUpForm from "../components/SignUpForm";

const SignUpPage = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center vh-100">
        <Col>
          <Stack className="rounded p-4 text-center">
            <h2>Expense Tracker</h2>
            <h3 className="p-4">Track your Expense</h3>
            <h4>Understand your flow</h4>
          </Stack>
        </Col>
        <Col>
          <Stack className="shadow-lg border rounded p-4">
            <SignUpForm />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
