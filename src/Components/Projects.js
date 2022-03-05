import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Project = (props) => {
  const { info } = props
  const styles = {
    backgroundImage: `url(${info.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div className='project' style={styles}>
      <div className='project-content'>
        <h4>{`${info.name} (${info.year})`}</h4>
        <small className='project-assos'>{info.association}</small>
        <small className='project-type'>{info.type}</small>
        <p>{info.description}</p>
        <ul className='project-technologies'>
          {info.technologies.map((technique) => (
            <li key={technique} className='project-tech'> {technique}</li>))}
        </ul>
      </div>
      <span className='project-links'>
        <a
          href={info.preview === '' ? '#Projects' : info.preview}
          target={info.preview === '' ? '' : '_'}
          className={info.preview === '' ? 'disabled' : ''}
        >Preview
        </a>
        <a
          href={info.link === '' ? '#Projects' : info.link}
          target={info.link === '' ? '' : '_'}
          className={info.link === '' ? 'disabled' : ''}
        >Code
        </a>
      </span>
    </div>
  )
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

export default function Projects(props) {
  const { projects } = props
  return (
    <div id='Projects' className='projects'>
      <h2>Projects</h2>
      <Carousel
        className='project-list'
        responsive={responsive}
        swipeable
        showDots
        ssr
        autoPlaySpeed={10000}
        infinite
        itemClass='carousel-item-padding-32-px'
        removeArrowOnDeviceType={['tablet', 'mobile']}
      >
        {projects.map((project) => (<Project info={project} key={project.name} />))}
      </Carousel>
    </div>
  )
}
