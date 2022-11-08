import { Container, Nav, Navbar } from "react-bootstrap";
import Main from "./Components/Main";
import logo from "./assets/images/master_logo.png";
 
function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo"/>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#back">بازگشت</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Main />

 

    </>
  );
}

export default App;
