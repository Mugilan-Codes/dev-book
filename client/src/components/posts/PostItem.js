import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => (
  <div className='post bg-white my-1 p-1'>
    <div>
      <a href='profile.html'>
        <img
          src={avatar}
          alt='Github DP instead of Gravatar'
          className='round-img'
        />
        <h4>{name}</h4>
      </a>
    </div>

    <div>
      <p className='my-1'>{text}</p>
      <p className='post-date'>
        Posted on <Moment format='DD/MMM/YYYY'>{date}</Moment>
      </p>
      <button type='button' className='btn btn-light'>
        <i className='fas fa-thumbs-up' />{' '}
        <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
      </button>
      <button type='button' className='btn btn-light'>
        <i className='fas fa-thumbs-down' />
      </button>
      <Link to={`/post/${_id}`} className='btn btn-primary'>
        Discussion{' '}
        {comments.length > 0 && (
          <span className='comment-count'>{comments.length}</span>
        )}
      </Link>
      {!auth.loading && user === auth.user._id && (
        <button type='button' className='btn btn-danger'>
          <i className='fas fa-times' />
        </button>
      )}
    </div>
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, {})(PostItem);
