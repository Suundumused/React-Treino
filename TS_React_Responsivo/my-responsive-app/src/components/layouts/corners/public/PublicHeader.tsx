// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


export default function PublicHeader () {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand >Navbar</Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-nav-dropdown" />

                    <Navbar.Collapse id="navbar-nav-dropdown">
                    <Nav>
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/partner">Partner</Link>
                        <Link className="nav-link" to="/about">About</Link>

                        <NavDropdown title="Dropdown link" id="nav-dropdown">
                        <NavDropdown.Item >Action</NavDropdown.Item>
                        <NavDropdown.Item >Another action</NavDropdown.Item>
                        <NavDropdown.Item >Something else here</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}