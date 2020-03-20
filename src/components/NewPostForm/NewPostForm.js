import React, { Component } from "react";
import PostContext from "../../contexts/PostContext";
import PostApiService from "../../services/post-api-service";
import { Button, Textarea } from "../Utils/Utils";


export default class NewPostForm extends Component {
    static contextType = PostContext;

    handleSubmit = ev => {
        ev.preventDefault();
        const { post } = this.context;
        const { text } = ev.target;
        PostApiService.postPost(post.id, text.value)
            .then(this.context.addPost)
            .then(() => {
                text.value = "";
            })
            .catch(this.context.setError);
    };

    render() {
        return (
            <form className="NewPostForm" onSubmit={this.handleSubmit}>
                <div class="form-section">
                    <label for="entry-title">Entry title</label>
                    <input type="text" name="entry-title" placeholder="Feeling happy" required />
                </div>

                <div class="form-section">
                    <label for="entry-summary">Entry</label>
                    <textarea name="entry-summary" rows="15" required></textarea>
                </div>

                <div className='currentmood'>
                    <label htmlFor='NewPostForm__currentmood'>
                        Current Mood
                    </label>
                    <Input
                        name='Current Mood'
                        type='text'
                        required
                        id='NewPostForm__currentmood'>
                    </Input>
                </div>

                <p>Select private or public</p>

                <input type="radio" name="entry-type" value="0" class="entry-type-radio" checked />
                <label for="entry-type">
                    <span>Private</span>
                    <div class="entry-type-explanation">I would like this post to be private</div>
                </label>

                <input type="radio" name="entry-type" value="1" class="entry-type-radio" />
                <label for="entry-type">
                    <span>Public</span>
                    <div class="entry-type-explanation">I would like this post to be public</div>
                </label>

                <div className="text">
                    <Textarea
                        required
                        aria-label="Type a Post..."
                        name="text"
                        id="text"
                        cols="30"
                        rows="3"
                        placeholder="Type a Post.."
                    ></Textarea>
                </div>
                <Button type="submit">Post Post</Button>
            </form>
        );
    }
}
