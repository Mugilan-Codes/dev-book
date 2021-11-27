import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPosts } from '../../actions/post';
import PostItem from './PostItem';
import PostForm from './PostForm';

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <section className='container'>
      <h1 className='large text-primary'>Posts</h1>

      <p className='lead'>
        <i className='fas fa-heart'></i> Welcome to the Developer Community
      </p>

      <PostForm />

      <div className='posts'>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ post: state.post });

export default connect(mapStateToProps, { getPosts })(Posts);
