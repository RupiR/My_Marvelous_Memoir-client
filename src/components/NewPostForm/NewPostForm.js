import React, { Component } from "react";
import PostContext from "../../contexts/PostContext";
import PostApiService from "../../services/post-api-service";
import { Button, Textarea } from "../Utils/Utils";


export default class NewPostForm extends Component {
    static contextType = PostContext;

    handleSubmit = ev => {
        ev.preventDefault();
        const { post } = this.context;
        const { entrytitle, entrysummary, entrytype } = ev.target;
        PostApiService.createPost(entrytitle.value, entrysummary.value, entrytype.value)
            .then(data => {
                this.props.handleLoginSuccess()
            })
            .catch(this.context.setError);
    };

    render() {
        return (
            <form className="NewPostForm" onSubmit={this.handleSubmit}>
                <div className="form-section">
                    <label htmlFor="entrytitle">Entry title</label>
                    <input type="text" name="entrytitle" placeholder="Feeling happy" required />
                </div>

                <div className="form-section">
                    <label htmlFor="entrysummary">Entry</label>
                    <textarea name="entrysummary" rows="15" required></textarea>
                </div>

                <p>Select private or public</p>

                <input type="radio" name="entrytype" value="0" className="entry-type-radio" defaultChecked />
                <label htmlFor="entrytype">
                    <span>Private</span>
                    <div className="entrytypeexplanation">I would like this post to be private</div>
                </label>

                <input type="radio" name="entrytype" value="1" className="entry-type-radio" />
                <label htmlFor="entrytype">
                    <span>Public</span>
                    <div className="entrytypeexplanation">I would like this post to be public</div>
                </label>
                <Button type="submit">Post</Button>
            </form>
        );
    }
}
