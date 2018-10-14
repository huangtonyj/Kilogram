import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post, author }) => (
  <li>
    <div className="post-index-item">

      <div className='post-index-item-header'>

        <div className='post-index-item-header-container'>
          {/* <div className='post-index-item-header-profile-pic'> */}
          <i class="fas fa-user "></i>
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
      />


      <div className='post-index-item-actionbar'>
        <div>
          <a href="#" className="icon-heart"></a>
          <a href="#" className="icon-comment"></a>
          <a href="#" className="icon-share"></a>
        </div>
        <a href="#" className="icon-bookmark"></a>
      </div>


      <div className='post-index-item-likes'>
        <span>333 likes</span>
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
            value="Add a comment..."
          />
        </form>
      </div>
    </div>
  </li >
);

export default PostIndexItem;