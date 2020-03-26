import React, { Component } from "react";
import PostContext from "../../contexts/PostContext";
import PostApiService from "../../services/post-api-service";
import { Button, Textarea } from "../../components/Utils/Utils";


export default class EditPostForm extends Component {
    static contextType = PostContext;

    handleSubmit = ev => {
        ev.preventDefault();
        const { post } = this.context;
        const { entrytitle, entrysummary, entrytype } = ev.target;
        PostApiService.updatePost(entrytitle.value, entrysummary.value, entrytype.value, post.id)
            .then(this.context.addPost)
            .then(() => {
                this.props.history.push('/userpage')
            })
            .catch(this.context.setError);
    };

    componentDidMount() {
        const { postId } = this.props.match.params;
        this.context.clearError();
        PostApiService.getPost(postId)
            .then(this.context.setPost)
            .catch(this.context.setError);
        PostApiService.getPostComments(postId)
            .then(this.context.setComments)
            .catch(this.context.setError);
    }

    render() {
        const { post, comments } = this.context;
        return (
            <form className="NewPostForm" onSubmit={this.handleSubmit}>
                <div class="form-section">
                    <label for="entrytitle">Entry title</label>
                    <input type="text" name="entrytitle" defaultValue={post.title} placeholder="Feeling happy" required />
                </div>

                <div class="form-section">
                    <label for="entrysummary">Entry</label>
                    <textarea name="entrysummary" defaultValue={post.summary} rows="15" required></textarea>
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
                <Button type="submit">Post Post</Button>
            </form>
        );
    }
}
