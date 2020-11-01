import React, {useState} from 'react';
import {Collapse, Navbar, Nav, NavbarToggler, NavItem, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';

const NavigationComponent = (props) => {
    const [isOpen, changeIsOpen] = useState(false);
    const toggleNavbarMenu = () => changeIsOpen(!isOpen);

    return (
        <Navbar light expand="md">
            <NavbarBrand>Nutrition App</NavbarBrand>
            <NavbarToggler onClick={toggleNavbarMenu} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {props.isLoggedIn
                    ? (
                        <>
                        <NavItem>
                            <Link to="/entry"></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/table"></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/update"></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/calendar"></Link>
                        </NavItem>
                        </>
                    ) : (
                        <>
                        <NavItem>
                            <Link to="/login">Login</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/register">Register</Link>
                        </NavItem>
                        </>
                    )}
                </Nav>
            </Collapse>
        </Navbar> 
    )
}

export default NavigationComponent;