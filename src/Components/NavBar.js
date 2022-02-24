import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../Images/My-Logo.png'

export default function NavBar () {
  return (
    <Navbar fixed='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
      <Container>
        <LinkContainer to='#'>
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src={logo}
              height='30'
              className='d-inline-block align-top'
            />{' '}
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav variant='pills'>
            <NavItem>
              <LinkContainer to='/#'>
                <Nav.Link> Home</Nav.Link>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to='/A'>
                <Nav.Link> Skills</Nav.Link>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to='/B'>
                <Nav.Link> Projects</Nav.Link>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to='/C'>
                <Nav.Link> Contacts</Nav.Link>
              </LinkContainer>
            </NavItem>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}
