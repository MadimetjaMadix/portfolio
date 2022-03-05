import React from 'react'

export default function Home(props) {
  const { data } = props
  return (
    <div id='Home' className='home'>
      <div className='home-content'>
        <div className='home-content-animation' />
        <h2 id='home-name'> Hi, I am {data.name},</h2>
        <h1 id='home-description'>{data.tagLine} </h1>
        <p id='home-details'> {`"${data.description}"`} </p>
        <a href='#Contacts' className='btn'> Get in Touch </a>
        <br />
      </div>
      <div className='home-animation' />
    </div>
  )
}
