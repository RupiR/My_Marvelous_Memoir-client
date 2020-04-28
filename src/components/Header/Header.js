import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import './Header.css'

export default class Header extends Component {
  state = {
    showMenu: window.screen.width < 500 ? false : true
  }
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          to='/userpage'>
          Userpage
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link
          to='/posts'>
          Public Posts
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/register'>
          Register
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link
          to='/login'>
          Login
        </Link>
      </div>
    )
  }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    let menu
    if (this.state.showMenu) {
      menu = TokenService.hasAuthToken()
        ? this.renderLogoutLink()
        : this.renderLoginLink()
    }
    return (
      <nav className='Header'>
        <h1>
          <Link to='/'>
            <img className='computerlogo' alt="computerlogo" src='/assets/computerlogo.png' />
          </Link>
        </h1>

        {menu}
        <div className='hamburgermenu'>
          <button onClick={this.toggleMenu}>&#9776;</button>
        </div>
      </nav>
    )
  }
}
