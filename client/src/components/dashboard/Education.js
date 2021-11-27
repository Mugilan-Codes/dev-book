import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteEducation } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>

      <td className='hide-sm'>{edu.degree}</td>

      <td className='hide-sm'>{edu.fieldofstudy}</td>

      <td>
        {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : 'Now'}
      </td>

      <td>
        <button
          onClick={() => deleteEducation(edu._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <h2 className='my-2'>Education Credentials</h2>

      <table className='table'>
        <thead>
          <tr>
            <th>School</th>

            <th className='hide-sm'>Degree</th>

            <th className='hide-sm'>Field Of Study</th>

            <th>Years</th>

            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
