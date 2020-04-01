import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Section } from "../../components/Utils/Utils";
import "./LandingPage.css";

export default class LandingPage extends Component {
    render() {
        return (
            <Section className="LandingPage">
                <main role="main">
                    <header role="banner">
                        <Link to='/'>
                            <img className='heroimage' src='/assets/heroimagepic.jpg' />
                        </Link>
                    </header>
                    <h1 className="dots" >........................................................................................</h1>
                    <section>
                        <header>
                            <h2>Experience My Marvelous Memoir using these login credientials</h2>
                            <h1><p>Username: Demouser</p>
                                <p>Password: Demo1234!</p></h1>
                        </header>
                    </section>
                    <h1 className="dots">........................................................................................</h1>
                    <section className="personalpage">
                        <header>
                            <h3>Your personal diary</h3>
                        </header>
                        <p>
                            <Link to='/loginpage'>
                                <img className='screenshotpost' src='/assets/screenshotpost.png' />
                            </Link>
                        </p>
                    </section>

                    {/* <section>
                        <header>
                            <h3>Read public entries from other users</h3>
                        </header>
                        <p>
                            Get inspiration by reading what other users have written. Comment
                            to share your opinion or to show your support
                        </p>
                    </section> */}
                </main>
            </Section >
        );
    }
}
