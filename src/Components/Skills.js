import React from 'react'
import { Icon } from '@iconify/react'

const Skill = (skillInfo) => {
  const { skill } = skillInfo
  return (
    <div className='skill'>
      <span className='skill-icon'>
        <Icon icon={skill.icon} />
      </span>
      <p className='skill-name'>{skill.name}</p>
    </div>
  )
}

export default function Skills (props) {
  const { data } = props
  return (
    <div id='Skills' className='skills'>

      <h2>Skills</h2>
      <div>
        <h3>Technical Skills</h3>
        <div className='skills-list'>
          {data.skills.map((skill) => (<Skill skill={skill} key={skill.name} />))}
        </div>
      </div>
      <div>
        <h3>Programming Languages</h3>
        <div className='skills-list'>
          {data.p_languages.map((lang) => (<Skill skill={lang} key={lang.name} />))}
        </div>
      </div>

    </div>
  )
}
