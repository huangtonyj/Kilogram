import React from 'react';
import { Link } from 'react-router-dom';

import CommentIndex from './comment/comment_index';

class PostIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      commentBody: ''
    };
    this.handlePostComment = this.handlePostComment.bind(this);
  }

  handleLike(postId) {
    if (this.props.currentPost.likers[this.props.currentUser.id] !== "true") {
      this.props.postLike(postId);
    }
  }

  handleUnlike(postId) {
    this.props.deleteLike(postId);
  }

  likesCounter() {
    return Object.values(this.props.currentPost.likers)
      .filter(like => like === "true").length;
  }

  handlePostComment(e) {
    e.preventDefault();

    const commentBody = this.state.commentBody;

    const comment = ({
      comment: commentBody,
      post_id: this.props.post.id
    });


    this.props.postComment(comment)
      .then(() =>
        this.setState({
          commentBody: ''
        })
      );
  }


  render() {
    const { currentPost, author, currentUser, comments, authors } = this.props;

    const likeButton = (
      (currentPost.likers[currentUser.id] === "true") ? (
        <a
          className="icon-heart-liked"
          onClick={() => this.handleUnlike(currentPost.id)}
        >
        </a>
      ) : (
          <a
            className="icon-heart"
            onClick={() => this.handleLike(currentPost.id)}
          >
          </a>
        )
    );

    return (
      <li>
        <div className="post-index-item">

          <div className='post-index-item-header'>

            <div className='post-index-item-header-container'>
              {/* <div className='post-index-item-header-profile-pic'> */}
              <i className="fas fa-user "></i>
              {/* </div> */}

              <div className='post-index-item-header-text'>
                <p className='post-index-item-author'>
                  <Link to={`/users/${author.id}`}>{author.username}</Link>
                </p>
                <p className='post-index-item-location'>
                  {currentPost.location}
                </p>
              </div>
            </div>

          </div>


          <img
            className="post-index-item-image"
            src={currentPost.photoUrl}
            onDoubleClick={() => this.handleLike(currentPost.id)}
          />


          <div className='post-index-item-actionbar'>
            <div>
              {likeButton}
              <a href="#" className="icon-comment"></a>
              <a href="#" className="icon-share"></a>
            </div>
            <a href="#" className="icon-bookmark"></a>
          </div>


          <div className='post-index-item-likes'>
            <span>{this.likesCounter()} likes</span>
          </div>


          <div className='post-index-item-caption'>

            <span className='post-index-item-caption-author'>
              <Link to={`/users/${author.id}`}>{author.username} </Link>
            </span>

            <span className='post-index-item-caption-caption'>
              {currentPost.caption}
            </span>

          </div>


          <div className='post-index-item-comment'>
            <CommentIndex
              author={author}
              currentPost={currentPost}
              comments={comments}
              authors={authors}
            />

            <p className='post-index-item-timestamp'>
              Once upon a time, not so long ago.
            </p>
          </div>

          <form
            className='post-index-item-comment-form'
            onSubmit={this.handlePostComment}
          >
            <input
              type="text"
              placeholder="Add a comment..."
              value={this.state.commentBody}
              onChange={(e) => this.setState({
                commentBody: e.currentTarget.value
              })}
            />
          </form>
        </div>
      </li >
    );
  }
}
export default PostIndexItem;