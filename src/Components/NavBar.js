import React from 'react'
import Scrollspy from 'react-scrollspy'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../Images/My-Logo.png'

const links = [{
  id: 1,
  text: 'Home',
  url: '#Home'
},
{
  id: 2,
  text: 'Skills',
  url: '#Skills'
},
{
  id: 3,
  text: 'Projects',
  url: '#Projects'
},
{
  id: 4,
  text: 'Contacts',
  url: '#Contacts'
}
]
const items = links.map(link => link.text)

export default function NavBar () {
  return (
    <Navbar fixed='top' collapseOnSelect expand='md' variant='dark'>
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
          <Nav
            variant='pills'
            onSelect={(selectedKey) => {
              const a = document.querySelector(selectedKey.slice(1))
              try {
                a.scrollIntoView({ top: -10, behavior: 'smooth', block: 'start' })
              } catch (e) { }
            }}
          >
            <Scrollspy items={items} currentClassName='active' componentTag='div'>
              {links.map((link) =>
                (
                  <NavItem key={link.id}>
                    <LinkContainer to={link.url}>
                      <Nav.Link>{link.text}
                      </Nav.Link>
                    </LinkContainer>
                  </NavItem>
                )
              )}
            </Scrollspy>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}
