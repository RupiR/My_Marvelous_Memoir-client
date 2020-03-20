import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, email, username, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
      full_name: full_name.value,
      email: email.value,
    })
      .then(user => {
        full_name.value = ''
        email.value = ''
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='full_name'>
          <label htmlFor='RegistrationForm__full_name'>
            Full name <Required />
          </label>
          <Input
            name='full_name'
            type='text'
            required
            id='RegistrationForm__full_name'>
          </Input>
        </div>
        <div className='username'>
          <label htmlFor='RegistrationForm__username'>
            User name <Required />
          </label>
          <Input
            name='username'
            type='text'
            required
            id='RegistrationForm__username'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <div className='email'>
          <label htmlFor='RegistrationForm__email'>
            Email <Required />
          </label>
          <Input
            name='email'
            type='text'
            required
            id='RegistrationForm__email'>
          </Input>
        </div>
        <Button type='submit'>
          Register
        </Button>
      </form>
    )
  }
}
