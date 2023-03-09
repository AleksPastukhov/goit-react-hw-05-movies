import { BiSearchAlt } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { SearchBar, SearchForm } from './SearchBox.styled';

export const SearchBox = ({ onFormSabmit }) => {
  return (
    <SearchBar>
      <SearchForm onSubmit={onFormSabmit}>
        <button>
          <BiSearchAlt />
        </button>

        <input
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
      </SearchForm>
    </SearchBar>
  );
};

SearchBox.prototypes = {
  onFormSabmit: PropTypes.func.isRequired,
};
