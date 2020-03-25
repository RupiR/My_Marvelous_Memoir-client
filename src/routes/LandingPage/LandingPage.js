import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Section } from "../../components/Utils/Utils";
import "./LandingPage.css";

export default class LandingPage extends Component {
    render() {
        return (
            <Section className="LandingPage">
                <main role="main">
                    <header role="banner">
                        <Link to='/loginpage'>
                            <img className='heroimage' src='/assets/heroimagepic.jpg' />
                        </Link>
                    </header>
                    ........................................................................................
                <section>
                        <header>
                            <h1>Don't hold your feelings in, release them by writing.</h1>
                            ........................................................................................
                            <h2>Experience My Marvelous Memoir using these login credientials</h2>
                            <p>Username: Demouser</p>
                            <p>Password: Demo1234!</p>

                        </header>
                    </section>
                    ........................................................................................
                <section>
                        <header>
                            <h3>Your personal diary</h3>
                        </header>
                        <p>
                            Studies have shown that one form of de-stressing is by writing
                            down your feelings and emotions. My Marvelous Memoir allows you to
                            create posts with the choice of making them public or private.{" "}
                        </p>
                    </section>
                    ........................................................................................
                <section>
                        <header>
                            <h3>Read public entries from other users</h3>
                        </header>
                        <p>
                            Get inspiration by reading what other users have written. Comment
                            to share your opinion or to show your support
                        </p>
                    </section>
                </main>
            </Section >
        );
    }
}
