import React, { Component } from "react";
import PostListContext from "../../contexts/PostListContext";
import PostApiService from "../../services/post-api-service";
import { Section } from "../../components/Utils/Utils";
import PostListItem from "../../components/PostListItem/PostListItem";
import { Link } from "react-router-dom";

export default class PostListPage extends Component {
  static contextType = PostListContext;

  componentDidMount() {
    this.context.clearError();
    PostApiService.getPosts()
      .then(this.context.setPostList)
      .catch(this.context.setError);
  }

  renderPosts() {
    const { postList = [] } = this.context;
    return postList.map(post => <PostListItem key={post.id} post={post} />);
  }

  render() {
    const { error } = this.context;
    return (
      <Section list className="PostListPage">
        <Link to="/addpost">Add New Post</Link>
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
            this.renderPosts()
          )}
      </Section>
    );
  }
}