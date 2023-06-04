import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <>
      <label>
        Find contacts by name
        <br />
        <input
          className={css.input}
          onChange={event => dispatch(setFilter(event.target.value.trim()))}
          value={filter}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
};
