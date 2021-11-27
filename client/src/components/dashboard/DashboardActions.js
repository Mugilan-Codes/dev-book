import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn'>
        <i className='fas fa-id-card text-primary'></i> Edit Profile
      </Link>

      <Link to='/add-experience' className='btn'>
        <i className='fas fa-user-tie text-primary'></i> Add Experience
      </Link>

      <Link to='/add-education' className='btn'>
        <i className='fas fa-graduation-cap text-primary'></i> Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
