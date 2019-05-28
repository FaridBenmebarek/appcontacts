import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../context'

class List extends Component {


  render () {
    return (
      <Consumer>
        {value => {
          return (
            <div>
              {value.contacts.map(
                contact => (
                  <Contact
                    key={contact.id}
                    id={contact.id}
                    nom={contact.nom}
                    email={contact.email}
                    tel={contact.tel}
                  />
                )
              )}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default List