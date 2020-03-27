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
            .then(this.context.addPost)
            .then(() => {
                // ev.target.reset;
            })
            .catch(this.context.setError);
    };

    render() {
        return (
            <form className="NewPostForm" onSubmit={this.handleSubmit}>
                <div class="form-section">
                    <label for="entrytitle">Entry title</label>
                    <input type="text" name="entrytitle" placeholder="Feeling happy" required />
                </div>

                <div class="form-section">
                    <label for="entrysummary">Entry</label>
                    <textarea name="entrysummary" rows="15" required></textarea>
                </div>

                <p>Select private or public</p>

                <input type="radio" name="entrytype" value="0" class="entry-type-radio" checked />
                <label for="entrytype">
                    <span>Private</span>
                    <div class="entrytypeexplanation">I would like this post to be private</div>
                </label>

                <input type="radio" name="entrytype" value="1" class="entry-type-radio" />
                <label for="entrytype">
                    <span>Public</span>
                    <div class="entrytypeexplanation">I would like this post to be public</div>
                </label>
                <Button type="submit">Post</Button>
            </form>
        );
    }
}
