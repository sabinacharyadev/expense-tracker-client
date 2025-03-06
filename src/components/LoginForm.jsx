import { useState } from "react";
import { Form, Button } from "react-bootstrap";
const LoginForm = () => {
  const initialData = { email: "", password: "" };
  const [formData, setFormData] = useState(initialData);
  const { email, password } = formData;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Form>
      <h2>Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
