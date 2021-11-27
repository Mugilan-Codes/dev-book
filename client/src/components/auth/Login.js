import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleOnChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  // Redirect Logged in User
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <section className='container'>
      <h1 className='large text-primary'>Sign In</h1>

      <p className='lead'>
        <i className='fas fa-user-ninja'></i> Sign Into Your Account
      </p>

      <form className='form' onSubmit={handleOnSubmit}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            minLength='6'
            name='password'
            value={password}
            onChange={handleOnChange}
            required
          />
        </div>

        <input type='submit' value='Login' className='btn btn-primary' />
      </form>

      <p className='my-1'>
        Don't Have an Account? <Link to='/register'>Sign Up</Link>
      </p>
    </section>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
