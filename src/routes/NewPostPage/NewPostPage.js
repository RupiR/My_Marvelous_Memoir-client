import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import NewPostForm from '../../components/NewPostForm/NewPostForm'

export default class NewPostPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        history.push("/userpage")
    }

    render() {
        return (
            <Section className='NewPostPage'>
                <h2>Login</h2>
                <NewPostForm />
            </Section>
        )
    }
}
