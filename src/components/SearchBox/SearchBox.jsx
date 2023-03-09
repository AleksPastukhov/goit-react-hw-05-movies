import { SearchBar, SearchForm } from './SearchBox.styled';
import { BiSearchAlt } from 'react-icons/bi';

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
