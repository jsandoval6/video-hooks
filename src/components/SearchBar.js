import React, { useState } from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(term);
    }

    const onInputChange = (e) => {
         setTerm(e.target.value );
    };

    return (
      <div className='search-bar ui segment'>
        <form onSubmit={onSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={term}
              onChange={onInputChange}
            />
          </div>
        </form>
      </div>
    );
}

export default SearchBar;