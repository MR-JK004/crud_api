import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';
import { Link,useLocation } from 'react-router-dom';

function TopBar() {
  let {pathname} = useLocation()
  return <>
  <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand> <Link className='text-decoration-none' to='/'>User Information</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className={`text-decoration-none mr-10 ${pathname==='/'?'active':""}`} to='/dashboard'><Nav.Item>User Details</Nav.Item></Link>
            <Link className={`text-decoration-none mr-10 ${pathname==='/create'?'active':""}`} to='/create'><Nav.Item>Add User</Nav.Item></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default TopBar