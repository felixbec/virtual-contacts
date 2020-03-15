import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                aria-label="Search Contacts"
                className="pa3 ba b--green"
                name="search"
                type="search" 
                placeholder="Search" 
                onChange={searchChange}
                />
        </div>
        
    )
}

export default SearchBox;