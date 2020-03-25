import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import "./LandingPage.css";

export default class LandingPage extends Component {
    render() {
        return (
            <Section className="LandingPage">
                <main role="main">
                    <header role="banner">
                        <h1>Hero Image</h1>
                    </header>
                    ........................................................................................
                    <section>
                        <header>
                            <h1>My Marvelous Memoir</h1>
                            ........................................................................................
                            <h2>Don't hold your feelings in, release them by writing.</h2>
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
            </Section>
        );
    }
}
