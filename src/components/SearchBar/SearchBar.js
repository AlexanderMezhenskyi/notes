import React from 'react';
import './SearchBar.css';

const SearchBar = ({term, onSearch}) => {
    return (
        <div className="form-group">
            <input type="text"
                   className="form-control"
                   autoComplete="off"
                   value={term}
                   onChange={onSearch}/>
        </div>
    );
};

export default SearchBar;