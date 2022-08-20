import React, {useEffect, useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const SearchBox = ({title, searchHandler, query}) => {
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      searchHandler({searchTerm});
    }, 2000);

    return () => clearTimeout(delayTimeout);
    // eslint-disable-next-line
  }, [searchTerm]);

  const changeHandler = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  return (
    <>
      <InputGroup className='mb-3'>
        <Form.Control
          placeholder={title || 'Search by Name'}
          aria-label='SearchBox'
          aria-describedby='SearchBox'
          onChange={changeHandler}
          value={searchTerm}
        />
        <Button
          variant='outline-secondary'
          id='search'
          onClick={() => searchHandler({searchTerm})}
        >
          Search
        </Button>
      </InputGroup>
    </>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  title: PropTypes.string,
};
