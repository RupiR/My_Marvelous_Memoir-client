import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostContext, { nullPost } from "../../contexts/PostContext";
import { Link } from 'react-router-dom';
import PostApiService from "../../services/post-api-service";
import { NiceDate, Hyph, Section } from "../../components/Utils/Utils";
import CommentForm from "../../components/CommentForm/CommentForm";
import "./PostPage.css";

export default class PostPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = PostContext;

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

  componentWillUnmount() {
    this.context.clearPost();
  }

  deletePost = () => {
    const { postId } = this.props.match.params;
    PostApiService.deletePost(postId)
      .then(() => {
        this.props.history.push("/userpage")
      })
  }

  renderPost() {
    const { post, comments } = this.context;
    return (
      <>
        <h2>{post.title}</h2>
        <p>
          <PostStyle post={post} />
          {post.author.id && (
            <>
              <Hyph />
              <PostAuthor post={post} />
            </>
          )}
          <Hyph />
          <NiceDate date={post.date_created} />
        </p>
        <PostContent post={post} />
        {
          localStorage.userId == post.author.id ? (<>
            <button><Link style={{ textDecoration: 'none', color: 'black' }} to={'/edit/' + post.id}>Edit Post</Link></button>
        &nbsp;&nbsp;&nbsp;
            <button class="deleteButton" onClick={this.deletePost}>Delete Post</button>
          </>
          ) : ""
        }

        <PostComments comments={comments} />
        <CommentForm />
      </>
    );
  }

  render() {
    const { error, post } = this.context;
    let content;
    if (error) {
      content =
        error.error === `Post doesn't exist` ? (
          <p className="red">Post not found</p>
        ) : (
            <p className="red">There was an error</p>
          );
    } else if (!post.id) {
      content = <div className="loading" />;
    } else {
      content = this.renderPost();
    }
    return <Section className="PostPage">{content}</Section>;
  }
}

function PostStyle({ post }) {
  return (
    <span className="PostPage__posttype">
      {post.posttype}
    </span>
  );
}

function PostAuthor({ post = nullPost }) {
  return <span className="PostPage__author">{post.author.full_name}</span>;
}

function PostContent({ post }) {
  return <p className="PostPage__summary">{post.summary}</p>;
}

function PostComments({ comments = [] }) {
  return (
    <ul className="PostPage__comment-list">
      {comments.map(comment => (
        <li key={comment.id} className="PostPage__comment">
          <p className="PostPage__comment-text">
            <FontAwesomeIcon
              size="lg"
              icon="quote-left"
              className="PostPage__comment-icon blue"
            />
            {comment.text}
          </p>
          <p className="PostPage__comment-user">{comment.user.full_name}</p>
        </li>
      ))}
    </ul>
  );
}
