import React from 'react'
import { Icon } from '@iconify/react'

export default function Contacts(props) {
  const { contacts } = props
  return (
    <div className='contacts'>
      <h2>Contacts</h2>
      <div className='contacts-content'>
        {contacts.map((contact) => {
          return (
            <a className='contact' key={contact.name} href={contact.link}>
              <Icon icon={contact.icon} /> {contact.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}
