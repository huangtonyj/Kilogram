import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    if (!this.props.posts[0]) return null;
    if (!this.props.posts[0].likers) return null;

    const postIndexItem = (
      this.props.posts.map((post) =>
        <PostIndexItem
          key={post.id}
          currentUser={this.props.currentUser}
          currentPost={post}
          author={this.props.users[post.authorId]}
          authors={this.props.users} // maybe a more elaborate selector to select only the associate comment authors
          comments={Object.values(this.props.comments)
            .filter((comment) => (comment.postId === post.id))}

          postLike={this.props.postLike}
          deleteLike={this.props.deleteLike}
          postComment={this.props.postComment}

          openModal={this.props.openModal}
          closeModal={this.props.closeModal}
        />
      ).reverse()
    );

    return (
      <div className='post-index'>
        <ul>
          {postIndexItem}
        </ul>
      </div>
    );
  }
}

export default PostIndex;