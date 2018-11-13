import React from 'react';

class PostActionBar extends React.Component {

  constructor(props) {
    super(props);
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


  render() {
    const { currentUser, currentPost } = this.props;
    if (!this.props.currentPost) { return null; }

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
      <div>
        <div className='post-index-item-actionbar'>
          <div>
            {likeButton}
            {/* <a href="" className="icon-comment"></a> */}
            {/* <a className="icon-share"></a> */}
          </div>
          {/* <a className="icon-bookmark"></a> */}
        </div>


        <div className='post-likes-counter'>
          <span className='bold-600 font-size-10'>
            {this.likesCounter()} likes
          </span>
        </div>
      </div>

    );
  }
}
export default PostActionBar;