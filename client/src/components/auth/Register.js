import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    githubusername: '',
    password: '',
    password2: '',
  });

  const { name, email, githubusername, password, password2 } = formData;

  const handleOnChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      await register({ name, email, githubusername, password });
    }
  };

  // Redirect User after Registeration
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <section className='container'>
      <h1 className='large text-primary'>Sign Up</h1>

      <p className='lead'>
        <i className='fas fa-user-ninja'></i> Create Your Account
      </p>

      <form className='form' onSubmit={handleOnSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={handleOnChange}
            required
          />
        </div>

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
            type='text'
            placeholder='Github Username (Optional)'
            name='githubusername'
            value={githubusername}
            onChange={handleOnChange}
          />

          <small className='form-text'>
            Enter yout Github username for a DP eg.Mugilan-Codes
          </small>
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

        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            minLength='6'
            name='password2'
            value={password2}
            onChange={handleOnChange}
            required
          />
        </div>

        <input type='submit' value='Register' className='btn btn-primary' />
      </form>

      <p className='my-1'>
        Already Have an Account? <Link to='/login'>Sign In</Link>
      </p>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
