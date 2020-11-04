import React, {useState} from 'react';
import {Collapse, Navbar, Nav, NavbarToggler, NavItem, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';

const NavigationComponent = (props) => {
    const [isOpen, changeIsOpen] = useState(false);
    const toggleNavbarMenu = () => changeIsOpen(!isOpen);

    return (
        <Navbar light expand="md" className='navbar'>
            <NavbarBrand style={{color: 'white'}}>Nutrition App</NavbarBrand>
            <NavbarToggler onClick={toggleNavbarMenu} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {/* <NavItem>
                        <Link to="/foodentry">Food Entry</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/table/:id'>Food Table</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/foodupdate">Food Update</Link>
                    </NavItem> */}
                    <NavItem>
                        <Link to='login' onClick={props.clickLogout} style={{color: 'white'}}>Logout</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar> 
    )
}

export default NavigationComponent;