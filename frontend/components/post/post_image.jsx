import React from 'react';

class PostImage extends React.Component {

  constructor(props) {
    super(props);
  }

  handleLike(postId) {
    if (this.props.currentPost.likers[this.props.currentUser.id] !== "true") {
      this.props.postLike(postId);
    }
  }

  render() {
    return (
      <img
        className="post-index-item-image"
        src={this.props.currentPost.photoUrl}
        onDoubleClick={() => this.handleLike(this.props.currentPost.id)}
      />
    );
  }
}
export default PostImage;