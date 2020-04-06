import React, { Component } from "react";
import PostListContext from "../../contexts/PostListContext";
import PostApiService from "../../services/post-api-service";
import { Section } from "../../components/Utils/Utils";
import PostListItem from "../../components/PostListItem/PostListItem";
import { Link } from "react-router-dom";

export default class UserListPage extends Component {
  static contextType = PostListContext;

  componentDidMount() {
    this.context.clearError();
    PostApiService.getPosts()
      .then(this.context.setPostList)
      .catch(this.context.setError);
  }

  renderPosts() {
    const { postList = [] } = this.context;
    return postList.filter(post => post.author.id == localStorage.userId).map(post => <PostListItem key={post.id} post={post} />);
  }

  render() {
    const { error } = this.context;
    return (
      <Section list className="PostListPage">
        <button style={{ textDecoration: 'none', color: 'black' }}><Link to="/addpost">Add New Post</Link></button>
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
            this.renderPosts()
          )}
      </Section>
    );
  }
}
