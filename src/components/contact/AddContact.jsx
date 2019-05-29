import React, { Component } from 'react'
import { Consumer } from '../../context'
import uuid from 'uuid'

class AddContact extends Component {
  state = {
    nom: '',
    email: '',
    tel: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (dispatch, event) => {
    event.preventDefault()
    const newContact = {
      id: uuid(),
      nom: this.state.nom,
      email: this.state.email,
      tel: this.state.tel
    }

    dispatch({type: 'ADD_CONTACT', payload: newContact})

    this.setState({
      nom: '',
      email: '',
      tel: ''
    })

    this.props.history.push('/')
  }

  render () {

    return (
      <Consumer>
        {value => {
          return (
            <div className="card mb-3">
              <div className="card-header">Ajout de Contact</div>
              <div className="card-body">

                <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                  <div className="form-group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text"
                           className="form-control form-control-lg"
                           placeholder="Entrez un nom..."
                           name="nom"
                           value={this.state.nom}
                           onChange={this.onChange}
                           required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                           className="form-control form-control-lg"
                           placeholder="Entrez un email..."
                           name="email"
                           value={this.state.email}
                           onChange={this.onChange}
                           required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tel">Téléphone</label>
                    <input type="text"
                           className="form-control form-control-lg"
                           placeholder="Entrez un numéro de téléphone..."
                           name="tel"
                           value={this.state.tel}
                           onChange={this.onChange}
                           required
                    />
                  </div>

                  <input type="submit"
                         value="Ajouter un Contact"
                         className="btn btn-block btn-primary"
                  />
                </form>

              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact