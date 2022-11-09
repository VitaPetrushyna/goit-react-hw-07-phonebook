import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

// import PropTypes from 'prop-types';
import { FindLabel, FindInput } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleFilterInput = event => {
    const { value } = event.target;
    const action = setFilter(value);
    dispatch(action);
  };

  return (
    <FindLabel>
      Find contacts by name
      <FindInput
        type="text"
        value={filter}
        name="filter"
        onChange={handleFilterInput}
      ></FindInput>
    </FindLabel>
  );
};

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };

export default Filter;
