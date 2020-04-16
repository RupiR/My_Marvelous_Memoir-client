import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import NewPostForm from '../../components/NewPostForm/NewPostForm'
import './NewPostPage.css'

export default class NewPostPage extends Component {
    static defaultProps = {
        location: {},
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
            <Section className='NewPostPage'>
                <h2>Add New Entry</h2>
                <NewPostForm handleLoginSuccess={this.handleLoginSuccess} />
            </Section>
        )
    }
}
