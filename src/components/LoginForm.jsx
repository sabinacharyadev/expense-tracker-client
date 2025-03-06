import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/user/userAction";
import { useNavigate } from "react-router";
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialData = { email: "", password: "" };
  const [formData, setFormData] = useState(initialData);
  const { email, password } = formData;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (user._id) {
      navigate("/transactions");
    }
  }, [navigate, user._id]);

  return (
    <Form onSubmit={handleOnSubmit}>
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
