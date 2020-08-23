import React    from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router";

const NavBar = (props) => {

  const { location } = props;
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Sakshi</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" activeKey={location.pathname}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about" >About</Nav.Link>
          <Nav.Link href="/contacts">Contacts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const Header=withRouter(NavBar);
export default Header;
