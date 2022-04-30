import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);
    const handaleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="home"> <img style={{ height: '35px' }} src={logo} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto text-white">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#experts">Experts</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/about" >About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>{
                                user && <>
                                    <Nav.Link as={Link} to="/addservice">Add</Nav.Link>
                                    <Nav.Link as={Link} to="/manageservice">Manage</Nav.Link>

                                </>
                            }
                            {
                                user ?
                                    <button onClick={handaleSignOut} className="bg-transparent border-0 text-white fw-bold" >Sign out</button>
                                    :
                                    <Nav.Link as={Link} to="/login">Log In</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;