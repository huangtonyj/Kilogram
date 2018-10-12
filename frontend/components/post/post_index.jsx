import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.getPosts();
    this.setState({ loading: false });
  }

  render() {

    if (this.state.loading) return <h3>loading...</h3>;

    const postIndexItem = (
      this.props.posts.map((post) =>
        <PostIndexItem
          key={post.id}
          post={post}
          author={this.props.users[post.authorId]}
        />
      )
    );

    return (
      <div>
        <ul>
          {postIndexItem}
        </ul>
      </div>
    );
  }
}

export default PostIndex;