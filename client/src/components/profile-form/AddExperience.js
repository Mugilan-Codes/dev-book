import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addExperience } from '../../actions/profile';

const AddExperience = ({ addExperience }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const { company, title, location, from, to, current, description } = formData;

  const handleOnChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleCheckboxOnChange = (e) => {
    setFormData({ ...formData, current: !current });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addExperience(formData, navigate);
  };

  return (
    <section className='container'>
      <h1 className='large text-primary'>Add An Experience</h1>

      <p className='lead'>
        <i className='fas fa-code'></i> Add any developer/programming positions
        that you have had in the past
      </p>

      <small>* = required field</small>

      <form className='form' onSubmit={handleOnSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Job Title'
            name='title'
            value={title}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='* Company'
            name='company'
            value={company}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            value={location}
            onChange={handleOnChange}
            name='location'
          />
        </div>

        <div className='form-group'>
          <h4>From Date</h4>
          <input
            type='date'
            name='from'
            value={from}
            onChange={handleOnChange}
          />
        </div>

        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='current'
              value={current}
              checked={current}
              onChange={handleCheckboxOnChange}
            />{' '}
            Current Job
          </p>
        </div>

        <div className='form-group'>
          <h4>To Date</h4>

          <input
            type='date'
            name='to'
            value={to}
            onChange={handleOnChange}
            disabled={current}
          />
        </div>

        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Job Description'
            value={description}
            onChange={handleOnChange}
          />
        </div>

        <input type='submit' className='btn btn-primary my-1' />

        <Link className='btn my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </section>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
