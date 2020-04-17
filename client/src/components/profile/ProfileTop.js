import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div className='profile-top bg-primary p-2'>
      <img
        src={avatar}
        alt='Github DP instead of Gravatar'
        className='round-img my-1'
      />

      <h1 className='large'>{name}</h1>
      <p className='lead'>
        {status}
        {company && <span> at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div className='icons my-1'>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <i className='fas fa-globe fa-2x'></i>
        </a>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-twitter fa-2x'></i>
        </a>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-facebook fa-2x'></i>
        </a>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-reddit fa-2x'></i>
        </a>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-linkedin fa-2x'></i>
        </a>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-youtube fa-2x'></i>
        </a>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-instagram fa-2x'></i>
        </a>
      </div>
    </div>
  );
};

ProfileTop.propTypes = { profile: PropTypes.object.isRequired };

export default ProfileTop;
