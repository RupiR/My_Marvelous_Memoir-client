import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'

export default class LoginPage extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { history } = this.props
    history.push("/userpage")
  }

  render() {
    return (
      <Section className='LoginPage'>
        <>
          <header>
            <h2>Experience My Marvelous Memoir using these login credientials</h2>
            <h1><p>Username: Demouser</p>
              <p>Password: Demo1234!</p></h1>
          </header>
        </>,
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}
