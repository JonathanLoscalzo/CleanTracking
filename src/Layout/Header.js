import React from 'react'
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { NavbarBrand, Navbar, NavbarToggler, Collapse, Nav, NavLink, NavItem } from 'reactstrap';
import { MdHome, MdVpnKey } from 'react-icons/md'
import { FaAlignJustify } from 'react-icons/fa'


export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {

        return (
            <Navbar sticky="top" className="navbar-expand-md navbar-dark bg-dark">
                <NavbarBrand tag={Link} to={'/'}>
                    Clean Tracking
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} />
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar>
                        <LinkContainer to={'/'} exact>
                            <NavItem>
                                <NavLink>
                                    <MdHome /> Home
                                </NavLink>
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/order'} exact>
                            <NavItem>
                                <NavLink>
                                    <FaAlignJustify /> Pedidos
                                </NavLink>
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <LinkContainer to={'/logout'} exact>
                            <NavItem>
                                <NavLink>
                                    <MdVpnKey /> Cerrar Sesión
                                </NavLink>
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}