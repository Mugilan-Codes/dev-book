import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => (
  <div class='profile-about bg-light p-2'>
    {bio && (
      <>
        <h2 class='text-primary'>About {name}</h2>

        <p>{bio}</p>

        <div class='line' />
      </>
    )}

    <h2 class='text-primary'>Skill Set</h2>

    <div class='skills'>
      {skills.map((skill, index) => (
        <div key={index} class='p-1'>
          <i class='fas fa-check'></i> {skill}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
