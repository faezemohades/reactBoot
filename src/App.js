import { Container, Nav, Navbar } from "react-bootstrap";
import Main from "./Components/Main";
import logo from "./assets/images/master_logo.png";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container fluid>
          <Navbar.Brand href="https://www.mp4.ir/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.mp4.ir/">بازگشت</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Main />
    </>
  );
}

export default App;
