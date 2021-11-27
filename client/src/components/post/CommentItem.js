import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteComment } from '../../actions/post';
import formatDate from '../../utils/formatDate';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => (
  <div class='post bg-white p-1 my-1'>
    <div>
      <Link to={`/profile/${user}`}>
        <img
          class='round-img'
          src={avatar}
          alt='Github DP instead of Gravatar'
          onerror='imgError(this)'
        />

        <h4>{name}</h4>
      </Link>
    </div>

    <div>
      <p class='my-1'>{text}</p>

      <p className='post-date'>Posted on {formatDate(date)}</p>

      {!auth.loading && user === auth.user._id && (
        <button
          onClick={(e) => deleteComment(postId, _id)}
          type='button'
          className='btn btn-danger'
        >
          <i className='fas fa-times' />
        </button>
      )}
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { deleteComment })(CommentItem);
