import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { ButtonStyled, Form, Input } from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    onSubmit(form.elements.query.value);
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Input type="text" name="query" />
      <ButtonStyled type="submit">
        <BsSearch />
      </ButtonStyled>
    </Form>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  handleSubmit: PropTypes.func,
};
