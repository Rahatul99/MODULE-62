// import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../Provider/AuthProvider';
// import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    // const {user} = useContext(AuthContext);

    return (
        <Container className='mt-4'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'> <small>Journalism Without Fear or Favour</small> </p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>{' '}
                <Marquee className='text-danger' speed={50}>
                I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                 <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                             <Nav.Link href="#features">
                                <Link to="/">Home</Link>
                             </Nav.Link>
                             <Nav.Link href="#pricing">About</Nav.Link>
                             <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            { user && <Nav.Link href="#deets"><FaUserCircle style={{fontSize: '2rem'}} /></Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                                { user ? <Link to={'/login'}> <Button variant="secondary">Login</Button> </Link> : <Button variant="secondary">Log out</Button>}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                 </Container>
            </Navbar> */}
        </Container>
    );
};

export default Header;