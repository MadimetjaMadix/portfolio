import React from 'react'
import Container from 'react-bootstrap/Container'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Contacts from './Contacts'

export default function LandingPage(props) {
  const { data } = props
  return (
    <Container>
      <div className='welcome-tint'>
        <Home data={data} />
        <Skills data={data} />
        <Projects projects={data.projects} />
        <Contacts contacts={data.contacts} />
      </div>
    </Container>

  )
}
