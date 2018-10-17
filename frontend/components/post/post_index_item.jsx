import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  handleLike(postId) {
    if (!this.props.post.likers[this.props.currentuser.id]) {
      this.props.postLike(postId);
    }
  }

  handleUnlike(postId) {
    this.props.deleteLike(postId);
  }


  render() {
    const { post, author, currentUser } = this.props;

    const likeButton = (
      (this.props.post.likers[this.props.currentuser.id]) ? (
        <a
          className="icon-heart-liked"
          onClick={() => this.handleUnlike(post.id)}
        >
        </a>
      ) : (
          <a
            className="icon-heart"
            onClick={() => this.handleLike(post.id)}
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
                  San Francisco
          </p>
              </div>
            </div>

          </div>


          <img
            className="post-index-item-image"
            src={post.photoUrl}
            onDoubleClick={() => this.handleLike(post.id)}
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
            <span>{Object.values(post.likers).filter(like => like === "true").length} likes</span>
          </div>


          <div className='post-index-item-caption'>

            <span className='post-index-item-caption-author'>
              <Link to={`/users/${author.id}`}>{author.username} </Link>
            </span>

            <span className='post-index-item-caption-caption'>
              {post.caption}
            </span>

          </div>


          <div className='post-index-item-comment'>
            <ul>
              <li>
                <span className='comment-author'>author1 </span>
                <span className='comment-body'>Comment1</span>
              </li>
              <li>
                <span className='comment-author'>author2  </span>
                <span className='comment-body'>Comment2</span>
              </li>
              <li>
                <span className='comment-author'>author3  </span>
                <span className='comment-body'>Comment3</span>
              </li>
            </ul>

            <p className='post-index-item-timestamp'>
              54 MINUTES AGO
        </p>

            <form className='post-index-item-comment-form'>
              <input
                type="text"
                placeholder="Add a comment..."
              />
            </form>
          </div>
        </div>
      </li >
    );
  }
}
export default PostIndexItem;