import React, { Component } from "react";
import PostContext from "../../contexts/PostContext";
import PostApiService from "../../services/post-api-service";
import { Button } from "../Utils/Utils";
import './NewPostForm.css';


export default class NewPostForm extends Component {
    static contextType = PostContext;

    handleSubmit = ev => {
        ev.preventDefault();
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
                    <label htmlFor="entrytitle" style={{ fontWeight: "bold" }}>Title</label> &nbsp;&nbsp;&nbsp;
                    <input type="text" name="entrytitle" placeholder="Feeling happy" required />
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="form-section">
                    <label htmlFor="entrysummary" style={{ fontWeight: "bold" }}>Entry</label> &nbsp;&nbsp;&nbsp;
                    <textarea name="entrysummary" cols="30" rows="10" placeholder="Type an entry.." required></textarea>
                    {/* <textarea
                        required
                        aria-label="Type an entry.."
                        name="entrysummary"
                        id="text"
                        cols="30"
                        rows="10"
                        placeholder="Type an entry.."
                    ></textarea> */}
                </div>

                <p style={{ fontWeight: "bold" }}>Select private or public:</p>
                <div className="privatepublic">
                    <input type="radio" name="entrytype" value="0" className="entry-type-radio" defaultChecked />
                    <label htmlFor="entrytype">
                        <span>Private</span>
                        {/* <div className="entrytypeexplanation">I would like this post to be private</div> */}
                    </label>

                    <input type="radio" name="entrytype" value="1" className="entry-type-radio" />
                    <label htmlFor="entrytype">
                        <span>Public</span>
                        {/* <div className="entrytypeexplanation">I would like this post to be public</div> */}
                    </label>
                </div>
                <Button type="submit">Post</Button>
            </form>
        );
    }
};
