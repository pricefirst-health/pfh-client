import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Home from '../home'
import About from '../about'

import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <div>
    <header>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand><NavLink to="/">PF Health</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/" className={"nav-link"}>Home</NavLink>
                    <NavLink to="/about-us" className={"nav-link"}>About us</NavLink>
                </Nav>
                <NavDropdown title="Sujan" alignRight={true}>
                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Dashboard</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Navbar>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
