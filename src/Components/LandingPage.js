import React from 'react'
import Container from 'react-bootstrap/Container'

export default function LandingPage (props) {
  return (
    <div className='welcome'>
      <Container>
        <div className='content-tint'>
          <div className='content'>
            <h2 id='welcome-name'>mad</h2>
            <h1 id='welcome-description'>web</h1>
            <p id='welcome-details'> yesss</p>
            <button>cta</button>
            <br />
          </div>
        </div>
      </Container>
    </div>
  )
}
