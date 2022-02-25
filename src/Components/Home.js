import React from 'react'

export default function Home (props) {
  const { data } = props
  return (
    <div id='Home' className='home'>
      <div className='home-content'>
        <h2 id='home-name'> Hi, I am {data.name},</h2>
        <h1 id='home-description'>{data.tagLine} </h1>
        <p id='home-details'> {data.description} </p>
        <button>Get in touch</button>
        <br />
      </div>
    </div>
  )
}
