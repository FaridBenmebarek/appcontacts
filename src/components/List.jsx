import React, { Component } from 'react'
import Contact from './Contact'

class List extends Component {
  state = {
    contacts: [
      {
        id: 1,
        nom: 'John Doe',
        email: 'doe@gmail.com',
        tel: '01-02-03-04-05'
      },
      {
        id: 2,
        nom: 'John Doe',
        email: 'doe@gmail.com',
        tel: '01-02-03-04-05'
      },
      {
        id: 3,
        nom: 'John Doe',
        email: 'doe@gmail.com',
        tel: '01-02-03-04-05'
      }
    ]
  }

  supprime = (id) => {
    const nvContacts = this.state.contacts.filter(contact => contact.id !== id)
    this.setState({
      contacts: nvContacts
    })
  }

  render () {
    return (
      <div>
        {this.state.contacts.map(
          contact => (
            <Contact
              key={contact.id}
              nom={contact.nom}
              email={contact.email}
              tel={contact.tel}
              delecteClick={() => this.supprime(contact.id)}
            />
          )
        )}
      </div>
    )
  }
}

export default List