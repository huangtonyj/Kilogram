import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   loading: true
    // };
  }

  componentDidMount() {
    this.props.getPosts();
    // this.setState({ loading: false });
  }

  render() {

    // if (this.state.loading) return <h3>loading...</h3>;
    if (!this.props.posts[0]) return null;
    if (!this.props.posts[0].likers) return null;

    const postIndexItem = (
      this.props.posts.map((post) =>
        <PostIndexItem
          key={post.id}
          post={post}
          author={this.props.users[post.authorId]}
          currentUser={this.props.currentUser}
          postLike={this.props.postLike}
          deleteLike={this.props.deleteLike}
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