import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'
// import mylogo from './mylogo';


export default class Logo extends Component {
    render() {
        return (
            <Link to='/'>
                <img className='logophoto' src={mylogo} alt='logo' />
                {' '}
            My Marvelous Memoir
            </Link>
        )
    }
}
