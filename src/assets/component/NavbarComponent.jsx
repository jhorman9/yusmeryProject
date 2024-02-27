import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../image/logo.jpg';

const NavBar = () => {

  return (
    <Navbar expand="lg" className="bg-primary">
        <Container>
            <Navbar.Brand href="#">
                <img className='logo' src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <div className='me-auto my-2 my-lg-0'></div>
                <Nav className="d-flex" navbarScroll>
                    <Nav.Link as={Link} to={'/'}>Inicio</Nav.Link>
                    <Nav.Link as={Link} to={'/about'}>Sobre mí</Nav.Link>
                    <NavDropdown title="Libros" id="navbarScrollingDropdown">
                        <NavDropdown.Item >Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar;