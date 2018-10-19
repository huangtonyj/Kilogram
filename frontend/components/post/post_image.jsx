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
      <div>
        <img
          src={this.props.currentPost.photoUrl}
          onClick={() => this.props.openModal({ modal: 'PostShow', postId: this.props.currentPost.id })}
          onDoubleClick={() => this.handleLike(this.props.currentPost.id)}
        />
      </div>
    );
  }
}
export default PostImage;