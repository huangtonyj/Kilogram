import React from 'react';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      commentBody: ''
    };
    this.handlePostComment = this.handlePostComment.bind(this);
  }

  handlePostComment(e) {
    e.preventDefault();

    const commentBody = this.state.commentBody;

    const comment = ({
      comment: commentBody,
      post_id: this.props.currentPost.id
    });


    this.props.postComment(comment)
      .then(() =>
        this.setState({
          commentBody: ''
        })
      );
  }

  render() {

    return (
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
    );
  }
}
export default CommentForm;