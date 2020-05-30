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
                        <Link to='/'>
                            <img className='heroimage' alt="heroimage" src='/assets/heroimagepic.jpg' />
                        </Link>
                    </header>
                    <h1 className="dots" >........................................................................................</h1>
                    <section>
                        <header>
                            <h2>My Marvelous Memoir</h2>
                            <h1>It has proven over and over again that keeping a journal/private dairy has been effective in helping with anxiety. My Marvelous Memoir is an online personal diary app that allows you to create daily posts which you can edit and delete at anytime.</h1>
                        </header>
                    </section>
                    <h1 className="dots">........................................................................................</h1>
                    <section className="personalpage">
                        <header>
                            <h3>Your personal diary</h3>
                        </header>
                        <p>

                            <img className='screenshotpost' alt="screenshotpost" src='/assets/screenshotpost.PNG' />

                        </p>
                    </section>
                </main>
            </Section >
        );
    }
};
