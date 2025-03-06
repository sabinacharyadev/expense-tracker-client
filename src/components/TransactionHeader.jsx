import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

const TransactionHeader = () => {
  const { user } = useSelector((state) => state.user);
  const handleOnClick = () => {
    window.location.reload();
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Hello {user.name} </Navbar.Brand>
        <Nav.Link onClick={handleOnClick}>Logout</Nav.Link>
      </Container>
    </Navbar>
  );
};

export default TransactionHeader;
