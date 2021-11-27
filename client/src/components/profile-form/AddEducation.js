import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxOnChange = (e) => {
    setFormData({ ...formData, current: !current });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addEducation(formData, navigate);
  };

  return (
    <section className='container'>
      <h1 className='large text-primary'>Add Your Education</h1>

      <p className='lead'>
        <i className='fas fa-code'></i> Add any school, bootcamp, etc that you
        have attended
      </p>

      <small>* = required field</small>

      <form className='form' onSubmit={handleOnSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* School or Bootcamp'
            name='school'
            value={school}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='* Degree or Certificate'
            name='degree'
            value={degree}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='Field Of Study'
            name='fieldofstudy'
            value={fieldofstudy}
            onChange={handleOnChange}
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
            Current School
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
