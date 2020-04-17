import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, from, to, current, description },
}) => (
  <div>
    <h3>{school}</h3>
    <p>
      <Moment format='DD/MMM/YYYY'>{from}</Moment> -{' '}
      {!to ? 'Now' : <Moment format='DD/MMM/YYYY'>{to}</Moment>}
    </p>
    <p>
      <strong>Degree: </strong>
      {degree}
    </p>
    <p>
      <strong>Field of Study: </strong>
      {fieldofstudy}
    </p>
    <p>
      <strong>Description: </strong>
      {description}
    </p>
  </div>
);

ProfileEducation.propTypes = { education: PropTypes.array.isRequired };

export default ProfileEducation;
