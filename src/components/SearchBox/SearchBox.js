import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({searchHandler}) => {
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      searchHandler({searchTerm});
    }, 1500);

    return () => clearTimeout(delayTimeout);
    // eslint-disable-next-line
  }, [searchTerm]);

  const changeHandler = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  return (
    <>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Search'
          aria-label='Search'
          aria-describedby='SearchField'
          onChange={changeHandler}
          value={searchTerm}
        />
        <div className='input-group-append'>
          <button
            className='input-group-text'
            id='SearchField'
            onClick={() => searchHandler({searchTerm})}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  title: PropTypes.string,
};
