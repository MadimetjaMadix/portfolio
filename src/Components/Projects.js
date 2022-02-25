import React from 'react'

const Project = (props) => {
  const { info } = props
  return (
    <div className='project'>
      {info.name}
    </div>
  )
}

export default function Projects (props) {
  const { projects } = props
  return (
    <div id='Projects' className='projects'>
      <h2>Projects</h2>
      <div className='project-list'>
        {projects.map((project) => (<Project info={project} key={project.name} />))}
      </div>
    </div>
  )
}
